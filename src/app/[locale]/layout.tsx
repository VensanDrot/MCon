import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }];
}

export const metadata: Metadata = {
  title: "IronCraft",
  description: "We forge metal into art!",
  verification: {
    google: "noG9zzslhAFuSJ0d_dwKlJ2NK_Gehhpl3JIAn4TMuRs",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../message/${locale}.json`)).default;
  } catch (error) {
    console.log(error);
  }

  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang={locale}>
      <head>
        <script src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2HDY5R1N7X"></script>
        <script id="ga-script">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-2HDY5R1N7X');
        `}
        </script>
        <script id="ga-script">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GTM_ID}', {
      page_path: window.location.pathname,
    });
        `}
        </script>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSXS88M6" height="0" width="0"></iframe>
        </noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSXS88M6" height="0" width="0"></iframe>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
