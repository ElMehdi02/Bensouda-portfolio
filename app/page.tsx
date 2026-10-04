const projects = [
  {
    title: "GTEx Gene Expression Research",
    category: "Research",
    description:
      "Exploring how genes are expressed across different human tissues using Python, Pandas, data cleaning, normalization, and analysis.",
    tech: ["Python", "Pandas", "Research", "Data Analysis"],
    dark: true,
  },
  {
    title: "Data Analytics & Dashboards",
    category: "Data Science",
    description:
      "Cleaning datasets, analyzing trends, and building visual dashboards that turn raw information into useful insights.",
    tech: ["Python", "SQL", "Power BI", "Visualization"],
    dark: false,
  },
  {
    title: "Statistical Analysis Projects",
    category: "Statistics",
    description:
      "Working with regression, confidence intervals, hypothesis testing, correlation, and statistical interpretation.",
    tech: ["R", "Statistics", "Regression", "Visualization"],
    dark: false,
  },
];

const skillGroups = [
  {
    title: "Data & Machine Learning",
    skills: ["Python", "Pandas", "NumPy", "R", "SQL", "Machine Learning"],
  },
  {
    title: "Visualization",
    skills: ["Power BI", "Looker Studio", "Matplotlib", "Data Storytelling"],
  },
  {
    title: "Development",
    skills: ["TypeScript", "React", "Next.js", "JavaScript", "HTML", "CSS", "Git"],
  },
  {
    title: "Programming",
    skills: ["C++", "C", "Assembly", "Object-Oriented Programming"],
  },
];

