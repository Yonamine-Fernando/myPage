import type { ReactNode } from "react";


interface CardProps {
    title: string;
    description: string;
    icon: ReactNode;
    className?: string;
}

export function Card ({ title, description, icon }: CardProps) {
    return (
        <div className="rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col gap-1 px-5 py-6 items-start hover:shadow-glow-primary hover:scale-[1.02] transition-transform group">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
        <div className="w-6 h-6 text-primary">{icon}</div>
        </div>
        <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    )
}