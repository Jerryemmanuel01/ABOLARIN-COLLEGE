import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABOLARIN COLLEGE - Excellence in Education",
  description:
    "Discover excellence at ABOLARIN COLLEGE. We provide world-class education with modern facilities, expert faculty, and comprehensive programs preparing students for a successful future.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
