"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const basePath =
  process.env.NODE_ENV === "production" ? "/Bensouda-portfolio" : "";

const resumePath =
  process.env.NODE_ENV === "production"
    ? "/Bensouda-portfolio/resume.pdf"
    : "/resume.pdf";

const links = {
  email: "mailto:bensoudae@duq.edu",
  linkedin: "https://www.linkedin.com/in/elmehdibensouda/",
  github: "https://github.com/ElMehdi02",
};

const projects = [
  {
    number: "01",
    category: "Research",
    title: "GTEx Gene Expression Research",
    description:
      "Analyzing GTEx V11 RNA-seq data with more than 74,000 genes and 170+ samples. I clean, filter, visualize, and explore gene-expression patterns using Python.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    image: `${basePath}/images/gtex-project.png`,
  },
  {
    number: "02",
    category: "Data Analytics",
    title: "Data Analytics & Dashboards",
    description:
      "Working with operational and organizational data to clean datasets, identify trends, create reports, and communicate useful insights.",
    tech: ["Python", "SQL", "Power BI", "Tableau"],
    image: `${basePath}/images/dashboard-project.png`,
  },
  {
    number: "03",
    category: "Statistics",
    title: "Statistical Analysis",
    description:
      "Applying regression, correlation, hypothesis testing, confidence intervals, and visualization to understand relationships in data.",
    tech: ["R", "Statistics", "Regression", "Visualization"],
    image: `${basePath}/images/statistics-project.png`,
  },
];

const skills = [
  {
    title: "Data & Machine Learning",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "EDA",
    ],
  },
  {
    title: "Analytics",
    items: ["R", "SQL", "Excel", "Power BI", "Tableau", "Data Wrangling"],
  },
  {
    title: "Development",
    items: ["JavaScript", "Java", "C", "Next.js", "React", "TypeScript"],
  },
  {
    title: "Languages",
    items: ["English", "French", "Arabic"],
  },
];

const experiences = [
  {
    date: "Sep 2026 — Present",
    role: "Research Experience",
    company: "GTEx Gene Expression Research • Duquesne University",
    description:
      "Analyzing large RNA-seq datasets with Python, performing quality control, exploratory analysis, filtering, and visualization of gene-expression data.",
  },
  {
    date: "May 2025 — Present",
    role: "Operations Assistant & Data Analyst",
    company: "Duquesne University • Residence Life",
    description:
      "Analyzing housing, inventory, maintenance, and occupancy data while creating Excel reports and dashboards to support operational planning.",
  },
  {
    date: "Jan 2026 — Present",
    role: "Data Science Intern",
    company: "Attawheed Islamic Center",
    description:
      "Cleaning organizational data with Python and SQL, performing exploratory analysis, creating Power BI and Tableau dashboards, and assisting with machine-learning models.",
  },
];

const animatedPhrases = [
  "working with real data.",
  "exploring machine learning.",
  "building useful solutions.",
  "learning through research.",
];

/* =========================================================
   ANIMATED DOT BACKGROUND
========================================================= */

function AnimatedDataBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const context: CanvasRenderingContext2D = ctx;

    let animationFrame = 0;
    let time = 0;

    let width = window.innerWidth;
    let height = window.innerHeight;

    type DataPoint = {
      x: number;
      baseY: number;
      radius: number;
      phase: number;
      speed: number;
    };

    type FloatingNumber = {
      x: number;
      y: number;
      value: string;
      phase: number;
      speed: number;
    };

    const points: DataPoint[] = [];
    const floatingNumbers: FloatingNumber[] = [];

    function createData() {
      points.length = 0;
      floatingNumbers.length = 0;

      const spacing = width < 768 ? 65 : 50;

      for (let x = -spacing; x < width + spacing; x += spacing) {
        for (
          let y = height * 0.35;
          y < height + spacing;
          y += spacing
        ) {
          points.push({
            x: x + Math.random() * 12,
            baseY: y,
            radius: Math.random() * 1.4 + 0.6,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.55 + 0.35,
          });
        }
      }

      const numberCount = width < 768 ? 7 : 15;

      for (let i = 0; i < numberCount; i++) {
        floatingNumbers.push({
          x: Math.random() * width,
          y: Math.random() * height,
          value: (Math.random() * 100).toFixed(2),
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.4 + 0.3,
        });
      }
    }

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      createData();
    }

    function getPointY(point: DataPoint) {
      const mainWave =
        Math.sin(point.x * 0.008 + time * point.speed) * 22;

      const secondWave =
        Math.cos(point.baseY * 0.009 + time * 0.5) * 10;

      const individualMovement =
        Math.sin(time * 1.2 + point.phase) * 7;

      return (
        point.baseY +
        mainWave +
        secondWave +
        individualMovement
      );
    }

    function drawGrid() {
      context.save();

      context.strokeStyle = "rgba(70, 170, 230, 0.025)";
      context.lineWidth = 0.5;

      const gridSize = 80;

      for (let x = 0; x <= width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      context.restore();
    }

    function drawConnections() {
      context.save();

      context.lineWidth = 0.5;

      for (let i = 0; i < points.length - 1; i += 4) {
        const current = points[i];
        const next = points[i + 1];

        if (!next) continue;

        const distanceX = Math.abs(current.x - next.x);
        const distanceY = Math.abs(current.baseY - next.baseY);

        if (distanceX > 100 || distanceY > 100) continue;

        const y1 = getPointY(current);
        const y2 = getPointY(next);

        context.beginPath();

        context.moveTo(current.x, y1);
        context.lineTo(next.x, y2);

        context.strokeStyle =
          "rgba(65, 190, 255, 0.05)";

        context.stroke();
      }

      context.restore();
    }

    function drawPoints() {
      points.forEach((point) => {
        const y = getPointY(point);

        const pulse =
          0.5 +
          Math.sin(time * 1.8 + point.phase) * 0.35;

        if (point.radius > 1.45) {
          const gradient =
            context.createRadialGradient(
              point.x,
              y,
              0,
              point.x,
              y,
              12
            );

          gradient.addColorStop(
            0,
            "rgba(80, 220, 255, 0.18)"
          );

          gradient.addColorStop(
            1,
            "rgba(80, 220, 255, 0)"
          );

          context.beginPath();

          context.arc(
            point.x,
            y,
            12,
            0,
            Math.PI * 2
          );

          context.fillStyle = gradient;

          context.fill();
        }

        context.beginPath();

        context.arc(
          point.x,
          y,
          point.radius + pulse * 0.4,
          0,
          Math.PI * 2
        );

        context.fillStyle = `rgba(100, 220, 255, ${
          0.18 + pulse * 0.18
        })`;

        context.fill();
      });
    }

    function drawNumbers() {
      floatingNumbers.forEach((item, index) => {
        const offsetY =
          Math.sin(
            time * item.speed + item.phase
          ) * 10;

        const offsetX =
          Math.cos(
            time * 0.2 + item.phase
          ) * 3;

        context.font =
          width < 768
            ? "9px monospace"
            : "11px monospace";

        context.fillStyle =
          "rgba(130, 215, 255, 0.16)";

        context.fillText(
          item.value,
          item.x + offsetX,
          item.y + offsetY
        );

        if (
          Math.floor(time * 30) % 75 ===
          index % 75
        ) {
          item.value =
            (Math.random() * 100).toFixed(2);
        }
      });
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      time += 0.012;

      drawGrid();
      drawConnections();
      drawPoints();
      drawNumbers();

      animationFrame =
        requestAnimationFrame(draw);
    }

    resizeCanvas();

    draw();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
      aria-hidden="true"
    />
  );
}

