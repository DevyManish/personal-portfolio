import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevyManish | Manish Gupta's Portfolio",
  description: "I'm DevyManish by work and Manish Gupta in real life. I am a passionate web developer showcasing my projects and expertise on this portfolio. Explore my work in web development, MERN projects, web applications, and more!",
  keywords: "devymanish, DevyManish, manishguptafr, portfolio, HTML, CSS, portfolio , Manish Gupta, DevyManish portfolio, devymanish portfolio, Manish Gupta portfolio, manishguptaa, manishguptafr linkedin, manishguptafr website, web developer, MERN projects, web applications",
  author: "Manish Gupta",
  canonical: "https://www.manishguptaa.me",
  openGraph: {
    title: "DevyManish | Manish Gupta's Portfolio",
    description: "I'm DevyManish by work and Manish Gupta in real life. I am a passionate web developer showcasing my projects and expertise on this portfolio. Explore my work in web development, MERN projects, web applications, and more!",
    url: "https://www.manishguptaa.me",
    type: "website",
    images: [
      {
        url: "http://www.manishguptaa.me/src/assets/devymanish-manish-gupta-profile.png",
        width: 800,
        height: 600,
        alt: "DevyManish | Manish Gupta's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevyManish | Manish Gupta Portfolio",
    description: "I'm DevyManish by work and Manish Gupta in real life. I am a passionate web developer showcasing my projects and expertise on this portfolio. Explore my work in web development, MERN projects, web applications, and more!",
    images: ["http://www.manishguptaa.me/src/assets/devymanish-manish-gupta-profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  googleSiteVerification: "syWf9ZbBBMmu0eMJwQL0vxjJAj8BH0wpIzk6LcvoDRI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link href="/favicon.ico" rel="icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ActiveSectionContextProvider>
          {children}
        </ActiveSectionContextProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}