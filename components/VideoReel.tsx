"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Youtube, TrendingUp, Users, Eye } from "lucide-react";
import { Section, SectionLabel, SectionHeading, SectionSubheading } from "./Section";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/data/content";

const videoData = [
  {
    id: "1",
    title: "Student Government Campaign Video",
    views: "45K+ views",
    category: "Campaign",
    placeholder: "SG Campaign",
  },
  {
    id: "2",
    title: "UF Event Coverage",
    views: "32K+ views",
    category: "Events",
    placeholder: "Event Coverage",
  },
  {
    id: "3",
    title: "Leadership Conference Recap",
    views: "28K+ views",
    category: "Leadership",
    placeholder: "Conference",
  },
  {
    id: "4",
    title: "Voter Turnout Initiative",
    views: "51K+ views",
    category: "Initiative",
    placeholder: "Voter Drive",
  },
  {
    id: "5",
    title: "AI Tools Presentation",
    views: "18K+ views",
    category: "Education",
    placeholder: "AI Presentation",
  },
  {
    id: "6",
    title: "Campus Organization Highlights",
    views: "26K+ views",
    category: "Campus Life",
    placeholder: "Campus Life",
  },
];

const contentStats = [
  { label: "Videos produced", value: "250+", icon: Play },
  { label: "Total views", value: "200K+", icon: Eye },
  { label: "Followers grown", value: "5K", icon: Users },
  { label: "Voter turnout increase", value: "↑40%", icon: TrendingUp },
];

export function VideoReel() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Section id="video" className="relative">
      <Reveal>
        <SectionLabel>Content & Video</SectionLabel>
        <SectionHeading>
          Video as a <span className="gradient-text">distribution channel.</span>
        </SectionHeading>
        <SectionSubheading>
          I use video to ship distribution. 250+ videos produced, 200K+ views, and a measurable
          impact on voter turnout. Content is a product lever.
        </SectionSubheading>
      </Reveal>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        {contentStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-xl p-4 border border-border text-center"
            >
              <Icon size={16} className="text-accent mx-auto mb-2" />
              <div className="text-xl font-bold font-mono text-foreground">{stat.value}</div>
              <div className="text-[11px] text-foreground-3 mt-0.5">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Featured Channel CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10 glass rounded-2xl border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <div className="w-12 h-12 rounded-xl bg-red-500/15 border border-red-500/20 flex items-center justify-center flex-shrink-0">
          <Youtube size={22} className="text-red-400" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-foreground">StarLight Digital Productions</h3>
          <p className="text-sm text-foreground-3 mt-0.5">
            UF Student Government content channel · 250+ videos · 200K+ views
          </p>
        </div>
        <a
          href={siteConfig.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-500/90 transition-colors btn-sheen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 flex-shrink-0"
        >
          <Youtube size={15} />
          View Channel
        </a>
      </motion.div>

      {/* Video grid */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videoData.map((video, i) => (
          <motion.button
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            onClick={() => setModalOpen(true)}
            className="group relative glass rounded-xl border border-border hover:border-border-bright overflow-hidden text-left card-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Play ${video.title}`}
          >
            {/* Thumbnail placeholder */}
            <div className="relative h-36 bg-surface-3 flex items-center justify-center overflow-hidden">
              <div className="text-foreground-3/20 text-3xl font-bold select-none">
                {video.placeholder.charAt(0)}
              </div>
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <Play size={18} className="text-white ml-0.5" fill="white" />
                </div>
              </div>
              {/* Category badge */}
              <div className="absolute top-2 left-2">
                <span className="text-[10px] font-semibold text-foreground-3 bg-surface-3/80 backdrop-blur-sm px-2 py-0.5 rounded border border-border">
                  {video.category}
                </span>
              </div>
            </div>

            <div className="p-3">
              <p className="text-sm font-medium text-foreground-2 line-clamp-1">{video.title}</p>
              <div className="flex items-center gap-1 mt-1">
                <Eye size={11} className="text-foreground-3" />
                <span className="text-xs text-foreground-3">{video.views}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <p className="text-center text-xs text-foreground-3 mt-6">
        &quot;I use video to ship distribution.&quot; — Full channel on{" "}
        <a
          href={siteConfig.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          YouTube →
        </a>
      </p>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative glass-bright rounded-2xl border border-border-bright p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg glass flex items-center justify-center text-foreground-3 hover:text-foreground"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <div className="text-center py-4">
                <Youtube size={32} className="text-red-400 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">View on YouTube</h3>
                <p className="text-sm text-foreground-3 mb-5">
                  Videos are hosted on the StarLight Digital Productions YouTube channel.
                </p>
                <a
                  href={siteConfig.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500 text-white font-semibold text-sm hover:bg-red-500/90 transition-colors"
                >
                  <Youtube size={16} />
                  Open Channel
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
