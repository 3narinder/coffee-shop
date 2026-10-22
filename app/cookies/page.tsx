import type { Metadata } from "next";
import PolicyPage from "@/components/sections/legal/PolicyPage";
import { cookiePageContent } from "@/constants/data/reusable";

export const metadata: Metadata = {
  title: cookiePageContent.title,
  description: cookiePageContent.description,
};

export default function CookiePolicyPage() {
  return <PolicyPage page={cookiePageContent} />;
}
