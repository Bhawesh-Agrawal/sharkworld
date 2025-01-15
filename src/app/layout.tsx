import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shark Enterprises | Home",
  description: "Your home to premium stationary.",
  icons: {
    icon: "/favicon.ico", // Favicon for browsers
    shortcut: "/Logo.jpg", // Shortcut icon (optional)
    apple: "/apple-touch-icon.png", // Apple touch icon (for iOS devices)
  },
  openGraph: {
    title: "Shark Enterprises | Home",
    description: "Your home to premium stationary.",
    images: "/Logo.jpg", // Image for social media previews
  },
  twitter: {
    card: "summary_large_image", // Twitter card type
    title: "Shark Enterprises | Home",
    description: "Your home to premium stationary.",
    images: "/Logo.jpg", // Image for Twitter preview
  },
  metadataBase: new URL("https://www.sharkworld.bhaweshagrawal.com.np"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Navbar />
          <main
            className={`bg-[#030F26] w-[100%] min-h-[70vh] flex flex-col justify-start items-center font-erode`}
          >
            {children}
          </main>
          <div className="h-[92px] w-full bg-[#030F26]"></div>
          <Footer />
          <div className="h-[20px] w-full bg-[#030F26]"></div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
