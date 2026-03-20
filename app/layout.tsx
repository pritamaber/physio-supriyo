import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Physio Supriyo",
    template: "%s | Physio Supriyo",
  },
  description:
    "Personalized physiotherapy care for pain relief, posture improvement, mobility, and recovery.",
  keywords: [
    "physiotherapy",
    "physiotherapist",
    "pain relief",
    "back pain physiotherapy",
    "neck pain treatment",
    "posture correction",
    "sports injury rehab",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
