const skills = {
  backend: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "JPA / Hibernate",
    "Session-Based Authentication",
    "Webhooks",
    "API Integration",
  ],
  frontend: ["Next.js", "React", "HTML", "CSS", "Tailwind CSS"],
  database: ["Oracle Database", "MySQL", "SQL"],
  tools: ["Git / GitHub", "Postman", "IntelliJ IDEA", "VS Code"],
};

const projectImages = [
  {
    src: "/Screenshot 2026-08-11 191702.png",
    title: "Student Dashboard",
    description: "Student-facing dashboard and application overview.",
  },
  {
    src: "/Screenshot 2026-08-12 002922.png",
    title: "Admin Dashboard",
    description: "Administrative dashboard for managing the system.",
  },
  {
    src: "/Screenshot 2026-08-11 192502.png",
    title: "All Students",
    description: "Student management interface for viewing student records.",
  },
  {
    src: "/Screenshot 2026-08-11 192956.png",
    title: "Add Student",
    description: "Interface for adding new student records.",
  },
  {
    src: "/Screenshot 2026-08-11 193035.png",
    title: "Create New Administrator",
    description: "Administrator account creation interface.",
  },
  {
    src: "/Screenshot 2026-08-11 192018.png",
    title: "Change Password",
    description: "Account password management interface.",
  },
];

const githubProfile = "https://github.com/mazahirm2005-cpu";

const projectGithub =
  "https://github.com/mazahirm2005-cpu/student-management-system";

const linkedin =
  "https://www.linkedin.com/in/muhammad-mazahir-65ab32333";

const email = "mazahir.m2005@gmail.com";

