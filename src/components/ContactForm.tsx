import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { trackFormSubmit, trackButtonClick } from "@/lib/analytics";
import { formRateLimiter, sanitizeFormData, sanitizeInput } from "@/lib/security";
import LoadingSpinner from "@/components/LoadingSpinner";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes"),
  email: z
    .string()
    .email("Format d'email invalide. Exemple: votre@email.com")
    .max(255, "L'email ne peut pas dépasser 255 caractères"),
  subject: z
    .string()
    .min(3, "Le sujet doit contenir au moins 3 caractères")
    .max(200, "Le sujet ne peut pas dépasser 200 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(5000, "Le message ne peut pas dépasser 5000 caractères"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [rateLimitError, setRateLimitError] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setRateLimitError(null);
    setApiError(null);
    
    // Rate limiting check
    const userIdentifier = data.email || "anonymous";
    if (!formRateLimiter.isAllowed(userIdentifier)) {
      const remainingTime = Math.ceil(formRateLimiter.getRemainingTime(userIdentifier) / 1000);
      setRateLimitError(`Trop de tentatives. Veuillez réessayer dans ${remainingTime} seconde${remainingTime > 1 ? 's' : ''}.`);
      toast({
        title: "Trop de tentatives",
        description: `Veuillez patienter ${remainingTime} seconde${remainingTime > 1 ? 's' : ''} avant de réessayer.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    trackButtonClick("Contact Form Submit", "Contact Page");

    try {
      // Sanitize form data
      const sanitizedData = sanitizeFormData(data);

      // Try API call first, fallback to mailto if it fails
      let apiSuccess = false;
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify(sanitizedData),
        });

        if (response.ok) {
          apiSuccess = true;
          await response.json().catch(() => ({ success: true }));
        }
      } catch (apiError) {
        // API endpoint doesn't exist or network error - use mailto fallback
        if (import.meta.env.DEV) {
          console.log('API endpoint not available, using mailto fallback');
        }
      }

      // If API failed, use mailto as fallback
      if (!apiSuccess) {
        const mailtoLink = `mailto:support@contentremovaldesk.com?subject=${encodeURIComponent(sanitizedData.subject)}&body=${encodeURIComponent(`Nom: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\n\nMessage:\n${sanitizedData.message}`)}`;
        // Open mailto (user's email client will handle it)
        window.location.href = mailtoLink;
        
        // Show success message after a short delay to allow mailto to open
        setTimeout(() => {
          trackFormSubmit("Contact Form", true);
          setIsSuccess(true);
          toast({
            title: "Message préparé !",
            description: "Votre client email s'ouvre. Envoyez le message pour nous contacter.",
          });

          reset();
          formRateLimiter.reset(userIdentifier);
          
          if (onSuccess) {
            onSuccess();
          }

          // Reset success state after 5 seconds
          setTimeout(() => setIsSuccess(false), 5000);
        }, 500);
        
        return; // Exit early for mailto flow
      }

      // API success flow
      trackFormSubmit("Contact Form", true);
      setIsSuccess(true);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      reset();
      formRateLimiter.reset(userIdentifier);
      
      if (onSuccess) {
        onSuccess();
      }

      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Une erreur s'est produite. Veuillez réessayer.";
      setApiError(errorMessage);
      trackFormSubmit("Contact Form", false);
      
      toast({
        title: "Erreur",
        description: errorMessage,
        variant: "destructive",
      });

      // Fallback to mailto if API fails
      if (errorMessage.includes("connexion") || errorMessage.includes("réseau")) {
        const mailtoLink = `mailto:support@contentremovaldesk.com?subject=${encodeURIComponent(sanitizeInput(data.subject))}&body=${encodeURIComponent(`Nom: ${sanitizeInput(data.name)}\nEmail: ${sanitizeInput(data.email)}\n\nMessage:\n${sanitizeInput(data.message)}`)}`;
        // Optionally open mailto as fallback
        // window.location.href = mailtoLink;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 backdrop-blur-xl p-8 border border-primary/20 text-center">
        <div className="flex justify-center mb-4">
          <div className="relative w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Message envoyé !</h3>
        <p className="text-zinc-400">
          Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            Nom complet *
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Votre nom"
            className="bg-zinc-900/50 border-zinc-800 text-foreground placeholder:text-zinc-500 focus:border-primary"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <div id="name-error" className="flex items-start gap-2 text-sm text-red-400" role="alert">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{errors.name.message}</span>
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="votre@email.com"
            className="bg-zinc-900/50 border-zinc-800 text-foreground placeholder:text-zinc-500 focus:border-primary"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <div id="email-error" className="flex items-start gap-2 text-sm text-red-400" role="alert">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{errors.email.message}</span>
            </div>
          )}
        </div>
      </div>

      {/* Subject Field */}
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-foreground">
          Sujet *
        </Label>
        <Input
          id="subject"
          {...register("subject")}
          placeholder="Sujet de votre message"
          className="bg-zinc-900/50 border-zinc-800 text-foreground placeholder:text-zinc-500 focus:border-primary"
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
          {errors.subject && (
            <div id="subject-error" className="flex items-start gap-2 text-sm text-red-400" role="alert">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{errors.subject.message}</span>
            </div>
          )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground">
          Message *
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Votre message..."
          rows={6}
          className="bg-zinc-900/50 border-zinc-800 text-foreground placeholder:text-zinc-500 focus:border-primary resize-none"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
          {errors.message && (
            <div id="message-error" className="flex items-start gap-2 text-sm text-red-400" role="alert">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{errors.message.message}</span>
            </div>
          )}
      </div>

      {/* Error Messages */}
      {rateLimitError && (
        <div className="flex items-start gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400" role="alert">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <span>{rateLimitError}</span>
        </div>
      )}
      
      {apiError && (
        <div className="flex items-start gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400" role="alert">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold mb-1">Erreur de connexion</p>
            <p>{apiError}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting || !!rateLimitError}
        className="w-full bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-8 py-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner size="sm" />
            <span className="ml-2">Envoi en cours...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Envoyer le message
          </>
        )}
      </Button>

      <p className="text-xs text-zinc-500 text-center">
        En cliquant sur "Envoyer", vous acceptez que nous traitions vos données personnelles conformément à notre{" "}
        <a href="/politique-confidentialite" className="text-primary hover:underline">
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  );
};

export default ContactForm;

