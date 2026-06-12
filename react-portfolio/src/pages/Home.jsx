import { PROJECTS, WORK } from '../data/portfolio'

const Link = ({ href, onClick, children }) => {
    const cls = "text-muted hover:text-accent transition-colors duration-150 underline underline-offset-[3px] decoration-border hover:decoration-accent cursor-pointer"
    if (onClick) return <button onClick={onClick} className={cls}>{children}</button>
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
}

export const Home = () => {
    const copyEmail = async () => {
        try { await navigator.clipboard.writeText('iank0426@gmail.com') }
        catch { /* noop */ }
        alert('Copied to clipboard')
    }

    return (
        <div className="max-w-[660px] mx-auto px-6 py-20 sm:py-28">

            {/* ── Hero ──────────────────────────────────────────── */}
            <section className="mb-20">
                <h1 className="text-[2rem] font-normal leading-tight mb-2">Ian Kim</h1>
                <p className="text-muted text-sm mb-7">Johns Hopkins University · Williams College</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm">
                    <Link href="https://github.com/iankim0">GitHub</Link>
                    <Link href="https://www.linkedin.com/in/ian-kim9">LinkedIn</Link>
                    <Link onClick={copyEmail}>iank0426@gmail.com</Link>
                    <Link href="/resume.pdf">Resume</Link>
                </div>
            </section>

            {/* ── Experience ────────────────────────────────────── */}
            <section className="mb-20">
                <p className="text-[11px] uppercase tracking-[0.14em] text-accent mb-10">Experience</p>

                <div className="space-y-10">
                    {WORK.map(exp => (
                        <div key={exp.id}>
                            <div className="flex items-baseline justify-between gap-6 mb-0.5">
                                <span className="font-medium">{exp.role}</span>
                                <span className="text-[12px] text-muted font-mono shrink-0">{exp.period}</span>
                            </div>
                            <p className="text-sm text-muted mb-2.5">{exp.company}</p>
                            <p className="text-sm text-foreground/70 leading-relaxed">{exp.description}</p>
                            {exp.courses && (
                                <div className="mt-2.5 space-y-0.5 text-[12px] text-muted">
                                    {exp.courses.map(c => (
                                        <div key={c.term}>{c.term} — {c.name}</div>
                                    ))}
                                </div>
                            )}
                            {exp.githubUrl && (
                                <div className="mt-2.5">
                                    <Link href={exp.githubUrl}>{exp.github}</Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Projects ──────────────────────────────────────── */}
            <section className="mb-20">
                <p className="text-[11px] uppercase tracking-[0.14em] text-accent mb-10">Projects</p>

                <div className="space-y-9">
                    {PROJECTS.map(proj => (
                        <div key={proj.slug}>
                            <div className="flex items-baseline gap-4 mb-1.5">
                                <span className="font-medium">{proj.title}</span>
                                <div className="flex items-center gap-3 ml-auto shrink-0 text-sm">
                                    <Link href={proj.githubUrl}>GitHub</Link>
                                    {proj.demoUrl && <Link href={proj.demoUrl}>Demo</Link>}
                                </div>
                            </div>
                            <p className="text-sm text-foreground/70 leading-relaxed mb-1.5">{proj.description}</p>
                            <p className="text-[12px] text-muted">{proj.tags.join(' · ')}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}
