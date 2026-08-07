import type { WorkCase } from "@content/types";
import { Reveal } from "../ui/Reveal";
import { WorkBentoCard } from "./WorkBentoCard";

export function WorksBentoGrid({ cases }: { cases: WorkCase[] }) {
  return (
    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-20 lg:grid-cols-3 lg:auto-rows-[32rem] lg:gap-8">
      {cases.map((work, index) => (
        <Reveal
          key={work.id}
          delay={Math.min(index * 0.05, 0.25)}
          className="flex h-full min-h-[28rem] flex-col sm:min-h-[30rem] lg:min-h-0"
        >
          <div className="flex h-full min-h-0 flex-1 flex-col">
            <WorkBentoCard work={work} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
