import { getKeywordLanding } from "@/data/seo-pages";
import { KeywordPage, keywordMetadata } from "@/lib/seo-page";

const page = getKeywordLanding("ethical-hacking-brasov-ro")!;
export const metadata = keywordMetadata(page);
export default function Page() {
  return <KeywordPage page={page} />;
}
