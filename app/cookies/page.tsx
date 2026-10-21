import type { Metadata } from "next";
import PolicyPage from "@/components/sections/legal/PolicyPage";
import { cookiePageContent } from "@/constants/data";

export const metadata: Metadata = {
  title: cookiePageContent.title,
  description: cookiePageContent.description,
};

export default function CookiePolicyPage() {
  return <PolicyPage page={cookiePageContent} />;
}
