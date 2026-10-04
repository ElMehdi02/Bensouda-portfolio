"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const basePath =
  process.env.NODE_ENV === "production" ? "/Bensouda-portfolio" : "";

const resumePath =
  process.env.NODE_ENV === "production"
    ? "/Bensouda-portfolio/resume.pdf"
    : "/resume.pdf";

const socialMediaPresentation =
  process.env.NODE_ENV === "production"
    ? "/Bensouda-portfolio/projects/social-media-impact-study.pdf"
    : "/projects/social-media-impact-study.pdf";

const links = {
  email: "mailto:bensoudae@duq.edu",
  linkedin: "https://www.linkedin.com/in/elmehdibensouda/",
  github: "https://github.com/ElMehdi02",
  gtexResearch:
    "https://github.com/ElMehdi02/GTEx-gene-expression-research/blob/main/notebook/data_exploration1.ipynb",
};

const animatedPhrases = [
  "working with real data.",
  "exploring machine learning.",
  "building useful solutions.",
  "learning through research.",
];

const experiences = [
  {
    date: "Sep 2026 — Present",
    type: "Research",
    role: "GTEx Gene Expression Research",
    company: "Duquesne University",
    location: "Pittsburgh, PA",
    description:
      "Ongoing research analyzing large-scale GTEx V11 RNA-seq data to explore gene-expression patterns across human tissues.",
    bullets: [
      "Analyze GTEx V11 RNA-seq data containing 74,000+ genes and 170+ samples using Python.",
      "Use Pandas, NumPy, and Matplotlib to clean, organize, and visualize gene-expression data.",
      "Perform quality control and exploratory analysis to examine sequencing depth, gene expression, and sample variation.",
      "Build gene-by-tissue datasets for tissue-specific expression analysis.",
      "Current work includes normalizing expression values and exploring tissue-specific patterns.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "RNA-seq"],
    featured: true,
  },
  {
    date: "May 2025 — Present",
    type: "Employment",
    role: "Operations Assistant & Data Analyst",
    company: "Duquesne University • Residence Life",
    location: "Pittsburgh, PA",
    description:
      "Support Residence Life operations through data analysis, reporting, inventory tracking, and workflow organization.",
    bullets: [
      "Analyze housing, inventory, maintenance, and occupancy data to support Residence Life operations.",
      "Create Excel reports and dashboards for inventory tracking and operational planning.",
      "Maintain and clean records to improve data accuracy and organization.",
      "Support workflow improvements and student-service operations.",
    ],
    tech: ["Excel", "Data Cleaning", "Reporting", "Dashboards"],
    featured: false,
  },
  {
    date: "Jan 2026 — Present",
    type: "Internship",
    role: "Data Science Intern",
    company: "Attawheed Islamic Center",
    location: "Pittsburgh, PA",
    description:
      "Work with organizational data to support reporting, analytics, visualization, and introductory machine-learning workflows.",
    bullets: [
      "Clean and preprocess membership, attendance, event, and program data using Python, Pandas, and SQL.",
      "Perform exploratory data analysis to identify patterns and trends.",
      "Create dashboards and visual reports using Power BI and Tableau.",
      "Assist with machine-learning models using scikit-learn.",
      "Validate data quality and document analytical methods.",
    ],
    tech: ["Python", "SQL", "Power BI", "Tableau", "Scikit-learn"],
    featured: false,
  },
];

const skills = [
  {
    number: "01",
    type: "data",
    title: "Data & Machine Learning",
    description:
      "Working with data from exploration and preprocessing through modeling and evaluation.",
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
    number: "02",
    type: "analytics",
    title: "Analytics",
    description:
      "Turning datasets into useful insights through analysis, reporting, and visualization.",
    items: [
      "R",
      "SQL",
      "Excel",
      "Power BI",
      "Tableau",
      "Data Wrangling",
    ],
  },
  {
    number: "03",
    type: "development",
    title: "Development",
    description:
      "Building software and web projects while strengthening programming fundamentals.",
    items: ["JavaScript", "Java", "C", "Next.js", "React", "TypeScript"],
  },
  {
    number: "04",
    type: "languages",
    title: "Languages",
    description:
      "Communicating across different environments, teams, and communities.",
    items: ["English", "French", "Arabic"],
  },
];

const marqueeSkills = [
  "Python",
  "Machine Learning",
  "SQL",
  "Pandas",
  "Power BI",
  "React",
  "Statistics",
  "Data Visualization",
  "NumPy",
  "Tableau",
];

/* =========================================================
   ANIMATED BACKGROUND FOR THE REST OF THE SITE
========================================================= */

function AnimatedDataBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    /*
      Important:
      TypeScript now knows safeCanvas can never be null.
    */
    const safeCanvas = canvas;
    const context: CanvasRenderingContext2D = ctx;

    let animationFrame = 0;
    let time = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;

    type Point = {
      x: number;
      baseY: number;
      radius: number;
      phase: number;
      speed: number;
    };

    type NumberItem = {
      x: number;
      y: number;
      value: string;
      phase: number;
      speed: number;
    };

    const points: Point[] = [];
    const numbers: NumberItem[] = [];

    function createData() {
      points.length = 0;
      numbers.length = 0;

      const spacing = width < 768 ? 65 : 50;

      for (let x = -spacing; x < width + spacing; x += spacing) {
        for (let y = height * 0.35; y < height + spacing; y += spacing) {
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
        numbers.push({
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

      safeCanvas.width = width * dpr;
      safeCanvas.height = height * dpr;

      safeCanvas.style.width = `${width}px`;
      safeCanvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      createData();
    }

    function getPointY(point: Point) {
      const wave1 =
        Math.sin(point.x * 0.008 + time * point.speed) * 22;

      const wave2 =
        Math.cos(point.baseY * 0.009 + time * 0.5) * 10;

      const movement =
        Math.sin(time * 1.2 + point.phase) * 7;

      return point.baseY + wave1 + wave2 + movement;
    }

    function drawGrid() {
      context.save();

      context.strokeStyle = "rgba(70,170,230,0.025)";
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

        context.beginPath();

        context.moveTo(
          current.x,
          getPointY(current)
        );

        context.lineTo(
          next.x,
          getPointY(next)
        );

        context.strokeStyle =
          "rgba(65,190,255,0.05)";

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

        context.beginPath();

        context.arc(
          point.x,
          y,
          point.radius + pulse * 0.4,
          0,
          Math.PI * 2
        );

        context.fillStyle = `rgba(100,220,255,${
          0.18 + pulse * 0.18
        })`;

        context.fill();
      });
    }

    function drawNumbers() {
      numbers.forEach((item, index) => {
        const offsetY =
          Math.sin(time * item.speed + item.phase) * 10;

        context.font =
          width < 768
            ? "9px monospace"
            : "11px monospace";

        context.fillStyle =
          "rgba(130,215,255,0.15)";

        context.fillText(
          item.value,
          item.x,
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
      context.clearRect(
        0,
        0,
        width,
        height
      );

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
   HERO DATA ANIMATION

   This is layered over your existing data-bg.png.

   It adds:
   - moving numbers
   - changing values
   - moving plots
   - animated bar charts
   - moving particles
   - animated data wave
========================================================= */

function HeroDataAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    /*
      This fixes the GitHub TypeScript build error:

      'canvas' is possibly 'null'

      Everything below uses safeCanvas.
    */
    const safeCanvas = canvas;
    const context: CanvasRenderingContext2D = ctx;

    let frame = 0;
    let time = 0;
    let width = 0;
    let height = 0;

    type FloatingNumber = {
      x: number;
      y: number;
      value: number;
      phase: number;
      speed: number;
      decimal: boolean;
    };

    type Particle = {
      x: number;
      y: number;
      baseY: number;
      radius: number;
      phase: number;
    };

    const floatingNumbers: FloatingNumber[] = [];
    const particles: Particle[] = [];

    function createScene() {
      floatingNumbers.length = 0;
      particles.length = 0;

      const positions = [
        [0.15, 0.28],
        [0.28, 0.21],
        [0.36, 0.37],
        [0.52, 0.20],
        [0.66, 0.29],
        [0.83, 0.32],
        [0.91, 0.48],
        [0.74, 0.69],
        [0.58, 0.80],
        [0.25, 0.75],
      ];

      positions.forEach(([x, y], index) => {
        floatingNumbers.push({
          x: width * x,
          y: height * y,
          value:
            index % 3 === 0
              ? Math.random()
              : Math.random() * 100,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.35 + 0.2,
          decimal: index % 3 === 0,
        });
      });

      for (let i = 0; i < 85; i++) {
        const x =
          width * 0.36 +
          Math.random() * width * 0.62;

        const baseY =
          height * 0.45 +
          Math.sin(x * 0.012) * 80 +
          Math.random() * 120;

        particles.push({
          x,
          y: baseY,
          baseY,
          radius: Math.random() * 1.3 + 0.4,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function resize() {
      const parent =
        safeCanvas.parentElement;

      if (!parent) return;

      const rect =
        parent.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr =
        Math.min(
          window.devicePixelRatio || 1,
          2
        );

      safeCanvas.width =
        width * dpr;

      safeCanvas.height =
        height * dpr;

      safeCanvas.style.width =
        `${width}px`;

      safeCanvas.style.height =
        `${height}px`;

      context.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      createScene();
    }

    function drawFloatingNumbers() {
      floatingNumbers.forEach(
        (item, index) => {
          const floatY =
            Math.sin(
              time * item.speed +
                item.phase
            ) * 7;

          const floatX =
            Math.cos(
              time * 0.25 +
                item.phase
            ) * 3;

          /*
            Change some numbers periodically.
          */
          if (
            Math.floor(time * 18) %
              (70 + index * 3) ===
            0
          ) {
            item.value =
              item.decimal
                ? Math.random()
                : Math.random() * 100;
          }

          const formatted =
            item.decimal
              ? item.value.toFixed(3)
              : item.value.toFixed(2);

          context.save();

          context.font =
            width < 700
              ? "10px monospace"
              : "13px monospace";

          context.fillStyle =
            "rgba(107,210,255,0.19)";

          context.fillText(
            formatted,
            item.x + floatX,
            item.y + floatY
          );

          context.restore();
        }
      );
    }

    function drawParticles() {
      particles.forEach((particle) => {
        particle.y =
          particle.baseY +
          Math.sin(
            time * 0.7 +
              particle.phase
          ) *
            8;

        const pulse =
          0.5 +
          Math.sin(
            time * 1.1 +
              particle.phase
          ) *
            0.35;

        context.beginPath();

        context.arc(
          particle.x,
          particle.y,
          particle.radius +
            pulse * 0.25,
          0,
          Math.PI * 2
        );

        context.fillStyle =
          `rgba(90,210,255,${
            0.08 +
            pulse * 0.12
          })`;

        context.fill();
      });
    }

    function drawLineChart(
      x: number,
      y: number,
      w: number,
      h: number,
      seed: number
    ) {
      context.save();

      context.strokeStyle =
        "rgba(90,180,255,0.08)";

      context.lineWidth = 0.8;

      context.strokeRect(
        x,
        y,
        w,
        h
      );

      /*
        Horizontal grid lines.
      */
      for (let i = 1; i <= 3; i++) {
        context.beginPath();

        context.moveTo(
          x,
          y + (h / 4) * i
        );

        context.lineTo(
          x + w,
          y + (h / 4) * i
        );

        context.strokeStyle =
          "rgba(90,180,255,0.04)";

        context.stroke();
      }

      /*
        Animated line.
      */
      context.beginPath();

      for (
        let px = 0;
        px <= w;
        px += 3
      ) {
        const py =
          h * 0.56 -
          Math.sin(
            px * 0.055 +
              time * 0.7 +
              seed
          ) *
            h *
            0.16 -
          Math.cos(
            px * 0.025 +
              time * 0.37
          ) *
            h *
            0.11;

        if (px === 0) {
          context.moveTo(
            x + px,
            y + py
          );
        } else {
          context.lineTo(
            x + px,
            y + py
          );
        }
      }

      context.strokeStyle =
        "rgba(83,210,255,0.32)";

      context.lineWidth = 1.2;

      context.stroke();

      context.restore();
    }

    function drawBarChart(
      x: number,
      y: number,
      w: number,
      h: number
    ) {
      context.save();

      context.strokeStyle =
        "rgba(90,180,255,0.08)";

      context.strokeRect(
        x,
        y,
        w,
        h
      );

      const count = 6;
      const gap = 7;

      const barWidth =
        (w -
          gap * (count + 1)) /
        count;

      for (
        let i = 0;
        i < count;
        i++
      ) {
        const dynamicHeight =
          h * 0.18 +
          (Math.sin(
            time * 0.65 +
              i * 0.7
          ) *
            0.5 +
            0.5) *
            h *
            0.55;

        const barX =
          x +
          gap +
          i * (barWidth + gap);

        const gradient =
          context.createLinearGradient(
            0,
            y + h,
            0,
            y +
              h -
              dynamicHeight
          );

        gradient.addColorStop(
          0,
          "rgba(65,120,255,0.08)"
        );

        gradient.addColorStop(
          1,
          "rgba(85,215,255,0.30)"
        );

        context.fillStyle =
          gradient;

        context.fillRect(
          barX,
          y +
            h -
            dynamicHeight,
          barWidth,
          dynamicHeight
        );
      }

      context.restore();
    }

    function drawMainWave() {
      const startX =
        width * 0.34;

      const endX =
        width * 1.02;

      const baseY =
        height * 0.59;

      context.save();

      for (
        let layer = 0;
        layer < 3;
        layer++
      ) {
        context.beginPath();

        for (
          let x = startX;
          x <= endX;
          x += 4
        ) {
          const relativeX =
            x - startX;

          const y =
            baseY +
            layer * 15 +
            Math.sin(
              relativeX * 0.014 +
                time *
                  (0.55 +
                    layer * 0.12)
            ) *
              38 +
            Math.sin(
              relativeX * 0.006 +
                time * 0.32
            ) *
              52;

          if (x === startX) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }

        context.strokeStyle =
          layer === 0
            ? "rgba(64,210,255,0.23)"
            : layer === 1
              ? "rgba(65,145,255,0.14)"
              : "rgba(120,95,255,0.10)";

        context.lineWidth =
          layer === 0
            ? 1.4
            : 1;

        context.stroke();
      }

      context.restore();
    }

    function drawLabels() {
      const labels = [
        {
          text: "MACHINE LEARNING",
          x: width * 0.19,
          y: height * 0.17,
        },
        {
          text: "RESEARCH",
          x: width * 0.86,
          y: height * 0.17,
        },
        {
          text: "PREDICTION",
          x: width * 0.56,
          y: height * 0.82,
        },
        {
          text: "ANALYZE",
          x: width * 0.87,
          y: height * 0.30,
        },
      ];

      context.save();

      context.font =
        width < 700
          ? "8px monospace"
          : "10px monospace";

      context.fillStyle =
        "rgba(110,190,255,0.10)";

      labels.forEach((label) => {
        context.fillText(
          label.text,
          label.x,
          label.y
        );
      });

      context.restore();
    }

    function draw() {
      context.clearRect(
        0,
        0,
        width,
        height
      );

      time += 0.016;

      drawParticles();
      drawMainWave();
      drawFloatingNumbers();
      drawLabels();

      /*
        Hide larger chart panels on small screens.
      */
      if (width > 700) {
        drawBarChart(
          width * 0.86,
          height * 0.12,
          110,
          72
        );

        drawLineChart(
          width * 0.87,
          height * 0.45,
          120,
          65,
          1
        );

        drawLineChart(
          width * 0.55,
          height * 0.79,
          160,
          70,
          2
        );

        drawBarChart(
          width * 0.15,
          height * 0.68,
          90,
          60
        );
      }

      frame =
        requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener(
      "resize",
      resize
    );

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[3] h-full w-full"
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

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function SkillIcon({
  type,
}: {
  type: string;
}) {
  if (type === "data") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <ellipse
          cx="12"
          cy="5"
          rx="7"
          ry="3"
        />

        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />

        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  if (type === "analytics") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M22 19V3" />
      </svg>
    );
  }

  if (type === "development") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 5h16" />
      <path d="M9 3v2" />
      <path d="M15 3v2" />
      <path d="M6 9c2 4 5 7 9 9" />
      <path d="M17 8c-2 5-5 8-10 11" />
    </svg>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
      {children}
    </p>
  );
}

/* =========================================================
   RESEARCH WORKFLOW
========================================================= */

function ResearchWorkflow() {
  const steps = [
    {
      number: "01",
      title: "Prepare",
      description:
        "Load and organize GTEx V11 gene-expression data.",
      status: "Completed",
    },
    {
      number: "02",
      title: "Clean",
      description:
        "Check missing values and remove genes with zero expression across tissues.",
      status: "Completed",
    },
    {
      number: "03",
      title: "Structure",
      description:
        "Create a gene-by-tissue expression table for analysis.",
      status: "Completed",
    },
    {
      number: "04",
      title: "Normalize",
      description:
        "Convert tissue-expression values into relative values for each gene.",
      status: "Next Step",
    },
    {
      number: "05",
      title: "Explore",
      description:
        "Study tissue-specific expression patterns and compare genes across tissues.",
      status: "Upcoming",
    },
  ];

  return (
    <div className="relative min-h-[650px] overflow-hidden bg-[#0a0f17] p-8 md:p-10">
      <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.08] blur-[120px]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Research workflow
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              Current GTEx analysis progress
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-4 py-2 text-xs text-amber-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-300" />

            Ongoing
          </div>
        </div>

        <div className="relative mt-10 h-[150px] overflow-hidden rounded-[24px] border border-white/[0.07] bg-black/30">
          <svg
            viewBox="0 0 600 150"
            className="absolute inset-0 h-full w-full"
          >
            <motion.path
              d="M0 110 C70 110, 80 65, 145 70 C210 75, 210 35, 275 45 C340 55, 360 105, 420 88 C480 70, 505 28, 600 40"
              fill="none"
              stroke="rgba(34,211,238,0.8)"
              strokeWidth="2"
              initial={{
                pathLength: 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 2,
              }}
            />
          </svg>

          <p className="absolute bottom-4 left-5 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            Gene expression signal
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {steps.map(
            (step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay:
                    index *
                    0.07,
                }}
                className="grid grid-cols-[40px_1fr_auto] items-center gap-4 rounded-[20px] border border-white/[0.06] bg-white/[0.025] p-4"
              >
                <span className="font-mono text-xs text-cyan-400">
                  {
                    step.number
                  }
                </span>

                <div>
                  <p className="font-semibold text-white">
                    {
                      step.title
                    }
                  </p>

                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    {
                      step.description
                    }
                  </p>
                </div>

                <span
                  className={`rounded-full border px-3 py-1 text-[10px] ${
                    step.status ===
                    "Completed"
                      ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300"
                      : step.status ===
                          "Next Step"
                        ? "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300"
                        : "border-white/[0.07] text-zinc-600"
                  }`}
                >
                  {
                    step.status
                  }
                </span>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 55,
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
        duration: 0.7,
        delay:
          index *
          0.08,
      }}
      className={`relative overflow-hidden rounded-[32px] border p-8 backdrop-blur-xl md:p-10 ${
        experience.featured
          ? "border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.05] via-[#0d1016]/90 to-[#0d1016]/90"
          : "border-white/[0.07] bg-[#0d1016]/80"
      }`}
    >
      <div className="relative grid gap-8 lg:grid-cols-[180px_1fr]">
        <div>
          <p className="text-sm text-zinc-500">
            {
              experience.date
            }
          </p>

          <span className="mt-4 inline-flex rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-1 text-xs font-medium text-cyan-300">
            {
              experience.type
            }
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
            {
              experience.role
            }
          </h3>

          <p className="mt-2 font-medium text-cyan-400">
            {
              experience.company
            }
          </p>

          <p className="mt-1 text-sm text-zinc-600">
            {
              experience.location
            }
          </p>

          <p className="mt-6 max-w-3xl leading-7 text-zinc-500">
            {
              experience.description
            }
          </p>

          <div className="mt-7 space-y-3">
            {experience.bullets.map(
              (bullet) => (
                <div
                  key={
                    bullet
                  }
                  className="flex gap-3"
                >
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                  <p className="leading-7 text-zinc-300">
                    {
                      bullet
                    }
                  </p>
                </div>
              )
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {experience.tech.map(
              (tech) => (
                <span
                  key={
                    tech
                  }
                  className="rounded-full border border-white/[0.08] bg-black/20 px-4 py-2 text-xs text-zinc-400"
                >
                  {
                    tech
                  }
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 65,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      whileHover={{
        y: -8,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.6,
        delay:
          index *
          0.08,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0d1016]/80 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-9"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.00] blur-[90px] transition duration-700 group-hover:bg-cyan-400/[0.08]" />

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay:
            index *
            0.1,
        }}
        className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-cyan-400/60 via-blue-400/20 to-transparent"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300"
          >
            <SkillIcon
              type={
                skill.type
              }
            />
          </motion.div>

          <span className="font-mono text-xs text-zinc-700">
            {
              skill.number
            }
          </span>
        </div>

        <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
          {
            skill.title
          }
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-500">
          {
            skill.description
          }
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {skill.items.map(
            (
              item,
              itemIndex
            ) => (
              <motion.span
                key={
                  item
                }
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay:
                    index *
                      0.06 +
                    itemIndex *
                      0.04,
                }}
                className="cursor-default rounded-full border border-white/[0.08] bg-black/25 px-4 py-2 text-sm text-zinc-400 transition-colors duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-200"
              >
                {
                  item
                }
              </motion.span>
            )
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [
    phraseIndex,
    setPhraseIndex,
  ] = useState(0);

  useEffect(() => {
    const interval =
      setInterval(() => {
        setPhraseIndex(
          (current) =>
            (current +
              1) %
            animatedPhrases.length
        );
      }, 2600);

    return () =>
      clearInterval(
        interval
      );
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] text-white">
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
            EL MEHDI
            BENSOUDA.
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
              href={
                links.linkedin
              }
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-white transition hover:bg-white hover:text-black"
            >
              <span>
                LinkedIn
              </span>

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
        {/* Existing hero image */}

        <div
          className="absolute inset-0 z-[1] bg-cover bg-center"
          style={{
            backgroundImage: `url(${basePath}/images/data-bg.png)`,
          }}
        />

        {/* Very subtle background breathing */}

        <motion.div
          className="absolute inset-0 z-[2]"
          animate={{
            scale: [
              1,
              1.015,
              1,
            ],
          }}
          transition={{
            duration: 20,
            repeat:
              Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `url(${basePath}/images/data-bg.png)`,
            backgroundSize:
              "cover",
            backgroundPosition:
              "center",
            opacity: 0.12,
          }}
        />

        {/* Animated plots and numbers */}

        <HeroDataAnimation />

        {/* Hero overlays */}

        <div className="absolute inset-0 z-[4] bg-gradient-to-r from-[#07090d]/97 via-[#07090d]/65 to-[#07090d]/15" />

        <div className="absolute inset-0 z-[4] bg-gradient-to-t from-[#07090d]/55 via-transparent to-[#07090d]/15" />

        {/* Hero content */}

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
              Hello, I&apos;m
              El Mehdi
              Bensouda
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
              }}
              className="pb-8 text-6xl font-semibold leading-[1.12] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[110px]"
            >
              Turning data
              into

              <span className="block overflow-visible bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text pb-5 leading-[1.16] text-transparent">
                insights.
              </span>
            </motion.h1>

            <div className="flex min-h-[34px] flex-wrap gap-2 text-lg text-zinc-300 md:text-xl">
              <span>
                I enjoy
              </span>

              <motion.span
                key={
                  phraseIndex
                }
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="font-semibold text-white"
              >
                {
                  animatedPhrases[
                    phraseIndex
                  ]
                }
              </motion.span>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              I&apos;m a Data
              Science student
              at Duquesne
              University
              interested in
              machine
              learning,
              analytics,
              research, and
              software
              development.
              My goal is to
              turn complex
              problems into
              useful and
              understandable
              solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Explore my
                work
              </a>

              <a
                href={
                  resumePath
                }
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-black/30 px-7 py-3.5 text-sm text-white backdrop-blur-lg transition hover:bg-white/10"
              >
                Take a peek
                at my résumé
                👀
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          REST OF WEBSITE
      ================================================= */}

      <div className="relative z-10 bg-[#07090d]/55 backdrop-blur-[1px]">

        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="px-6 py-36 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLabel>
              About Me
            </SectionLabel>

            <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Curious about
              data.

              <span className="block text-zinc-600">
                Focused on
                solving
                problems.
              </span>
            </h2>

            <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[600px] overflow-hidden rounded-[32px] border border-white/10">
                <img
                  src={`${basePath}/images/mehdi.jpg`}
                  alt="El Mehdi Bensouda"
                  className="h-full min-h-[600px] w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 pt-36">
                  <p className="text-2xl font-semibold">
                    El Mehdi
                    Bensouda
                  </p>

                  <p className="mt-2 text-sm font-medium tracking-wide text-zinc-300">
                    Data
                    Science
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center rounded-[32px] border border-white/[0.08] bg-[#0d1016]/80 p-8 backdrop-blur-xl md:p-12">
                <p className="text-xl leading-9 text-zinc-300 md:text-2xl">
                  I&apos;m
                  studying Data
                  Science at
                  Duquesne
                  University
                  and enjoy
                  working with
                  real datasets,
                  finding
                  patterns,
                  building
                  analytical
                  solutions,
                  and turning
                  complex
                  information
                  into
                  something
                  useful.
                </p>

                <p className="mt-7 text-lg leading-8 text-zinc-500">
                  My interests
                  include
                  machine
                  learning,
                  data
                  analytics,
                  scientific
                  research,
                  visualization,
                  and software
                  development.
                </p>

                <div className="mt-12 grid grid-cols-2 gap-4">
                  {[
                    "Data Science",
                    "Machine Learning",
                    "Research",
                    "Data Analytics",
                  ].map(
                    (
                      item
                    ) => (
                      <div
                        key={
                          item
                        }
                        className="rounded-2xl border border-white/[0.07] bg-black/25 p-5 text-sm text-zinc-300"
                      >
                        {
                          item
                        }
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            WORK
        ================================================= */}

        <section
          id="work"
          className="px-6 py-36 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLabel>
              Selected Work
            </SectionLabel>

            <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Work that
              shows

              <span className="block text-zinc-600">
                what I can
                do.
              </span>
            </h2>

            <div className="mt-20 space-y-10">
              {/* GTEx */}

              <motion.article
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
                className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#0d1016]/85"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="flex min-h-[650px] flex-col justify-between p-9 md:p-14">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm text-cyan-400">
                          Research
                        </p>

                        <span className="rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1 text-xs text-amber-300">
                          In
                          Progress
                        </span>
                      </div>

                      <h3 className="mt-8 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                        GTEx Gene
                        Expression
                        Research
                      </h3>

                      <p className="mt-7 text-lg leading-8 text-zinc-500">
                        Ongoing
                        research
                        using GTEx
                        V11
                        RNA-seq
                        data to
                        study how
                        gene
                        expression
                        varies
                        across
                        human
                        tissues.
                      </p>

                      <p className="mt-5 leading-7 text-zinc-600">
                        The
                        project
                        currently
                        focuses on
                        preparing
                        and
                        cleaning
                        large
                        gene-expression
                        datasets,
                        organizing
                        genes
                        across
                        tissues,
                        and
                        building
                        the
                        foundation
                        for
                        tissue-specific
                        expression
                        analysis.
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {[
                          "Python",
                          "Pandas",
                          "NumPy",
                          "Matplotlib",
                          "RNA-seq",
                          "GTEx V11",
                        ].map(
                          (
                            tech
                          ) => (
                            <span
                              key={
                                tech
                              }
                              className="rounded-full border border-white/[0.08] px-4 py-2 text-sm text-zinc-300"
                            >
                              {
                                tech
                              }
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <a
                      href={
                        links.gtexResearch
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="mt-12 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
                    >
                      <span>
                        View
                        research
                        on
                        GitHub
                      </span>

                      <GitHubIcon />
                    </a>
                  </div>

                  <ResearchWorkflow />
                </div>
              </motion.article>

              {/* SOCIAL MEDIA */}

              <motion.article
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
                className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#0d1016]/85"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[650px] overflow-hidden bg-black">
                    <iframe
                      src={`${socialMediaPresentation}#toolbar=0&navpanes=0&scrollbar=1`}
                      title="Social Media Impact Study Presentation"
                      className="h-[650px] w-full border-0 bg-black"
                    />

                    <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/10 bg-black/75 px-4 py-2 text-xs text-zinc-300">
                      Scroll
                      through
                      the
                      presentation
                    </div>
                  </div>

                  <div className="flex min-h-[650px] flex-col justify-between p-9 md:p-14">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm text-cyan-400">
                          Data
                          Science
                          Project
                        </p>

                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs text-emerald-300">
                          Completed
                        </span>
                      </div>

                      <h3 className="mt-8 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                        Social
                        Media
                        Impact
                        Study
                      </h3>

                      <p className="mt-7 text-lg leading-8 text-zinc-500">
                        Analyzed
                        social
                        media
                        usage,
                        mental
                        health,
                        addiction,
                        and
                        academic
                        performance
                        across teen
                        and student
                        datasets.
                      </p>

                      <p className="mt-5 leading-7 text-zinc-600">
                        The
                        project
                        uses
                        exploratory
                        data
                        analysis,
                        correlation
                        matrices,
                        heatmaps,
                        distributions,
                        boxplots,
                        group
                        comparisons,
                        and
                        logistic
                        regression.
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {[
                          "Python",
                          "Pandas",
                          "EDA",
                          "Visualization",
                          "Statistics",
                          "Logistic Regression",
                        ].map(
                          (
                            tech
                          ) => (
                            <span
                              key={
                                tech
                              }
                              className="rounded-full border border-white/[0.08] px-4 py-2 text-sm text-zinc-300"
                            >
                              {
                                tech
                              }
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <a
                      href={
                        socialMediaPresentation
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="mt-12 inline-flex w-fit rounded-full border border-white/[0.12] px-6 py-3 text-sm text-white transition hover:bg-white/10"
                    >
                      Open full
                      presentation
                      ↗
                    </a>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section
          id="experience"
          className="px-6 py-36 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLabel>
              Experience
            </SectionLabel>

            <h2 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Experience
              in action.

              <span className="block text-zinc-600">
                Data,
                research,
                and
                real-world
                problem
                solving.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
              Research,
              analytics,
              and
              professional
              experience
              where I have
              applied data
              skills to
              real
              projects,
              operations,
              and
              organizational
              needs.
            </p>

            <div className="mt-20 space-y-6">
              {experiences.map(
                (
                  experience,
                  index
                ) => (
                  <ExperienceCard
                    key={
                      experience.role
                    }
                    experience={
                      experience
                    }
                    index={
                      index
                    }
                  />
                )
              )}
            </div>
          </div>
        </section>

        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="relative overflow-hidden px-6 py-36 lg:px-8"
        >
          <motion.div
            animate={{
              x: [
                0,
                120,
                -40,
                0,
              ],
              y: [
                0,
                -30,
                70,
                0,
              ],
            }}
            transition={{
              duration: 18,
              repeat:
                Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[5%] top-[20%] h-[320px] w-[320px] rounded-full bg-cyan-500/[0.05] blur-[130px]"
          />

          <motion.div
            animate={{
              x: [
                0,
                -100,
                50,
                0,
              ],
              y: [
                0,
                60,
                -40,
                0,
              ],
            }}
            transition={{
              duration: 22,
              repeat:
                Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-[10%] right-[5%] h-[350px] w-[350px] rounded-full bg-blue-600/[0.05] blur-[140px]"
          />

          <div className="relative mx-auto max-w-7xl">
            <SectionLabel>
              Skills
            </SectionLabel>

            <h2 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Tools I use
              to

              <span className="block text-zinc-600">
                turn ideas
                into
                solutions.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
              A growing
              technical
              toolkit
              built
              through
              coursework,
              research,
              internships,
              analytics
              projects,
              and
              software
              development.
            </p>

            <div className="mt-20 grid gap-5 md:grid-cols-2">
              {skills.map(
                (
                  skill,
                  index
                ) => (
                  <SkillCard
                    key={
                      skill.title
                    }
                    skill={
                      skill
                    }
                    index={
                      index
                    }
                  />
                )
              )}
            </div>

            <div className="mt-16 overflow-hidden border-y border-white/[0.06] py-5">
              <motion.div
                animate={{
                  x: [
                    "0%",
                    "-50%",
                  ],
                }}
                transition={{
                  duration: 25,
                  repeat:
                    Infinity,
                  ease: "linear",
                }}
                className="flex w-max items-center whitespace-nowrap"
              >
                {[
                  ...marqueeSkills,
                  ...marqueeSkills,
                ].map(
                  (
                    skill,
                    index
                  ) => (
                    <div
                      key={`${skill}-${index}`}
                      className="flex items-center"
                    >
                      <span className="px-6 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                        {
                          skill
                        }
                      </span>

                      <span className="h-1 w-1 rounded-full bg-cyan-400/50" />
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* =================================================
            EDUCATION
        ================================================= */}

        <section className="px-6 py-36 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
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
                duration: 0.75,
              }}
              className="relative overflow-hidden rounded-[40px] border border-white/[0.09] bg-[#0d1016]/80 p-9 backdrop-blur-xl md:p-14"
            >
              <div className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />

              <div className="relative">
                <SectionLabel>
                  Education
                </SectionLabel>

                <div className="grid gap-14 lg:grid-cols-2">
                  <div>
                    <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                      Duquesne
                      University
                    </h2>

                    <p className="mt-6 text-2xl text-zinc-300">
                      Bachelor of
                      Science in
                      Data
                      Science
                    </p>

                    <p className="mt-4 max-w-xl leading-7 text-zinc-500">
                      Building a
                      strong
                      foundation
                      in data
                      analysis,
                      statistics,
                      programming,
                      and
                      computational
                      problem
                      solving.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <span className="rounded-full border border-white/[0.08] bg-black/20 px-4 py-2 text-sm text-zinc-400">
                        Pittsburgh,
                        Pennsylvania
                      </span>

                      <span className="rounded-full border border-white/[0.08] bg-black/20 px-4 py-2 text-sm text-zinc-400">
                        Expected
                        December
                        2027
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-full">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                        Interests
                        & Focus
                        Areas
                      </p>

                      <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-500">
                        Areas
                        I&apos;m
                        especially
                        interested
                        in
                        exploring
                        through
                        coursework,
                        research,
                        internships,
                        and
                        personal
                        projects.
                      </p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        {[
                          "Machine Learning",
                          "Data Analytics",
                          "Artificial Intelligence",
                          "Statistical Modeling",
                          "Data Visualization",
                          "Research",
                          "Software Development",
                          "Predictive Analytics",
                        ].map(
                          (
                            interest,
                            index
                          ) => (
                            <motion.span
                              key={
                                interest
                              }
                              initial={{
                                opacity: 0,
                                y: 12,
                              }}
                              whileInView={{
                                opacity: 1,
                                y: 0,
                              }}
                              whileHover={{
                                y: -3,
                                scale: 1.04,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                delay:
                                  index *
                                  0.05,
                              }}
                              className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.025] px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:border-cyan-400/25 hover:bg-cyan-400/[0.06] hover:text-cyan-200"
                            >
                              {
                                interest
                              }
                            </motion.span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="px-6 py-40 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
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
              className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-[#0d1016]/85 px-7 py-16 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-10 md:px-14 md:py-20"
            >
              <motion.div
                animate={{
                  x: [
                    0,
                    50,
                    -20,
                    0,
                  ],
                  y: [
                    0,
                    30,
                    -20,
                    0,
                  ],
                }}
                transition={{
                  duration: 16,
                  repeat:
                    Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[130px]"
              />

              <motion.div
                animate={{
                  x: [
                    0,
                    -40,
                    25,
                    0,
                  ],
                  y: [
                    0,
                    -25,
                    35,
                    0,
                  ],
                }}
                transition={{
                  duration: 20,
                  repeat:
                    Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-500/[0.06] blur-[140px]"
              />

              <div className="relative">
                <div className="text-center">
                  <SectionLabel>
                    Let&apos;s
                    Connect
                  </SectionLabel>

                  <h2 className="mx-auto max-w-5xl overflow-visible pb-6 text-5xl font-semibold leading-[1.1] tracking-[-0.055em] md:text-7xl lg:text-[82px]">
                    Let&apos;s
                    create

                    <span className="block overflow-visible bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-400 bg-clip-text pb-6 pt-1 leading-[1.2] text-transparent">
                      something
                      meaningful.
                    </span>
                  </h2>

                  <p className="mx-auto mt-2 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
                    I&apos;m
                    interested
                    in
                    internships,
                    research
                    opportunities,
                    and
                    collaborative
                    projects
                    where I can
                    apply data
                    science,
                    analytics,
                    machine
                    learning,
                    and
                    software
                    development.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {[
                      "Internships",
                      "Research",
                      "Data Science Projects",
                    ].map(
                      (
                        item
                      ) => (
                        <motion.span
                          key={
                            item
                          }
                          whileHover={{
                            y: -2,
                          }}
                          className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-2 text-xs font-medium text-cyan-200"
                        >
                          {
                            item
                          }
                        </motion.span>
                      )
                    )}
                  </div>
                </div>

                {/* CONTACT CARDS */}

                <div className="mt-16 grid gap-5 md:grid-cols-3">
                  {/* EMAIL */}

                  <motion.a
                    href={
                      links.email
                    }
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group relative flex min-h-[235px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/[0.07] bg-black/20 p-7 text-left transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.025]"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300">
                          <EmailIcon />
                        </div>

                        <span className="text-zinc-700 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                          <ArrowIcon />
                        </span>
                      </div>

                      <p className="mt-7 text-lg font-semibold text-white">
                        Email
                      </p>

                      <p className="mt-3 text-sm leading-6 text-zinc-500">
                        For
                        professional
                        opportunities,
                        research,
                        and
                        project
                        inquiries.
                      </p>
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                      <span className="text-sm font-semibold text-cyan-300">
                        Contact me
                      </span>

                      <EmailIcon />
                    </div>
                  </motion.a>

                  {/* LINKEDIN */}

                  <motion.a
                    href={
                      links.linkedin
                    }
                    target="_blank"
                    rel="noreferrer"
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.08,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group relative flex min-h-[235px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/[0.07] bg-black/20 p-7 text-left transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.025]"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300">
                          <LinkedInIcon />
                        </div>

                        <span className="text-zinc-700 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                          <ArrowIcon />
                        </span>
                      </div>

                      <p className="mt-7 text-lg font-semibold text-white">
                        LinkedIn
                      </p>

                      <p className="mt-3 text-sm leading-6 text-zinc-500">
                        Professional
                        experience,
                        background,
                        and career
                        updates.
                      </p>
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                      <span className="text-sm font-semibold text-cyan-300">
                        LinkedIn
                      </span>

                      <LinkedInIcon />
                    </div>
                  </motion.a>

                  {/* GITHUB */}

                  <motion.a
                    href={
                      links.github
                    }
                    target="_blank"
                    rel="noreferrer"
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.16,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group relative flex min-h-[235px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/[0.07] bg-black/20 p-7 text-left transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.025]"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300">
                          <GitHubIcon />
                        </div>

                        <span className="text-zinc-700 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                          <ArrowIcon />
                        </span>
                      </div>

                      <p className="mt-7 text-lg font-semibold text-white">
                        GitHub
                      </p>

                      <p className="mt-3 text-sm leading-6 text-zinc-500">
                        Research,
                        data
                        science
                        projects,
                        and
                        software
                        development
                        work.
                      </p>
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                      <span className="text-sm font-semibold text-cyan-300">
                        GitHub
                      </span>

                      <GitHubIcon />
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="border-t border-white/[0.07] bg-[#07090d]/70 px-6 py-10 backdrop-blur-xl lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-semibold tracking-[-0.01em] text-white">
                El Mehdi
                Bensouda
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Data Science
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500">
              <a
                href={
                  links.linkedin
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <span>
                  LinkedIn
                </span>

                <LinkedInIcon />
              </a>

              <a
                href={
                  links.github
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <span>
                  GitHub
                </span>

                <GitHubIcon />
              </a>

              <a
                href={
                  resumePath
                }
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Resume
              </a>

              <a
                href="#home"
                className="transition hover:text-cyan-300"
              >
                Back to top ↑
              </a>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-7xl border-t border-white/[0.05] pt-6">
            <p className="text-xs text-zinc-700">
              © 2026 El
              Mehdi Bensouda
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}