export default function Home() {
  return (
    <main className="bg-white text-neutral-950">
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-base font-semibold tracking-tight">
            El Mehdi Bensouda
          </a>

          <div className="hidden items-center gap-7 text-sm text-neutral-600 md:flex">
            <a href="#about" className="transition hover:text-black">
              About
            </a>

            <a href="#work" className="transition hover:text-black">
              Work
            </a>

            <a href="#research" className="transition hover:text-black">
              Research
            </a>

            <a href="#experience" className="transition hover:text-black">
              Experience
            </a>

            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>

            <a
              href="/resume.pdf"
              className="rounded-full bg-black px-5 py-2 text-white transition hover:bg-neutral-800"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28"
      >
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-[350px] w-[350px] rounded-full bg-purple-200/40 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            Data Science • Machine Learning • Software
          </p>

          <h1 className="text-6xl font-semibold tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[110px]">
            I turn data into
            <span className="block bg-gradient-to-r from-blue-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              useful solutions.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-500 md:text-xl">
            I&apos;m El Mehdi Bensouda, a Data Science student focused on
            machine learning, analytics, research, and building useful
            technology.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-neutral-800"
            >
              View my work
            </a>

            <a
              href="/resume.pdf"
              className="rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-medium transition duration-300 hover:scale-105 hover:bg-neutral-100"
            >
              Download resume
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-black">
              GitHub
            </a>
            <a href="#" className="hover:text-black">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-neutral-50 px-6 py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-blue-600">About Me</p>

            <h2 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Curious about data.
              <span className="block text-neutral-400">
                Focused on solving problems.
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
              I study Data Science and enjoy working with real datasets,
              finding patterns, building models, and turning technical results
              into clear information people can use.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
              My interests include machine learning, data analytics, research,
              software development, and creating tools that solve real-world
              problems.
            </p>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <p className="text-sm text-neutral-500">Currently focused on</p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-2xl font-semibold">Data Science</p>
                  <p className="mt-1 text-neutral-500">
                    Analysis, modeling, and insights
                  </p>
                </div>

                <div className="border-t border-neutral-200 pt-5">
                  <p className="text-2xl font-semibold">Machine Learning</p>
                  <p className="mt-1 text-neutral-500">
                    Learning how models solve real problems
                  </p>
                </div>

                <div className="border-t border-neutral-200 pt-5">
                  <p className="text-2xl font-semibold">Research</p>
                  <p className="mt-1 text-neutral-500">
                    Working with scientific and real-world data
                  </p>
                </div>

                <div className="border-t border-neutral-200 pt-5">
                  <p className="text-2xl font-semibold">
                    Software Development
                  </p>
                  <p className="mt-1 text-neutral-500">
                    Building useful and modern applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-4xl text-center">
            <p className="text-sm font-semibold text-blue-600">Selected Work</p>

            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Projects that show
              <span className="block text-neutral-400">what I can do.</span>
            </h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group overflow-hidden rounded-[36px] p-10 transition duration-500 hover:-translate-y-1 md:p-14 ${
                  project.dark
                    ? "bg-neutral-950 text-white"
                    : index === 1
                    ? "bg-gradient-to-br from-blue-50 via-white to-violet-100"
                    : "bg-neutral-100"
                }`}
              >
                <div className="grid min-h-[480px] gap-14 lg:grid-cols-2 lg:items-center">
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        project.dark ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {project.category}
                    </p>

                    <h3 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
                      {project.title}
                    </h3>

                    <p
                      className={`mt-6 max-w-xl text-lg leading-8 ${
                        project.dark
                          ? "text-neutral-400"
                          : "text-neutral-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full px-4 py-2 text-sm ${
                            project.dark
                              ? "bg-white/10 text-neutral-200"
                              : "bg-white text-neutral-700 shadow-sm"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-9 flex gap-5 text-sm font-medium">
                      <a
                        href="#"
                        className={
                          project.dark
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-blue-600 hover:text-blue-700"
                        }
                      >
                        View case study →
                      </a>

                      <a
                        href="#"
                        className={
                          project.dark
                            ? "text-neutral-400 hover:text-white"
                            : "text-neutral-500 hover:text-black"
                        }
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div
                    className={`flex min-h-[330px] items-center justify-center rounded-[28px] border ${
                      project.dark
                        ? "border-white/10 bg-white/5"
                        : "border-black/5 bg-white/70"
                    }`}
                  >
                    <div className="px-10 text-center">
                      <p
                        className={`text-sm ${
                          project.dark
                            ? "text-neutral-500"
                            : "text-neutral-400"
                        }`}
                      >
                        Project preview
                      </p>

                      <p
                        className={`mt-3 text-xl font-medium ${
                          project.dark
                            ? "text-neutral-300"
                            : "text-neutral-600"
                        }`}
                      >
                        Add your screenshots, charts, dashboard, or project
                        visualization here.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section
        id="research"
        className="bg-neutral-950 px-6 py-32 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-blue-400">Research</p>

              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
                Exploring real
                <span className="block text-neutral-500">
                  scientific data.
                </span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-2xl text-lg leading-8 text-neutral-400">
                My current research work focuses on gene expression data and
                understanding how genes behave across different human tissues.
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-[36px] border border-white/10 bg-white/[0.04] p-10 md:p-14">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="text-sm text-neutral-500">Current Research</p>

                <h3 className="mt-3 text-3xl font-semibold md:text-5xl">
                  GTEx Gene Expression Analysis
                </h3>

                <p className="mt-6 max-w-2xl leading-8 text-neutral-400">
                  Working with gene-tissue expression data using Python and
                  Pandas to clean, organize, normalize, and analyze patterns
                  across human tissues.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Created gene-tissue tables",
                  "Checked missing values",
                  "Removed zero-expression genes",
                  "Prepared normalization workflow",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl bg-white/[0.06] p-6 text-neutral-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-blue-600">Experience</p>

          <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            Learning by
            <span className="block text-neutral-400">building and doing.</span>
          </h2>

          <div className="mt-20">
            <div className="grid gap-6 border-t border-neutral-200 py-10 md:grid-cols-[160px_1fr]">
              <p className="text-neutral-500">2026</p>

              <div>
                <h3 className="text-2xl font-semibold">
                  Data Science Intern
                </h3>
                <p className="mt-1 text-neutral-500">Attawheed Foundation</p>
                <p className="mt-4 max-w-3xl leading-7 text-neutral-600">
                  Worked with data cleaning, analysis, dashboards, and
                  visualization while applying data science skills to real
                  projects.
                </p>
              </div>
            </div>

            <div className="grid gap-6 border-t border-neutral-200 py-10 md:grid-cols-[160px_1fr]">
              <p className="text-neutral-500">2026</p>

              <div>
                <h3 className="text-2xl font-semibold">Research Project</h3>
                <p className="mt-1 text-neutral-500">
                  Gene Expression Analysis
                </p>
                <p className="mt-4 max-w-3xl leading-7 text-neutral-600">
                  Using Python, Pandas, and scientific datasets to study gene
                  expression across human tissues.
                </p>
              </div>
            </div>

            <div className="grid gap-6 border-y border-neutral-200 py-10 md:grid-cols-[160px_1fr]">
              <p className="text-neutral-500">2024–2026</p>

              <div>
                <h3 className="text-2xl font-semibold">
                  Duquesne University
                </h3>
                <p className="mt-1 text-neutral-500">Data Science</p>
                <p className="mt-4 max-w-3xl leading-7 text-neutral-600">
                  Coursework and projects in data science, statistics,
                  programming, mathematics, software development, and research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-neutral-50 px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-600">Skills</p>

            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Tools I use to
              <span className="block text-neutral-400">solve problems.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[30px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
              >
                <h3 className="text-2xl font-semibold">{group.title}</h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[36px] bg-neutral-950 p-10 text-white md:p-14">
            <p className="text-sm font-semibold text-blue-400">Education</p>

            <div className="mt-8 grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-semibold md:text-6xl">
                  Duquesne University
                </h2>

                <p className="mt-4 text-xl text-neutral-400">
                  B.S. Data Science
                </p>

                <p className="mt-2 text-neutral-500">
                  Pittsburgh, Pennsylvania
                </p>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Relevant Coursework
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Linear Algebra",
                    "Statistics",
                    "Probability",
                    "Data Science",
                    "Programming",
                    "Algorithms",
                    "Physics",
                  ].map((course) => (
                    <span
                      key={course}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-36 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold text-blue-600">
            Let&apos;s Connect
          </p>

          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] md:text-8xl">
            Let&apos;s build
            <span className="block bg-gradient-to-r from-blue-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              something useful.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-500">
            I&apos;m interested in opportunities in data science, analytics,
            machine learning, research, and software development.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:your-email@example.com"
              className="rounded-full bg-black px-8 py-4 font-medium text-white transition duration-300 hover:scale-105 hover:bg-neutral-800"
            >
              Email me
            </a>

            <a
              href="#"
              className="rounded-full border border-neutral-300 px-8 py-4 font-medium transition duration-300 hover:bg-neutral-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-neutral-500 md:flex-row">
          <p>© 2026 El Mehdi Bensouda</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-black">
              GitHub
            </a>

            <a href="#" className="transition hover:text-black">
              LinkedIn
            </a>

            <a href="/resume.pdf" className="transition hover:text-black">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}