/* =========================================================
   ICONS
========================================================= */

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12ZM5.5 9.75h2.88V18H5.5V9.75Zm4.69 0h2.76v1.13h.04c.38-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.43V18h-2.88v-3.7c0-.88-.02-2.01-1.22-2.01-1.22 0-1.41.95-1.41 1.95V18h-2.88V9.75Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.027A9.564 9.564 0 0 1 12 6.84a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.923.678 1.86 0 1.343-.012 2.426-.012 2.756 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />

      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
      {children}
    </p>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const [phraseIndex, setPhraseIndex] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(
        (current) =>
          (current + 1) %
          animatedPhrases.length
      );
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] text-white">
      {/* =================================================
          DOTS BEHIND THE WEBSITE
      ================================================= */}

      <AnimatedDataBackground />

      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#07090d]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#home"
            className="text-sm font-semibold tracking-wide text-white"
          >
            EL MEHDI BENSOUDA.
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#work"
              className="transition hover:text-white"
            >
              Work
            </a>

            <a
              href="#experience"
              className="transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#skills"
              className="transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-white transition duration-300 hover:bg-white hover:text-black"
            >
              <span>LinkedIn</span>

              <LinkedInIcon />
            </a>
          </div>
        </div>
      </nav>

      {/* =================================================
          HERO
      ================================================= */}

      <section
        id="home"
        className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-8"
      >
        {/* HERO PICTURE */}

        <div
          className="absolute inset-0 z-[1] bg-cover bg-center opacity-55"
          style={{
            backgroundImage: `url(${basePath}/images/data-bg.png)`,
          }}
        />

        {/* Slight zoom animation on the hero image */}

        <motion.div
          className="absolute inset-0 z-[2]"
          animate={{
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `url(${basePath}/images/data-bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
          }}
        />

        {/* Dark left side so text stays readable */}

        <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-[#07090d]/98 via-[#07090d]/78 to-[#07090d]/15" />

        {/* Dark top and bottom */}

        <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-[#07090d]/35 via-transparent to-[#07090d]/85" />

        {/* Hero glow */}

        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -40, 35, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[5%] top-[20%] z-[4] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-5xl">
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400"
            >
              Hello, I&apos;m El Mehdi Bensouda
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="max-w-6xl overflow-visible pb-8 text-6xl font-semibold leading-[1.12] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[110px]"
            >
              Turning data into

              <span className="block overflow-visible bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text pb-6 leading-[1.18] text-transparent">
                insights.
              </span>
            </motion.h1>

            <div className="mt-1 flex min-h-[34px] flex-wrap items-center gap-2 text-lg text-zinc-300 md:text-xl">
              <span>I enjoy</span>

              <motion.span
                key={phraseIndex}
                initial={{
                  opacity: 0,
                  y: 12,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.45,
                }}
                className="font-semibold text-white"
              >
                {animatedPhrases[phraseIndex]}
              </motion.span>
            </div>

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl"
            >
              I&apos;m a Data Science student at Duquesne University
              interested in machine learning, analytics, research, and
              software development. My goal is to turn complex problems
              into useful and understandable solutions.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
              >
                Explore my work
              </a>

              <a
                href={resumePath}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-black/35 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white/10"
              >
                Take a peek at my résumé 👀
              </a>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
              }}
              className="mt-20 text-xs uppercase tracking-[0.3em] text-zinc-500"
            >
              Scroll to explore ↓
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================
          REST OF WEBSITE
          ONLY DOTS BEHIND THESE SECTIONS
      ================================================= */}

      <div className="relative z-10 bg-[#07090d]/55 backdrop-blur-[1px]">
        {/* ABOUT */}

        <section
          id="about"
          className="relative px-6 py-36 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <SectionLabel>About Me</SectionLabel>

              <h2 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                Curious about data.

                <span className="block text-zinc-600">
                  Focused on solving problems.
                </span>
              </h2>
            </motion.div>

            <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="relative min-h-[600px] overflow-hidden rounded-[32px] border border-white/10 bg-[#11151c]/85 shadow-2xl shadow-black/30 backdrop-blur-xl"
              >
                <img
                  src={`${basePath}/images/mehdi.jpg`}
                  alt="El Mehdi Bensouda"
                  className="h-full min-h-[600px] w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 pt-36">
                  <p className="text-2xl font-semibold">
                    El Mehdi Bensouda
                  </p>

                  <p className="mt-2 text-sm font-medium tracking-wide text-zinc-300">
                    Data Science Student • Researcher • Data Analyst
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="flex flex-col justify-center rounded-[32px] border border-white/[0.08] bg-[#0d1016]/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12"
              >
                <p className="text-xl leading-9 text-zinc-300 md:text-2xl">
                  I&apos;m studying Data Science at Duquesne University and I
                  enjoy working with real datasets, finding patterns,
                  building analytical solutions, and turning complex
                  information into something useful.
                </p>

                <p className="mt-7 text-lg leading-8 text-zinc-500">
                  My interests include machine learning, data analytics,
                  scientific research, visualization, and software
                  development.
                </p>

                <div className="mt-12 grid grid-cols-2 gap-4">
                  {[
                    "Data Science",
                    "Machine Learning",
                    "Research",
                    "Data Analytics",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/[0.07] bg-black/25 p-5 text-sm text-zinc-300 backdrop-blur-lg transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WORK */}

        <section
          id="work"
          className="relative px-6 py-36 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mb-24"
            >
              <SectionLabel>Selected Work</SectionLabel>

              <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                Work that shows

                <span className="block text-zinc-600">
                  what I can do.
                </span>
              </h2>
            </motion.div>

            <div className="space-y-10">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{
                    opacity: 0,
                    x:
                      index % 2 === 0
                        ? -120
                        : 120,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="group overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#0d1016]/85 shadow-2xl shadow-black/20 backdrop-blur-xl"
                >
                  <div className="grid lg:grid-cols-2">
                    <div
                      className={`flex min-h-[520px] flex-col justify-between p-9 md:p-14 ${
                        index % 2 !== 0
                          ? "lg:order-2"
                          : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-cyan-400">
                            {project.category}
                          </p>

                          <span className="text-sm text-zinc-700">
                            {project.number}
                          </span>
                        </div>

                        <h3 className="mt-8 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                          {project.title}
                        </h3>

                        <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-500">
                          {project.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/[0.08] bg-black/20 px-4 py-2 text-sm text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-12 flex flex-wrap items-center gap-6">
                        <a
                          href="#"
                          className="text-sm font-semibold text-white transition hover:text-cyan-400"
                        >
                          View project ↗
                        </a>

                        <a
                          href={links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
                        >
                          <span>GitHub</span>

                          <GitHubIcon />
                        </a>
                      </div>
                    </div>

                    <div
                      className={`relative min-h-[460px] overflow-hidden bg-[#111722]/90 ${
                        index % 2 !== 0
                          ? "lg:order-1"
                          : ""
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full min-h-[460px] w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section
          id="experience"
          className="px-6 py-36 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{
                opacity: 0,
                x: 180,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SectionLabel>Experience</SectionLabel>

              <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                Learning by

                <span className="block text-zinc-600">
                  building and doing.
                </span>
              </h2>

              <div className="mt-20 rounded-[32px] border border-white/[0.07] bg-[#0d1016]/70 px-7 backdrop-blur-xl md:px-10">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.role}
                    initial={{
                      opacity: 0,
                      x: 120,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.35,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                    }}
                    className="grid gap-6 border-t border-white/[0.08] py-10 first:border-t-0 md:grid-cols-[190px_1fr]"
                  >
                    <p className="text-sm text-zinc-600">
                      {experience.date}
                    </p>

                    <div>
                      <h3 className="text-2xl font-semibold md:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-cyan-400">
                        {experience.company}
                      </p>

                      <p className="mt-5 max-w-3xl leading-8 text-zinc-500">
                        {experience.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}

        <section
          id="skills"
          className="px-6 py-36 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <SectionLabel>Skills</SectionLabel>

              <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                Tools I use to

                <span className="block text-zinc-600">
                  solve problems.
                </span>
              </h2>
            </motion.div>

            <div className="mt-20 grid gap-5 md:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="rounded-[30px] border border-white/[0.08] bg-[#0d1016]/75 p-8 backdrop-blur-xl"
                >
                  <h3 className="text-2xl font-semibold">
                    {skill.title}
                  </h3>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.07] bg-black/20 px-4 py-2 text-sm text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}

        <section className="px-6 py-36 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[40px] border border-white/[0.09] bg-[#0d1016]/80 p-9 backdrop-blur-xl md:p-14"
            >
              <SectionLabel>Education</SectionLabel>

              <div className="grid gap-14 lg:grid-cols-2">
                <div>
                  <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                    Duquesne University
                  </h2>

                  <p className="mt-6 text-2xl text-zinc-300">
                    Bachelor of Science in Data Science
                  </p>

                  <p className="mt-3 text-zinc-500">
                    Pittsburgh, Pennsylvania
                  </p>

                  <p className="mt-2 text-zinc-500">
                    Expected December 2027
                  </p>
                </div>

                <div className="flex items-end">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
                      Areas of Study
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "Data Science",
                        "Statistics",
                        "Probability",
                        "Linear Algebra",
                        "Programming",
                        "Algorithms",
                      ].map((course) => (
                        <span
                          key={course}
                          className="rounded-full border border-white/[0.08] bg-black/20 px-4 py-2 text-sm text-zinc-400"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="relative px-6 py-44 lg:px-8"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative mx-auto max-w-5xl text-center"
          >
            <SectionLabel>
              Let&apos;s Connect
            </SectionLabel>

            <h2 className="text-6xl font-semibold tracking-[-0.06em] md:text-8xl lg:text-9xl">
              Let&apos;s build

              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                something useful.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
              I&apos;m interested in opportunities involving data science,
              analytics, machine learning, research, and software
              development.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href={links.email}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
              >
                <span>Email me</span>
                <EmailIcon />
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-8 py-4 font-semibold backdrop-blur-lg transition duration-300 hover:scale-105 hover:bg-white/10"
              >
                <span>LinkedIn</span>
                <LinkedInIcon />
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-8 py-4 font-semibold backdrop-blur-lg transition duration-300 hover:scale-105 hover:bg-white/10"
              >
                <span>GitHub</span>
                <GitHubIcon />
              </a>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}

        <footer className="border-t border-white/[0.07] bg-[#07090d]/60 px-6 py-10 backdrop-blur-xl lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-zinc-600 md:flex-row">
            <p>© 2026 El Mehdi Bensouda</p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <span>GitHub</span>
                <GitHubIcon />
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <span>LinkedIn</span>
                <LinkedInIcon />
              </a>

              <a
                href={links.email}
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <span>Email</span>
                <EmailIcon />
              </a>

              <a
                href={resumePath}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Resume
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}