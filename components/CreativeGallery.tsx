"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Palette, Video, Code, Layout, LucideIcon } from "lucide-react";
import { creativeWork } from "@/data/content";
import { Section, SectionLabel, SectionHeading, SectionSubheading } from "./Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Category = "all" | "web" | "video" | "design" | "product";

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Video", value: "video" },
  { label: "Design", value: "design" },
  { label: "Product", value: "product" },
];

const categoryIcons: Record<string, LucideIcon> = {
  web: Code,
  video: Video,
  design: Palette,
  product: Layout,
};

const categoryColors: Record<string, string> = {
  web: "text-accent bg-accent/10 border-accent/20",
  video: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  design: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  product: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
};

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: (typeof creativeWork)[0];
  index: number;
  onClick: () => void;
}) {
  const Icon = categoryIcons[item.category] || Palette;
  const color = categoryColors[item.category] || categoryColors.design;

  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      onClick={onClick}
      className="w-full text-left group glass rounded-2xl border border-border hover:border-border-bright card-glow overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`View ${item.title}`}
    >
      {/* Placeholder visual */}
      <div className="relative h-40 bg-surface-3 overflow-hidden flex items-center justify-center">
        <div className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110",
          color
        )}>
          <Icon size={28} />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-3/0 to-surface-3/80" />
        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border glass", color)}>
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-foreground text-sm group-hover:text-foreground transition-colors line-clamp-1">
          {item.title}
        </h3>
        <p className="text-xs text-foreground-3 mt-0.5">{item.role}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {item.tools.slice(0, 3).map((tool) => (
            <span key={tool} className="chip text-[10px]">{tool}</span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

function GalleryModal({
  item,
  onClose,
}: {
  item: (typeof creativeWork)[0];
  onClose: () => void;
}) {
  const Icon = categoryIcons[item.category] || Palette;
  const color = categoryColors[item.category] || categoryColors.design;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative glass-bright rounded-2xl border border-border-bright shadow-card max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header visual */}
        <div className="relative h-48 bg-surface-3 flex items-center justify-center">
          <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center border", color)}>
            <Icon size={36} />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg glass flex items-center justify-center text-foreground-3 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">{item.title}</h2>
              <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border", color)}>
                {item.category}
              </span>
            </div>
            <p className="text-sm text-foreground-3 mt-0.5">{item.role}</p>
          </div>

          <p className="text-sm text-foreground-2 leading-relaxed">{item.description}</p>

          <div>
            <p className="text-xs font-semibold text-foreground-3 uppercase tracking-wider mb-2">Tools</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tools.map((tool) => (
                <span key={tool} className="chip">{tool}</span>
              ))}
            </div>
          </div>

          {item.link !== "#" && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <ExternalLink size={14} />
              View project
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CreativeGallery() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [selectedItem, setSelectedItem] = useState<(typeof creativeWork)[0] | null>(null);

  const filtered = activeFilter === "all"
    ? creativeWork
    : creativeWork.filter((item) => item.category === activeFilter);

  const handleClose = useCallback(() => setSelectedItem(null), []);

  return (
    <Section id="creative" className="bg-surface/20">
      <Reveal>
        <SectionLabel>Creative Work</SectionLabel>
        <SectionHeading>
          Design, video, <span className="gradient-text">distribution.</span>
        </SectionHeading>
        <SectionSubheading>
          Product doesn&apos;t ship in a vacuum. Here&apos;s the creative layer.
        </SectionSubheading>
      </Reveal>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mt-8">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={cn(
              "px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              activeFilter === filter.value
                ? "bg-accent text-white"
                : "bg-surface-2 text-foreground-3 hover:text-foreground border border-border hover:border-border-bright"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={i}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <GalleryModal item={selectedItem} onClose={handleClose} />
        )}
      </AnimatePresence>
    </Section>
  );
}