const cvPath = "/Muhammad-Mazahir-CV.pdf";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-xl font-bold tracking-tight"
          >
            Muhammad Mazahir
            <span className="text-blue-600">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a
              href="#about"
              className="transition hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition hover:text-blue-600"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-blue-600"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="transition hover:text-blue-600"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="transition hover:text-blue-600"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex min-h-screen items-center px-6 pt-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 py-16 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:py-20">
          
          {/* HERO CONTENT */}
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              Information Technology Student
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Muhammad Mazahir
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-700 sm:text-3xl">
              Backend &amp; Full-Stack Developer
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:mx-0">
              I build practical web applications using Java, Spring Boot,
              REST APIs, Next.js, React, and SQL-based databases, with a
              strong focus on backend development and software engineering.
            </p>

            {/* HERO BUTTONS */}
            <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
              >
                View Projects
              </a>

              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 px-6 py-3 font-medium transition hover:border-slate-900"
              >
                View CV
              </a>

              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 px-6 py-3 font-medium transition hover:border-slate-900"
              >
                GitHub
              </a>
            </div>

            {/* TECHNOLOGY HIGHLIGHTS */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-slate-500 md:justify-start">
              <span>Java</span>
              <span>•</span>
              <span>Spring Boot</span>
              <span>•</span>
              <span>Next.js</span>
              <span>•</span>
              <span>Oracle</span>
              <span>•</span>
              <span>REST APIs</span>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative">

              {/* Decorative shape */}
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-2xl border border-blue-100 bg-blue-50 sm:h-24 sm:w-24" />

              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-2xl border border-slate-200 bg-slate-50 sm:h-20 sm:w-20" />

              {/* Photo */}
              <div className="relative h-72 w-60 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm sm:h-80 sm:w-64 md:h-96 md:w-72">
                <img
                  src="/Muhammad Mazahir.jpg"
                  alt="Muhammad Mazahir"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-slate-100 bg-slate-50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            About Me
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Building practical software with a backend-first mindset.
            </h2>

            <div className="space-y-5 leading-7 text-slate-600">
              <p>
                I am an Information Technology undergraduate at Sir Syed
                University of Engineering &amp; Technology, Karachi, focused
                on backend and full-stack web development.
              </p>

              <p>
                My practical experience includes developing applications with
                Java, Spring Boot, REST APIs, Next.js, React, Oracle, SQL, and
                JPA/Hibernate.
              </p>

              <p>
                I enjoy understanding how frontend applications, backend
                services, APIs, and databases work together to build complete
                software systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Technical Skills
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <SkillGroup title="Backend" skills={skills.backend} />
            <SkillGroup title="Frontend" skills={skills.frontend} />
            <SkillGroup title="Database" skills={skills.database} />
            <SkillGroup title="Tools" skills={skills.tools} />
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section
        id="projects"
        className="border-t border-slate-100 bg-slate-50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Featured Project
          </p>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">

            {/* MAIN PROJECT IMAGE */}
            <div className="flex justify-center overflow-hidden bg-slate-100 p-4 sm:p-8">
              <img
                src={projectImages[0].src}
                alt="Student Information and Management System"
                className="h-auto max-w-full rounded-xl object-contain shadow-sm"
              />
            </div>

            {/* PROJECT INFORMATION */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="max-w-4xl">
                <p className="text-sm font-medium text-blue-600">
                  Full-Stack Web Application
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Student Information &amp; Management System
                </h2>

                <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                  A full-stack student management application built with
                  Next.js and Spring Boot, integrating Oracle Database through
                  JPA/Hibernate and using REST APIs for frontend-backend
                  communication.
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Java",
                    "Spring Boot",
                    "Next.js",
                    "React",
                    "Oracle",
                    "JPA / Hibernate",
                    "REST APIs",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* FEATURES */}
                <div className="mt-10">
                  <h3 className="text-lg font-semibold">
                    Key Features
                  </h3>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Student registration and login",
                      "Profile management",
                      "Admin dashboard",
                      "Student management",
                      "Role-based access",
                      "Session timeout handling",
                      "Activity logging",
                      "Webhook functionality",
                    ].map((feature) => (
                      <div
                        key={feature}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* PROJECT LINK */}
                <div className="mt-9">
                  <a
                    href={projectGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* PROJECT GALLERY */}
            <div className="border-t border-slate-200 p-8 sm:p-10 lg:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Project Gallery
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Application Screens
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                  Selected interfaces from the Student Information &amp;
                  Management System, covering student and administrative
                  workflows.
                </p>
              </div>

              {/* PRIMARY SCREENS */}
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {projectImages.slice(0, 2).map((image) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm"
                  >
                    <div className="overflow-hidden rounded-xl bg-white">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="block h-auto w-full object-contain transition duration-300 hover:scale-[1.01]"
                      />
                    </div>

                    <div className="px-2 pb-2 pt-4">
                      <h4 className="font-semibold text-slate-900">
                        {image.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* MANAGEMENT SCREENS */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold text-slate-900">
                  Management Screens
                </h4>

                <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projectImages.slice(2, 5).map((image) => (
                    <div
                      key={image.src}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                    >
                      <div className="flex h-56 items-center justify-center overflow-hidden bg-slate-50 p-3">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="h-full w-full object-contain transition duration-300 hover:scale-[1.02]"
                        />
                      </div>

                      <div className="min-h-[92px] p-5">
                        <h4 className="font-semibold text-slate-900">
                          {image.title}
                        </h4>

                        <p className="mt-1 line-clamp-1 text-sm text-slate-500">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACCOUNT MANAGEMENT */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold text-slate-900">
                  Account Management
                </h4>

                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                  <div className="overflow-hidden rounded-xl bg-white">
                    <img
                      src={projectImages[5].src}
                      alt={projectImages[5].title}
                      className="mx-auto block h-auto max-h-[600px] w-auto max-w-full object-contain transition duration-300 hover:scale-[1.01]"
                    />
                  </div>

                  <div className="px-2 pb-2 pt-4">
                    <h4 className="font-semibold text-slate-900">
                      {projectImages[5].title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {projectImages[5].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Experience
          </p>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
              <div>
                <h2 className="text-2xl font-bold">
                  Software / IT Intern
                </h2>

                <p className="mt-1 font-medium text-blue-600">
                  United Bank Limited (UBL)
                </p>
              </div>

              <p className="text-sm text-slate-500">
                Karachi · 2026
              </p>
            </div>

            <ul className="mt-7 space-y-3 text-slate-600">
              <li>
                • Exposure to a professional enterprise IT environment.
              </li>

              <li>
                • Gained exposure to enterprise software development and
                Oracle database technologies.
              </li>

              <li>
                • Gained exposure to IT support and software development
                workflows.
              </li>

              <li>
                • Collaborated with senior technical staff in a professional
                workplace environment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-t border-slate-100 bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Education
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">
              Bachelor of Information Technology
            </h2>

            <p className="mt-2 text-slate-600">
              Sir Syed University of Engineering &amp; Technology, Karachi
            </p>

            <p className="mt-1 text-sm text-slate-500">
              2023 – Present · Entering 7th Semester
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-slate-900 px-8 py-16 text-center text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Get In Touch
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            I&apos;m open to software development opportunities, internships,
            and projects where I can continue building practical engineering
            experience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            {/* EMAIL */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 font-medium text-slate-900 transition hover:bg-blue-50"
            >
              Email Me
            </a>

            {/* CV */}
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-6 py-3 font-medium transition hover:border-white"
            >
              View CV
            </a>

            {/* LINKEDIN */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-6 py-3 font-medium transition hover:border-white"
            >
              LinkedIn
            </a>

            {/* GITHUB */}
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-6 py-3 font-medium transition hover:border-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Muhammad Mazahir. All rights reserved.</p>

          <p>Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}