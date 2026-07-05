import { ThemeToggle } from "@/app/components/theme-toggle";

export default function HomePage() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
          "Next.js + Tailwind site that presents my frontend direction, projects, and technical background.",
      stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Electric Vehicle Dashboard",
      description:
          "Interactive EV dashboard built with Flask, HTML, CSS, and JavaScript to explore registration data with charts, filters, and exports.",
      stack: ["Flask", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Polen89/EV-Dashboard",
      live: "https://ev-dashboard-vkrs.onrender.com/",
    },
    {
      title: "Python File Organizer",
      description:
          "Python utility for organizing files by date and normalizing filenames, with safe collision handling and support for multiple file types.",
      stack: ["Python", "File I/O", "CLI"],
      github: "https://github.com/Polen89/python-file-organizer",
    },
    {
      title: "Personal Spending Analysis",
      description:
          "Python-based analysis of personal expense data using pandas and matplotlib to identify spending patterns and key cost drivers.",
      stack: ["Python", "pandas", "matplotlib", "Data Analysis"],
      github: "https://github.com/Polen89/personal-spending-analysis",
    },
  ];

  const skills = [
    "Next.js", "Tailwind CSS", "TypeScript", "HTML5", "CSS3",
    "JavaScript", "Responsive Design", "UI / UX Design", "Git",
    "APIs", "Python", "SQL",
  ];

  return (
      <main className="min-h-screen bg-slate-100 dark:bg-zinc-950 text-slate-900 dark:text-zinc-50 transition-colors duration-300">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800">
        <span className="text-xl font-bold tracking-tight text-teal-600 dark:text-teal-400">
          Chris Polen
        </span>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <a href="#projects" className="text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Work</a>
              <a href="#capabilities" className="text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Capabilities</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </nav>

        {/* HERO */}
        <section className="bg-slate-200 dark:bg-zinc-950 pt-16">
          <div className="mx-auto max-w-4xl px-6 py-10 md:py-12">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-white dark:bg-zinc-900/80 px-4 py-2 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                Frontend Developer
              </span>
                <span className="h-1 w-1 rounded-full bg-teal-500 dark:bg-teal-400" />
                <span className="text-xs font-medium text-slate-600 dark:text-zinc-300">
                Data workflows · Dashboards
              </span>
              </div>
            </div>

            <h1 className="text-4xl pt-6 md:text-5xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              Building interfaces that are clear, useful, and intentional.
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-700 dark:text-zinc-300">
              Frontend-focused developer with a background in GIS, data workflows, and building
              practical web-based tools and dashboards.
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-zinc-400">
              I care about making things that actually work well for the people using them.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                  href="#projects"
                  className="rounded-md bg-teal-600 dark:bg-teal-500 px-7 py-3 text-sm font-medium text-white dark:text-white shadow-md transition hover:bg-teal-500 dark:hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                View Selected Work
              </a>
              <a
                  href="#contact"
                  className="rounded-md border border-slate-400 dark:border-teal-500 bg-white dark:bg-zinc-900/80 px-7 py-3 text-sm font-medium text-slate-900 dark:text-zinc-50 transition hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="projects" className="bg-slate-100 dark:bg-zinc-900 border-t-2 border-teal-500">
          <div className="mx-auto max-w-4xl px-6 py-9 md:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-zinc-500">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              Projects that reflect the kind of frontend work I like to build.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-zinc-300">
              I&apos;m focused on building responsive interfaces, useful tools, and web experiences
              that feel clear, intentional, and easy to use.
            </p>

            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                  <article
                      key={project.title}
                      className="border-b border-slate-300 dark:border-zinc-800 pb-4 last:border-b-0"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-zinc-50">
                      {project.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                          <span
                              key={item}
                              className="rounded-full border border-teal-300 dark:border-zinc-700 bg-teal-100 dark:bg-zinc-900 px-3 py-1 text-xs text-teal-800 dark:text-zinc-900"
                          >
                      {item}
                    </span>
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm">
                      {project.live && (
                          <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-md bg-teal-600 dark:bg-teal-500 px-7 py-3 text-sm font-medium text-white dark:text-white shadow-md transition hover:bg-teal-500 dark:hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                          >
                            Live Demo
                          </a>
                      )}
                      {project.github && (
                          <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-md border border-slate-400 dark:border-teal-500 bg-white dark:bg-zinc-900/80 px-7 py-3 text-sm font-medium text-slate-900 dark:text-zinc-50 transition hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                          >
                            View source on GitHub
                          </a>
                      )}
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="bg-slate-200 dark:bg-zinc-950">
          <div className="mx-auto max-w-4xl px-6 py-9 md:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-zinc-500">
              Capabilities
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              I build clear, usable interfaces backed by technical depth.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-zinc-300">
              I&apos;m moving deeper into frontend development and UI-focused work, with a background
              in technical workflows, structured data, and practical tool building.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-zinc-500">
                  Frontend
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-zinc-50">
                  Responsive, modern web interfaces
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                  Building websites and app interfaces with a focus on clean layout, readable
                  structure, and straightforward user flows.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                      <span
                          key={skill}
                          className="rounded-full border  border-teal-300 dark:border-zinc-700 bg-teal-100 dark:bg-teal-100 px-3 py-1.5 text-xs text-teal-800 dark:text-zinc-900"
                      >
                    {skill}
                  </span>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border border-slate-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-zinc-500">
                  UI / UX
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-zinc-50">
                  Interfaces designed to feel clear and useful
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                  I care about spacing, hierarchy, usability, and building pages that are easy to
                  scan, navigate, and understand.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Responsive Design", "UI / UX Design", "Accessibility"].map((item) => (
                      <span
                          key={item}
                          className="rounded-full border border-teal-300 dark:border-zinc-700 bg-teal-100 dark:bg-teal-100 px-3 py-1.5 text-xs text-teal-800 dark:text-zinc-900"
                      >
                    {item}
                  </span>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border border-slate-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-zinc-500">
                  Foundation
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-zinc-50">
                  Strong technical background behind the interface
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                  My experience with data workflows, APIs, scripting, and structured systems helps
                  me build practical web-based tools with real utility.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["JavaScript", "Python", "APIs", "SQL"].map((item) => (
                      <span
                          key={item}
                          className="rounded-full border border-teal-300 dark:border-zinc-700 bg-teal-100 dark:bg-teal-100 px-3 py-1.5 text-xs text-teal-800 dark:text-zinc-900"
                      >
                    {item}
                  </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* BACKGROUND */}
        <section className="bg-slate-100 dark:bg-zinc-900">
          <div className="mx-auto max-w-4xl px-6 py-8 md:py-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-zinc-500">
              Background
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              Bringing technical depth into frontend work.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-zinc-300">
              I&apos;ve worked with GIS, data workflows, scripting, dashboards, and internal tools.
              That experience gave me a strong foundation in problem-solving and structured thinking,
              which I&apos;m now applying directly to frontend development and interface-focused work.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t-2 border-teal-500 bg-slate-200 dark:bg-zinc-950">
          <div className="mx-auto max-w-4xl px-6 py-8 md:py-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-zinc-500">
              Contact
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              Let&apos;s connect about frontend work.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-zinc-300">
              I&apos;m interested in frontend-focused roles and projects where clear interfaces, data,
              and practical tools matter. Feel free to reach out about opportunities or collaboration.
            </p>

            <p className="mt-4 text-xs font-medium text-slate-500 dark:text-zinc-500">
              Preferred contact:
            </p>

            <div className="mt-3 flex flex-wrap gap-4">
              <a
                  href="mailto:polen.chris89@gmail.com"
                  aria-label="Email Chris Polen about frontend opportunities"
                  className="rounded-md bg-teal-600 dark:bg-teal-500 px-5 py-3 text-sm font-medium text-white dark:text-white shadow-md transition hover:bg-teal-500 dark:hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
              Email
            </a>
            <a
              href="https://github.com/Polen89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  rounded-md border border-slate-400 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-5 py-3 text-sm font-medium text-slate-900 dark:text-zinc-50 transition hover:border-teal-500 hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                GitHub
              </a>
              <a
                  href="https://www.linkedin.com/in/christopher-polen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-slate-400 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-5 py-3 text-sm font-medium text-slate-900 dark:text-zinc-50 transition hover:border-teal-500 hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                LinkedIn
              </a>
              <a
                  href="/frontend-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-slate-400 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-5 py-3 text-sm font-medium text-slate-900 dark:text-zinc-50 transition hover:border-teal-500 hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Resume
              </a>
            </div>
          </div>
        </section>
      </main>
  );
}