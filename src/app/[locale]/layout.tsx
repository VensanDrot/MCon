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

  https: return (
    <html lang={locale}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSXS88M6'`,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
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
