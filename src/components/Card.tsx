import type { ElementType } from "react";

interface CardProps {
  title: string;
  description?: string;
  icon: ElementType; 
  className?: string;
}

export function Card({ title, description, icon: Icon }: CardProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform hover:shadow-glow-primary ">
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-2 transition-colors">
        <Icon className="w-6 h-6 text-primary " />
      </div>
      
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}