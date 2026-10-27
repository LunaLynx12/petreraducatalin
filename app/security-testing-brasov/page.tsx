import { getKeywordLanding } from "@/data/seo-pages";
import { KeywordPage, keywordMetadata } from "@/lib/seo-page";

const page = getKeywordLanding("security-testing-brasov")!;
export const metadata = keywordMetadata(page);
export default function Page() {
  return <KeywordPage page={page} />;
}
