import { useTranslation } from "react-i18next";

// keys of the "education" entries in the i18n files, oldest first
const ENTRIES = ["0", "1", "2"];

const EducationTimeline = () => {
  const { t } = useTranslation();
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {ENTRIES.map((key, i) => (
        <li key={key}>
          {i > 0 && <hr />}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={
              i % 2 === 0
                ? "timeline-start mb-10 md:text-end"
                : "timeline-end md:mb-10"
            }
          >
            <time className="font-mono italic">{t(`education.${key}.period`)}</time>
            <div className="text-lg font-black">{t(`education.${key}.title`)}</div>
            {t(`education.${key}.description`)}
          </div>
          {i < ENTRIES.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );
};
export default EducationTimeline;
