import { getKeywordLanding } from "@/data/seo-pages";
import { KeywordPage, keywordMetadata } from "@/lib/seo-page";

const page = getKeywordLanding("testare-securitate-brasov")!;
export const metadata = keywordMetadata(page);
export default function Page() {
  return <KeywordPage page={page} />;
}
