import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grid Impulse | Autonomous Intelligence for Europe's Energy Grid",
  description:
    "AI agents that autonomously detect faults, resolve congestion, and optimize renewable integration for TSOs and DSOs across the EU.",
  keywords: ["grid automation", "TSO", "DSO", "AI agents", "energy grid", "redispatch", "EU AI Act"],
  openGraph: {
    title: "Grid Impulse",
    description: "Autonomous Intelligence for Europe's Energy Grid",
    type: "website",
    url: "https://gridimpulse.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
