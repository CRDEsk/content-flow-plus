import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    // SEO optimization for Contact page
    document.title = "Contact | ContentRemovalDesk - Assistance 24/7 pour Créateurs";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contactez ContentRemovalDesk pour une assistance immédiate. Équipe disponible 24/7 pour protéger votre contenu. Réponse en moins d'1h.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-foreground block">Des questions ?</span>
              <span className="text-primary block">On est là pour toi.</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Contacte-nous directement. Nous répondons rapidement, souvent en moins d'1h.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 border border-zinc-800/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 group-hover:bg-primary/10 flex items-center justify-center transition-colors flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground">Email</h3>
                  <p className="text-sm text-zinc-400">Réponse rapide</p>
                </div>
              </div>
              <a 
                href="mailto:support@contentremovaldesk.com" 
                className="block text-primary hover:text-primary/80 transition-colors text-sm font-medium break-all break-words overflow-wrap-anywhere"
              >
                support@contentremovaldesk.com
              </a>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 border border-zinc-800/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">WhatsApp</h3>
                  <p className="text-sm text-zinc-400">Chat direct</p>
                </div>
              </div>
              <a 
                href="https://wa.me/32460236990" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                +32 460 23 69 90
              </a>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 border border-zinc-800/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Instagram</h3>
                  <p className="text-sm text-zinc-400">DM ouverts 24/7</p>
                </div>
              </div>
              <a 
                href="https://instagram.com/crdprotect" 
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                @crdprotect
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
