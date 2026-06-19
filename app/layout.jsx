import Header from "@/components/Header/Header";
import "./globals.css";
import Transition from "@/lib/Transition";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "RecipeLab",
  description:
    "Search, browse, and save recipes from around the world. Built with Next.js 14, Tailwind CSS, and the free TheMealDB API — featuring dynamic routing, category filters, favorites via localStorage, and loading skeletons. Deployed on Vercel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col">
        <Header />
        {/* for page Transition */}
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
