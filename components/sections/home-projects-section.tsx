// components/sections/home-projects-section.tsx

"use client";

/**
 * Homepage projects section.
 */

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock3,
  Factory,
  Globe2,
  MapPin,
} from "lucide-react";

import { faHomeProjectsContent } from "@/content/fa/home/projects";
import { AppSection } from "../shared/app-section";

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      delay: index * 0.05,
    },
  }),
};

export function HomeProjectsSection() {
  const {
    eyebrow,
    title,
    description,
    sideDescription,
    detailsLabel,
    allProjectsLabel,
    allProjectsHref,
    items,
  } = faHomeProjectsContent;

  return (
    <AppSection tone="navy">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full text-right"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-industrial-orange">
          {eyebrow}
        </p>

        <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
          {title}
        </h2>

        <p className="mt-3 max-w-none text-sm leading-8 text-white/78 md:text-[15px]">
          {description} {sideDescription}{" "}
          <Link
            href={allProjectsHref}
            className="inline-flex items-center gap-1 font-bold text-industrial-orange transition-colors duration-300 hover:text-white"
          >
            {allProjectsLabel}
            <ArrowLeft className="size-4" />
          </Link>
        </p>
      </motion.div>

      <div className="mt-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project, index) => (
            <motion.article
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-primary/45 shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-[box-shadow,border-color] duration-300 ease-out hover:border-white/20 hover:shadow-[0_18px_42px_rgba(0,0,0,0.45)]"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="flex h-full flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.name}
                    fill
                    sizes="(min-width:1024px) 350px, (min-width:768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy/95 via-industrial-navy/20 to-transparent" />

                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-industrial-navy">
                    <span className="inline-flex items-center gap-1">
                      <Factory className="size-3" />
                      {project.tag}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 py-4">
                  <h3 className="text-lg font-bold">{project.name}</h3>

                  <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/85">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-industrial-orange" />
                      <span>{project.location}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Globe2 className="size-3.5 text-industrial-orange" />
                      <span>{project.country}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-3.5 text-industrial-orange" />
                      <span>{project.year}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Clock3 className="size-3.5 text-industrial-orange" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/75">
                    {project.lineType}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-5 text-xs">
                    <span className="font-medium text-white/90">
                      {project.capacity}
                    </span>

                    <span className="inline-flex items-center gap-1 font-semibold text-industrial-orange">
                      {detailsLabel}
                      <ArrowLeft className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </AppSection>
  );
}
