import type { Metadata } from "next";
import PolicyPage from "@/components/sections/legal/PolicyPage";
import { termsPageContent } from "@/constants/data";

export const metadata: Metadata = {
  title: termsPageContent.title,
  description: termsPageContent.description,
};

export default function TermsPage() {
  return <PolicyPage page={termsPageContent} />;
}
