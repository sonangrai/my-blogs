import type { Metadata } from "next";
import { Geist, Hubot_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "./theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blogs - Sonahang Rai",
  description: "Personal blogs and writings by Sonahang Rai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9818673900351802"
            crossOrigin="anonymous"
          ></script>
        </head>
        <body
          className={`${geistSans.variable} ${hubotSans.variable} antialiased`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
