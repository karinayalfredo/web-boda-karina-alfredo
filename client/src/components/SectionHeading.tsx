import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-16 space-y-4", className)}>
      {subtitle && (
        <p className={cn(
          "uppercase tracking-[0.2em] text-sm font-semibold",
          light ? "text-white/80" : "text-primary"
        )}>
          {subtitle}
        </p>
      )}
      <h2 className={cn(
        "font-serif text-4xl md:text-5xl lg:text-6xl font-medium",
        light ? "text-white" : "text-foreground"
      )}>
        {title}
      </h2>
      <div className="w-24 h-1 bg-primary/30 mx-auto mt-6 rounded-full" />
    </div>
  );
}
