import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { site } from "@/lib/data";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Freelance IT Infrastructure Engineer`,
    template: `%s | ${site.name}`,
  },
  description:
    "Freelance IT Infrastructure Engineer based in Dubai, UAE, available for remote work worldwide. Microsoft 365, Azure, VMware, Windows Server administration, and backup & disaster recovery for small businesses and startups.",
  keywords: [
    "Freelance IT Support",
    "Remote System Administrator",
    "Microsoft 365 Freelancer",
    "Azure Freelancer",
    "VMware Freelancer",
    "IT Support Dubai",
    "Freelance System Administrator",
    "Remote IT Engineer",
    "Hire IT Consultant",
    "Windows Server Freelancer",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Freelance IT Infrastructure Engineer`,
    description:
      "Freelance remote IT support, Microsoft 365, Azure, and VMware infrastructure work for small businesses and startups worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Freelance IT Infrastructure Engineer`,
    description:
      "Freelance remote IT support, Microsoft 365, Azure, and VMware infrastructure work for small businesses and startups worldwide.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-search-console-verification-placeholder",
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    image: `${site.url}/og-image.png`,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    knowsAbout: [
      "Remote IT Support",
      "Microsoft 365",
      "Azure",
      "VMware Virtualization",
      "Windows Server Administration",
      "Backup & Disaster Recovery",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Self-employed / Freelance",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} font-body`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics />
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
