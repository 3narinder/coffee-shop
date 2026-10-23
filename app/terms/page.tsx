import type { Metadata } from "next";
import PolicyPage from "@/components/sections/legal/PolicyPage";
import { termsPageContent } from "@/constants/data/reusable";

export const metadata: Metadata = {
  title: termsPageContent.title,
};

export default function TermsPage() {
  return <PolicyPage page={termsPageContent} />;
}
