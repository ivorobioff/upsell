import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/globals.css';

const inter = Inter({ subsets: ['cyrillic'] });


export const metadata: Metadata = {
  title: 'Upsell',
  description: 'Probably, the best e-commerce platform out there',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
