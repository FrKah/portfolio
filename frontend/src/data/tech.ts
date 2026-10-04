import chiselIcon from "../assets/tech_icons/chisel.svg";
import cudaIcon from "../assets/tech_icons/cuda.svg";
import fpgaIcon from "../assets/tech_icons/fpga.svg";
import hipIcon from "../assets/tech_icons/hip.svg";
import intelIcon from "../assets/tech_icons/intel.svg";
import libaflIcon from "../assets/tech_icons/libafl.svg";
import nvidiaIcon from "../assets/tech_icons/nvidia.svg";
import openmpiIcon from "../assets/tech_icons/openmpi.png";
import perfIcon from "../assets/tech_icons/perf.svg";
import qemuIcon from "../assets/tech_icons/qemu.svg";
import riscvIcon from "../assets/tech_icons/riscv.svg";
import vhdlIcon from "../assets/tech_icons/vhdl.svg";

// map skill name (lowercased) -> { name, iconClass | iconSrc }
// iconClass is a devicon font class. iconSrc is used for what devicon lacks
// (icons in assets/tech_icons, from Simple Icons, vscode-icons, Material Icon
// Theme, Lucide and the projects' own logos); mono icons are single-colour
// and get drawn in the text colour so they show on both themes.
export type Tech = {
  name: string;
  iconClass?: string;
  iconSrc?: string;
  mono?: boolean;
};

export const TECH_MAP: Record<string, Tech> = {
  // Languages
  c: { name: "C", iconClass: "devicon-c-plain colored" },
  "c++": { name: "C++", iconClass: "devicon-cplusplus-plain colored" },
  rust: { name: "Rust", iconClass: "devicon-rust-original" },
  python: { name: "Python", iconClass: "devicon-python-plain colored" },
  scala: { name: "Scala", iconClass: "devicon-scala-plain colored" },
  "risc-v assembly": { name: "RISC-V Assembly", iconSrc: riscvIcon, mono: true },
  haskell: { name: "Haskell", iconClass: "devicon-haskell-plain colored" },
  ocaml: { name: "OCaml", iconClass: "devicon-ocaml-plain colored" },
  javascript: {
    name: "JavaScript",
    iconClass: "devicon-javascript-plain colored",
  },
  typescript: {
    name: "TypeScript",
    iconClass: "devicon-typescript-plain colored",
  },
  "c#": { name: "C#", iconClass: "devicon-csharp-plain colored" },
  gdscript: { name: "GDScript", iconClass: "devicon-godot-plain colored" },
  sql: { name: "SQL", iconClass: "devicon-mysql-plain colored" },
  bash: { name: "Bash", iconClass: "devicon-bash-plain colored" },

  // GPU & performance
  cuda: { name: "CUDA", iconSrc: cudaIcon },
  "hip/rocm": { name: "HIP/ROCm", iconSrc: hipIcon, mono: true },
  hip: { name: "HIP", iconSrc: hipIcon, mono: true },
  ptx: { name: "PTX", iconSrc: nvidiaIcon },
  mpi: { name: "MPI", iconSrc: openmpiIcon },
  tbb: { name: "TBB", iconSrc: intelIcon },
  "nsight compute": { name: "Nsight Compute", iconSrc: nvidiaIcon },
  perf: { name: "perf", iconSrc: perfIcon, mono: true }, // flame graph

  // Hardware
  chisel: { name: "Chisel", iconSrc: chiselIcon, mono: true },
  vhdl: { name: "VHDL", iconSrc: vhdlIcon },
  fpga: { name: "FPGA", iconSrc: fpgaIcon },

  // Systems
  linux: { name: "Linux", iconClass: "devicon-linux-plain" },
  windows: { name: "Windows", iconClass: "devicon-windows11-original colored" },
  qemu: { name: "QEMU", iconSrc: qemuIcon },
  "intel pt": { name: "Intel PT", iconSrc: intelIcon },
  libafl: { name: "LibAFL", iconSrc: libaflIcon },

  // Tools
  git: { name: "Git", iconClass: "devicon-git-plain colored" },
  cmake: { name: "CMake", iconClass: "devicon-cmake-plain colored" },
  docker: { name: "Docker", iconClass: "devicon-docker-plain colored" },
  latex: { name: "LaTeX", iconClass: "devicon-latex-original" },

  // Web
  react: { name: "React", iconClass: "devicon-react-original colored" },
  "react native": {
    name: "React Native",
    iconClass: "devicon-react-original colored",
  },
  tailwind: {
    name: "TailwindCSS",
    iconClass: "devicon-tailwindcss-plain colored",
  },
  tailwindcss: {
    name: "TailwindCSS",
    iconClass: "devicon-tailwindcss-plain colored",
  },
  daisyui: { name: "DaisyUI", iconClass: "devicon-tailwindcss-plain colored" }, // reuse Tailwind icon
  express: { name: "Express", iconClass: "devicon-express-original" },
  "node.js": { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  node: { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  html: { name: "HTML", iconClass: "devicon-html5-plain colored" },
  css: { name: "CSS", iconClass: "devicon-css3-plain colored" },

  // Misc
  "sql oracle": {
    name: "SQL Oracle",
    iconClass: "devicon-oracle-original colored",
  },
  postgresql: {
    name: "PostgreSQL",
    iconClass: "devicon-postgresql-plain colored",
  },
  yolov5: { name: "YOLOv5", iconClass: "devicon-pytorch-original colored" },
  blender: { name: "Blender", iconClass: "devicon-blender-original colored" },
};

export const getTech = (raw: string): Tech =>
  TECH_MAP[raw.trim().toLowerCase()] ?? { name: raw };
