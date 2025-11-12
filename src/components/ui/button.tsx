import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 font-medium",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-accent/10 hover:text-accent transition-all duration-300",
        secondary: "bg-secondary/20 text-secondary-foreground hover:bg-secondary/30",
        ghost: "hover:bg-accent/10 hover:text-accent transition-all duration-300",
        link: "text-accent underline-offset-4 hover:underline",
        // Variantes luxueuses avec les couleurs exactes
        luxury: "bg-gradient-to-r from-gold to-gold-dark text-black font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300",
        "luxury-outline": "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-black font-medium transition-all duration-300",
        minimal: "bg-card border border-border text-foreground hover:border-accent hover:text-accent transition-all duration-300",
        elegant: "glass-card text-foreground hover:glow-gold border border-border/20 hover:border-accent/50 transition-all duration-300"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (buttonRef.current) {
          const rect = buttonRef.current.getBoundingClientRect();
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
      };

      const button = buttonRef.current;
      if (button) {
        button.addEventListener("mousemove", handleMouseMove);
        return () => button.removeEventListener("mousemove", handleMouseMove);
      }
    }, []);

    return (
      <Comp
        ref={ref || buttonRef}
        className={cn(
          buttonVariants({ variant, size, className }),
          "particle-effect relative"
        )}
        style={
          {
            "--x": `${mousePosition.x}px`,
            "--y": `${mousePosition.y}px`,
          } as React.CSSProperties
        }
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
