import { SetHtmlLang } from "@/components/set-html-lang";

export default function RomanianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SetHtmlLang lang="ro" />
      {children}
    </>
  );
}
