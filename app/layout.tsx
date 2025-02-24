import type { Metadata } from "next";
import './favicon.svg';
import { Inter_Tight, Zilla_Slab } from "next/font/google";
import "./globals.css";
import { Header } from "./_layouts/header";
import { Footer } from "./_layouts/footer";
import { ErrorWrapper } from "./error-wrapper";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"]
});

const zillaSlab = Zilla_Slab({
  variable: '--font-zilla-slab',
  weight: '300'
});

export const metadata: Metadata = {
  title:{
    default: "Nextjs App",
    template: "%s | Nextjs App"
  },
  description: "Generated by create next app",
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${zillaSlab.variable}`} style={{ margin: '0 auto', maxWidth: '900px'}}>
        <Header/>
        <main style={{ padding: '2rem 0' }}>
          <ErrorWrapper>{children}</ErrorWrapper>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
 