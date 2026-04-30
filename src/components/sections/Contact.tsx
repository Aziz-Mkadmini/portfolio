import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { Download, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

export function Contact() {
  const hasResume = /^(https?:\/\/|\/)/.test(site.resume);
  const resumeHref = hasResume ? site.resume : site.resumeRequestMailto;
  const resumeLabel = hasResume ? "Resume" : "Request resume";
  const hasWhatsapp = site.whatsapp.startsWith("http");

  const links = [
    { label: "LinkedIn", href: site.linkedin, icon: Linkedin, hint: "Professional background" },
    { label: "GitHub", href: site.github, icon: Github, hint: "Code & projects" },
    {
      label: resumeLabel,
      href: resumeHref,
      icon: Download,
      hint: hasResume ? "Download CV" : "Send me a note first",
    },
    {
      label: "Email",
      href: `mailto:${site.email}?subject=Portfolio%20inquiry&body=Hi%20Mohamed%2C%20I%20want%20to%20discuss%20a%20project.`,
      icon: Mail,
      hint: site.email,
    },
    ...(hasWhatsapp
      ? [{ label: "WhatsApp Business", href: site.whatsapp, icon: MessageCircle, hint: "Fast async chat" }]
      : []),
  ];

  return (
    <section id="contact" className="border-t border-white/10 py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl text-balance">
              Let’s design and ship something exceptional.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Share your goals, constraints, and timeline. I will answer with a clear plan,
              architecture direction, and concrete next steps.
            </p>
            <Stagger className="mt-6 space-y-2" staggerChildren={0.08}>
              {links.map((l) => (
                <StaggerItem key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-panel hover-lift flex items-start justify-between gap-3 rounded-2xl px-4 py-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-200/90">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white">{l.label}</p>
                        <p className="text-xs text-zinc-500">{l.hint}</p>
                      </div>
                    </div>
                    <span className="self-center text-xs text-zinc-500">Open</span>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="glass-panel mt-4 rounded-2xl border-dashed p-4 text-xs text-zinc-500">
              <p className="inline-flex items-center gap-2 text-zinc-300">
                <Phone className="h-3.5 w-3.5 text-zinc-400" />
                Prefer a call first?
              </p>
              <p className="mt-1">
                Use <span className="text-zinc-300">Book a call</span> in the nav — it keeps
                scheduling lightweight.
              </p>
            </div>
          </div>
          <FadeIn className="lg:col-span-7" y={18}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
