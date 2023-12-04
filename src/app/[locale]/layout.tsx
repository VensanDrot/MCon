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

  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
