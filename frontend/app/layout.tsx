import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../providers/theme-provider";
import AnimatedBackground from "../components/AnimatedBackground";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "BotCraft - Create Your Personal AI Bot",
  description: "Transform your knowledge into an intelligent AI bot that represents you. Share your expertise, personality, and insights with the world through your personalized AI assistant.",
  keywords: ["AI bot", "personal assistant", "chatbot", "artificial intelligence", "knowledge sharing", "AI creation"],
  authors: [{ name: "BotCraft Team" }],
  creator: "BotCraft",
  publisher: "BotCraft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://botcraft.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BotCraft - Create Your Personal AI Bot",
    description: "Transform your knowledge into an intelligent AI bot that represents you. Share your expertise, personality, and insights with the world.",
    url: "https://botcraft.ai",
    siteName: "BotCraft",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BotCraft - Personal AI Bot Creation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BotCraft - Create Your Personal AI Bot",
    description: "Transform your knowledge into an intelligent AI bot that represents you.",
    images: ["/og-image.jpg"],
    creator: "@botcraft",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-inter antialiased transition-all duration-1000`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
         
          disableTransitionOnChange
        >
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
