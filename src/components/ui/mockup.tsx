import { cn } from "../../lib/utils";

interface MockupProps {
  children: React.ReactNode;
  type?: "responsive" | "window";
  className?: string;
}

export function Mockup({ children, type = "responsive", className }: MockupProps) {
  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
      {children}
    </div>
  );
}

interface MockupFrameProps {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
}

export function MockupFrame({ children, className, size = "medium" }: MockupFrameProps) {
  const sizeClasses = {
    small: "max-w-3xl",
    medium: "max-w-4xl",
    large: "max-w-5xl",
  };

  return (
    <div className={cn("mx-auto w-full", sizeClasses[size], className)}>
      {children}
    </div>
  );
}