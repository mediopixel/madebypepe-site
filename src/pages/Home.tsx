import { Head } from "vite-react-ssg"

const SITE_URL = "https://madebypepe.com"
const TITLE = "madebypepe — Code · Art · Design · AI"
const DESCRIPTION = "Portfolio of Pepe. Creative by nature. Technical by design."
const DISCIPLINES = ["Code", "Art", "Design", "AI"]

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
      </Head>

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <a href="/" className="font-extrabold tracking-tight">
          madebypepe
        </a>
        <nav aria-label="Main" className="flex gap-6 text-sm text-muted">
          <a href="#work" className="hover:text-paper">Work</a>
          <a href="#about" className="hover:text-paper">About</a>
          <a href="#contact" className="hover:text-paper">Contact</a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section className="flex min-h-[70vh] flex-col justify-center py-16">
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-8xl">madebypepe</h1>
          <p className="mt-6 text-lg font-medium uppercase tracking-widest sm:text-xl">
            {DISCIPLINES.map((discipline, index) => (
              <span key={discipline}>
                {index > 0 && <span className="mx-3 text-muted" aria-hidden="true">·</span>}
                <span className={index === 0 ? "text-lime" : undefined}>{discipline}</span>
              </span>
            ))}
          </p>
          <p className="mt-10 max-w-xl text-2xl text-muted sm:text-3xl">
            Creative by nature. <span className="text-paper">Technical by design.</span>
          </p>
        </section>

        <section id="work" className="border-t border-white/10 py-20">
          <h2 className="text-sm uppercase tracking-widest text-lime">Work</h2>
          <p className="mt-6 text-xl text-muted">Selected projects coming soon.</p>
        </section>

        <section id="about" className="border-t border-white/10 py-20">
          <h2 className="text-sm uppercase tracking-widest text-lime">About</h2>
          <p className="mt-6 max-w-2xl text-xl text-muted">
            I build at the intersection of code, art, design and AI.
          </p>
        </section>

        <section id="contact" className="border-t border-white/10 py-20">
          <h2 className="text-sm uppercase tracking-widest text-lime">Contact</h2>
          <p className="mt-6 text-xl text-muted">Get in touch — details coming soon.</p>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-muted">
        © {new Date().getFullYear()} madebypepe
      </footer>
    </>
  )
}
