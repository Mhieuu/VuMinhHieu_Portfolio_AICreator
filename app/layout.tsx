import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "latin-ext"] });

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vu-minh-hieu-ai-creator.kh-ng-gian-l-3883.chatgpt.site";
const socialImage = `${siteUrl}/og-v2.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vũ Minh Hiếu — AI Creator",
  description: "Portfolio AI visual, film và motion của Vũ Minh Hiếu — AI Creator tại Việt Nam.",
  icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` },
  openGraph: {
    title: "Vũ Minh Hiếu — AI Creator",
    description: "Cinematic AI visuals for architecture, hospitality and lifestyle.",
    type: "website",
    images: [{ url: socialImage, width: 1732, height: 908, alt: "Vũ Minh Hiếu — AI Creator" }],
  },
  twitter: { card: "summary_large_image", title: "Vũ Minh Hiếu — AI Creator", images: [socialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
