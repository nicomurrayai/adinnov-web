import { Fragment } from "react";
import { parseRichText, type RichInline } from "@/lib/case-studies/rich-text";

function Inline({ nodes }: { nodes: RichInline[] }) {
  return (
    <>
      {nodes.map((node, index) =>
        node.type === "strong" ? (
          <strong key={index} className="font-semibold text-navy">
            {node.value}
          </strong>
        ) : (
          <Fragment key={index}>{node.value}</Fragment>
        ),
      )}
    </>
  );
}

/** Renderiza el formato simple del panel. Los subtítulos internos son h3 (la sección ya es h2). */
export function RichText({ source, className = "" }: { source: string; className?: string }) {
  const blocks = parseRichText(source);
  if (blocks.length === 0) return null;

  return (
    <div className={`space-y-5 text-base leading-8 text-muted md:text-[1.0625rem] ${className}`}>
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h3
              key={index}
              className="font-display pt-2 text-xl font-medium leading-tight tracking-[-0.02em] text-navy md:text-2xl"
            >
              <Inline nodes={block.children} />
            </h3>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-2.5">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="relative pl-6">
                  <span aria-hidden="true" className="absolute left-0 top-[0.8em] h-px w-3 bg-signal" />
                  <Inline nodes={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index}>
            <Inline nodes={block.children} />
          </p>
        );
      })}
    </div>
  );
}
