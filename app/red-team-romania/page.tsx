import { getKeywordLanding } from "@/data/seo-pages";
import { KeywordPage, keywordMetadata } from "@/lib/seo-page";

const page = getKeywordLanding("red-team-romania")!;
export const metadata = keywordMetadata(page);
export default function Page() {
  return <KeywordPage page={page} />;
}
