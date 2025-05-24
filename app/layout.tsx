import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MSME Financing & Fintech Blog",
  description: "Latest insights, news, and analysis on MSME financing and fintech innovations",
  keywords: "MSME, financing, fintech, small business, digital banking, financial technology",
  openGraph: {
    title: "MSME Financing & Fintech Blog",
    description: "Latest insights, news, and analysis on MSME financing and fintech innovations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
