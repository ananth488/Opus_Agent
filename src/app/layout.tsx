import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Opus Infiniti | Enterprise Software Solutions & AI-Powered IT Services",
  description:
    "Global software development company with 50+ experts, 20+ SaaS products, and 100+ implementations. Specializing in ERP, HRMS, AI, RPA, and IoT solutions.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white text-gray-900">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
