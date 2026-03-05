import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
  container?: boolean;
  as?: "section" | "div" | "article";
}

export function Section({
  id,
  className,
  children,
  noPadding = false,
  container = true,
  as: Tag = "section",
  ...props
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative",
        !noPadding && "section-padding",
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {children}
        </div>
      ) : (
        children
      )}
    </Tag>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent">
        <span className="w-4 h-px bg-accent" />
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionSubheading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-foreground-3 text-lg leading-relaxed mt-4 max-w-2xl", className)}>
      {children}
    </p>
  );
}
