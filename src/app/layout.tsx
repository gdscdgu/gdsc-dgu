import '../styles/reset.css';
import '../styles/globals.css';
import clsx from 'clsx';
import Script from 'next/script';
import { NotoSans } from './fonts';
import Navigation from '@/components/navigation';
import Footer from "@/components/layout/footer/Footer";

export const metadata = {
  title: {
    template: '%s | GDSC DGU',
    default: 'GDSC DGU',
  },

  description: 'Google Developer Student Clubs 동국대학교',
  icons: {
    icon: '/favicon-black.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className="flex w-screen justify-center  bg-[#000] tablet:text-[16px] text-[14px] "
    >
      <body
        className={clsx(
          [NotoSans.className],
          //  max-w-[430px] mx-auto : 430px 이상일 때 가운데 정렬
          ['min-h-screen w-full'],
          ['shadow-xl'],
          ['bg-[#000000]'],
          ['text-white'],
        )}
      >
        <Navigation />
        <div className="pt-[5rem] flex justify-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
