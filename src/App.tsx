import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MonEspace from "./pages/MonEspace";
import NotreSolution from "./pages/NotreSolution";
import Tarifs from "./pages/Tarifs";
import EscaladesLegal from "./pages/EscaladesLegal";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import CasClients from "./pages/CasClients";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mon-espace" element={<MonEspace />} />
          <Route path="/notre-solution" element={<NotreSolution />} />
          <Route path="/cas-clients" element={<CasClients />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/escalades-legal" element={<EscaladesLegal />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
