"use client";

import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { Accordion } from "@/components/accordion";
import { expertiseItems } from "@/data/expertise";

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="section-y"
    >
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Capabilities"
          id="expertise-heading"
          title="Expertise"
          description={
            <>
              Four interlocking disciplines. My offensive work is grounded in an
              understanding of defense — every assessment is built to produce
              actionable defense.
            </>
          }
        />

        <Reveal>
          <Accordion items={expertiseItems} idPrefix="expertise" />
        </Reveal>
      </div>
    </section>
  );
}
