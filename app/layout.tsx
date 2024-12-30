import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";

import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StackBuddy",
  description:
    "StackBuddy is a collaborative platform for developers to ask questions, share answers, and solve coding challenges. Join the vibrant programming community today!",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
