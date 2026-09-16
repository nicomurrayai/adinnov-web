import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { CaseStudyArticle } from "@/components/case-studies/CaseStudyArticle";
import { Container } from "@/components/ui/Container";
import { getCaseStudyPreview } from "@/lib/case-studies/queries";

type Props = {
  params: Promise<{ token: string }>;
};

export const metadata: Metadata = {
  title: "Vista previa de caso de éxito",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

/** Vista previa de un caso generado desde el panel. El token vence en una hora y nunca se cachea. */
export default async function CaseStudyPreviewPage({ params }: Props) {
  await connection();
  const { token } = await params;
  const caseStudy = await getCaseStudyPreview(token);
  if (!caseStudy) notFound();

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-signal/30 bg-signal text-white" role="status">
        <Container className="flex flex-col gap-1 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">Vista previa · Este contenido no es público todavía.</p>
          <p className="text-white/80">El enlace vence una hora después de generarse en el panel.</p>
        </Container>
      </div>
      <CaseStudyArticle caseStudy={caseStudy} preview />
    </>
  );
}
