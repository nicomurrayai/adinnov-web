import type { CaseStudy } from "@/lib/case-studies/map";
import { Reveal } from "../ui/Reveal";
import { CaseStudyCard } from "./CaseStudyCard";

export function CaseStudiesGrid({
  caseStudies,
  headingLevel = "h2",
  className = "",
}: {
  caseStudies: CaseStudy[];
  headingLevel?: "h2" | "h3";
  className?: string;
}) {
  return (
    <ul className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 ${className}`}>
      {caseStudies.map((caseStudy, index) => (
        <li key={caseStudy.id} className="h-full">
          <Reveal delay={Math.min(index * 0.05, 0.25)} className="h-full">
            <CaseStudyCard caseStudy={caseStudy} headingLevel={headingLevel} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
