import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'Apexbuilds — Construction & Home Renovation Portal',
  description: 'Premier construction home page featuring custom residential builds, commercial remodeling, cost estimators, and expert architecture guides.',
  openGraph: {
    title: 'Apexbuilds — Construction & Home Renovation Portal',
    description: 'Premier construction home page featuring custom residential builds, commercial remodeling, cost estimators, and expert architecture guides.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Auto Ads Script for publisher pub-9131582476102508 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9131582476102508"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
