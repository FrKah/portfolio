import TechnologyCard from "./TechnologyCard";
import { getTech } from "../data/tech";

const languages = [
  "C",
  "C++",
  "Rust",
  "Python",
  "Scala",
  "RISC-V Assembly",
  "Haskell",
  "OCaml",
].map(getTech);

const technologies = [
  // GPU & performance
  "CUDA",
  "HIP/ROCm",
  "PTX",
  "MPI",
  "Nsight Compute",
  "perf",
  // Hardware
  "Chisel",
  "VHDL",
  "FPGA",
  // Systems
  "Linux",
  "Windows",
  "QEMU",
  "Intel PT",
  "LibAFL",
  // Tools
  "Git",
  "CMake",
  "Docker",
  "LaTeX",
].map(getTech);

import { useTranslation } from "react-i18next";

const TechStack = () => {
  const { t } = useTranslation();
  return (
    <section className="space-y-10">
      {/* Languages */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">{t('techstack.languagesTitle')}</h2>
        <div className="grid w-fit mx-auto grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
          {languages.map((t) => (
            <TechnologyCard key={t.name} {...t} />
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">{t('techstack.technologiesTitle')}</h2>
        <div className="grid w-fit mx-auto grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {technologies.map((t) => (
            <TechnologyCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechStack;
