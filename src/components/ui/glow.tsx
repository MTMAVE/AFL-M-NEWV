import { cn } from "../../lib/utils";

interface GlowProps {
  variant?: "top" | "bottom";
  className?: string;
}

export function Glow({ variant = "top", className }: GlowProps) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 z-0",
        variant === "top" ? "-top-40" : "-bottom-40",
        "transform-gpu overflow-hidden blur-3xl",
        className
      )}
    >
      <div
        className={cn(
          "relative aspect-[1155/678] w-full",
          variant === "top" ? "left-[calc(50%-11rem)]" : "left-[calc(50%+3rem)]",
          "rotate-[30deg] bg-gradient-to-tr",
          variant === "top"
            ? "from-primary to-accent"
            : "from-accent to-primary",
          "opacity-30"
        )}
      />
    </div>
  );
}