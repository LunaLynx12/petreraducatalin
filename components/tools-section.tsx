import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { toolsArsenal } from "@/data/tools";

export function ToolsSection() {
  return (
    <section id="tools" aria-labelledby="tools-heading" className="section-padding border-t border-border">
      <div className="container">
        <SectionHeading
          eyebrow="arsenal"
          id="tools-heading"
          title="Tools Arsenal"
          description="The tools I reach for daily - offensive platforms, cloud CLIs, and the defensive stack I know well enough to test around."
        />

        <Reveal>
          <div className="overflow-hidden rounded-xl border border-primary/20 bg-[#0d0d14] shadow-glow-sm">
            <div className="flex items-center gap-2 border-b border-border bg-surface/60 px-4 py-3">
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-accent/70" />
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-primary/70" />
              <span className="ml-3 font-mono text-xs text-muted">tools.sh</span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {toolsArsenal.map((tool, i) => (
                <div
                  key={tool}
                  className="group bg-[#0d0d14] px-4 py-4 transition-colors hover:bg-primary/5"
                  style={{ transitionDelay: `${i * 10}ms` }}
                >
                  <p className="font-mono text-xs text-muted transition-colors group-hover:text-primary sm:text-sm">
                    <span aria-hidden="true" className="mr-1.5 text-secondary/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {tool}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-border bg-surface/60 px-4 py-2.5 font-mono text-[11px] text-muted">
              <span className="text-primary">$</span> echo &quot;recon --enumerate --exploit --report&quot; | sudo tee /dev/arsenal
              <span aria-hidden="true" className="ml-1 inline-block h-3 w-1.5 animate-blink bg-primary align-middle" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}