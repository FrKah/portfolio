// src/components/ProjectCard.tsx
import React from "react";
import TechnologyCard from "./TechnologyCard";
import { getTech } from "../data/tech";
import { useTranslation } from "react-i18next";

type ProjectCardProps = {
  title: string;
  description: React.ReactNode;
  githubUrl?: string;
  downloadUrl?: string;
  websiteLink?: string;
  images?: string[];
  skills?: string[];
  className?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubUrl,
  downloadUrl,
  websiteLink,
  images = [],
  skills = [],
  className = "",
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`rounded-2xl border border-base-300 bg-base-200 shadow-lg p-6 flex flex-col gap-6 ${className}`}
    >
      {/* Header / description */}
      <div>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <div className="text-base mt-3 prose prose-neutral max-w-none">
          {description}
        </div>

        {/* Buttons pinned below title+desc on wide cards: keep here, layout above centers the card */}
        <div className="mt-6 flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              {t("projects.githubBtn")}
            </a>
          )}
          {downloadUrl && (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              {t("projects.downloadBtn")}
            </a>
          )}
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              {t("projects.websiteBtn")}
            </a>
          )}
        </div>
      </div>

      {/* Images */}
      {images.length > 0 && (
        <div className="flex overflow-x-auto gap-3">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1} for ${title}`}
              className="h-32 rounded-lg border"
            />
          ))}
        </div>
      )}

      {/* Technologies (TechnologyCard grid) */}
      {skills.length > 0 && (
        <div>
          <div className="flex flex-wrap gap-4">
            {skills.map((raw, i) => {
              const tech = getTech(raw);
              return (
                <TechnologyCard key={`${tech.name}-${i}`} {...tech} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default ProjectCard;
