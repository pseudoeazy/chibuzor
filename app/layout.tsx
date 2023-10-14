import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import SiteLayout from "@/components/site-layout";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chibuzor | Web Developer",
  description:
    "Chibuzor is a Web Developer with Focus on Frontend Technologies ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteLayout>
            <Header />
            {children}
            <Footer />
          </SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
