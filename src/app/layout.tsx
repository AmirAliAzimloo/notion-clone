import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import db from "@/lib/supabase/db";
import { ThemeProvider } from "@/lib/providers/next-theme-provider";
import { twMerge } from "tailwind-merge";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion-Clone",
  description: "Notion Clone by Amir Ali Azimloo",
};

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  console.log(db)

  return (
    <html lang="en">
      <body className={twMerge('bg-background', inter.className)}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          >

        {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
