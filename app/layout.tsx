import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/globals.css';
import { APP_NAME, SERVER_URL } from '@/lib/constants';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME
  },
  description: 'Probably, the best e-commerce platform out there',
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider 
          enableSystem attribute="class" disableTransitionOnChange>{children}</ThemeProvider>
      </body>
    </html>
  );
}
