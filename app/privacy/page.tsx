import type { Metadata } from "next";
import PolicyPage from "@/components/sections/legal/PolicyPage";
import { privacyPageContent } from "@/constants/data";

export const metadata: Metadata = {
  title: privacyPageContent.title,
  description: privacyPageContent.description,
};

export default function PrivacyPage() {
  return <PolicyPage page={privacyPageContent} />;
}
