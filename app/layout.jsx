import "./globals.css";

export const metadata = {
  title: "RecipeLab",
  description:
    "Search, browse, and save recipes from around the world. Built with Next.js 14, Tailwind CSS, and the free TheMealDB API — featuring dynamic routing, category filters, favorites via localStorage, and loading skeletons. Deployed on Vercel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
