import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "latin-ext"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const baseUrl = host ? `${protocol}://${host}` : "https://tao-visual-studio.rivascarr714539.chatgpt.site";
  const imageUrl = `${baseUrl}/og-v2.png`;

  return {
    title: "Vũ Minh Hiếu — AI Creator",
    description: "Portfolio AI visual, film và motion của Vũ Minh Hiếu — AI Creator tại Việt Nam.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Vũ Minh Hiếu — AI Creator",
      description: "Cinematic AI visuals for architecture, hospitality and lifestyle.",
      type: "website",
      images: [{ url: imageUrl, width: 1732, height: 908, alt: "Vũ Minh Hiếu — AI Creator" }],
    },
    twitter: { card: "summary_large_image", title: "Vũ Minh Hiếu — AI Creator", images: [imageUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
