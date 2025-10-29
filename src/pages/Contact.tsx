import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Contactez-Nous
              </h1>
              <p className="text-xl text-zinc-400">
                Une question ? Notre équipe vous répond en moins d'1h
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="glass-card p-8 rounded-2xl mb-8">
                  <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet</label>
                      <Input placeholder="Votre nom" className="bg-zinc-900/50 border-zinc-800" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="votre@email.com" className="bg-zinc-900/50 border-zinc-800" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Sujet</label>
                      <Input placeholder="Objet de votre message" className="bg-zinc-900/50 border-zinc-800" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Décrivez votre demande..." 
                        className="bg-zinc-900/50 border-zinc-800 min-h-[150px]" 
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold">
                      Envoyer le message
                    </Button>
                  </form>
                </div>
              </div>

              <div className="space-y-8">
                <div className="glass-card p-8 rounded-2xl">
                  <Mail className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-zinc-400 mb-2">support@contentremovaldesk.com</p>
                  <p className="text-sm text-zinc-500">Réponse en moins d'1h</p>
                </div>

                <div className="glass-card p-8 rounded-2xl">
                  <MessageSquare className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Instagram</h3>
                  <p className="text-zinc-400 mb-2">@crdprotect</p>
                  <p className="text-sm text-zinc-500">DM ouverts 24/7</p>
                </div>

                <div className="glass-card p-8 rounded-2xl">
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Disponibilité</h3>
                  <p className="text-zinc-400 mb-2">Support 24/7</p>
                  <p className="text-sm text-zinc-500">Équipe disponible jour et nuit</p>
                </div>

                <div className="glass-card p-8 rounded-2xl bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Urgence ?</h3>
                  <p className="text-zinc-400 mb-4">
                    Pour les cas urgents nécessitant une intervention immédiate, contactez-nous directement sur Instagram.
                  </p>
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    Contact urgent
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
