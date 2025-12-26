import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Presentation as PresentationIcon,
  Users,
  Building2,
  ArrowRight,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Presentation = () => {
  
  const presentations = [
    {
      title: "CRD Presentation",
      description: "Main ContentRemovalDesk presentation",
      route: "/presentation",
      icon: Shield,
      color: "from-primary to-primary/80"
    },
    {
      title: "CRD Presentation (English)",
      description: "Main ContentRemovalDesk presentation in English",
      route: "/presentation-en",
      icon: Shield,
      color: "from-primary to-primary/80"
    },
    {
      title: "Hard Site Escalations",
      description: "Difficult sites & server-level removal for elite agencies",
      route: "/hardsite-escalations",
      icon: Shield,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Creator Presentation",
      description: "Presentation for content creators",
      route: "/presentation-createurs",
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Agency Presentation",
      description: "Presentation for agencies",
      route: "/agency-presentation-2",
      icon: Building2,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Onboarding Presentation",
      description: "Astrid Nelsia - Client onboarding presentation",
      route: "/pr/onboarding",
      icon: PresentationIcon,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 mb-6 shadow-lg shadow-primary/30">
            <PresentationIcon className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
            Presentation Menu
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Select a presentation to view
          </p>
        </motion.div>

        {/* Presentation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {presentations.map((presentation, index) => {
            const Icon = presentation.icon;
            return (
              <motion.div
                key={presentation.route}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={presentation.route}>
                  <div className="group relative h-full p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${presentation.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className={`relative mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${presentation.color} shadow-lg`}>
                      <Icon className="w-7 h-7 text-black" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                        {presentation.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mb-4">
                        {presentation.description}
                      </p>

                      {/* Arrow */}
                      <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                        <span className="text-sm font-medium mr-2">View Presentation</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            className="border-zinc-800 text-zinc-300 hover:text-white hover:border-primary/50"
          >
            <Link to="/">
              ← Back to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Presentation;
