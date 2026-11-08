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
        {/* Monetag verification meta tag */}
        <meta name="monetag" content="93da8b61128bdf7e670261baae72ddc8" />
        {/* Monetag tag script (Zone 12216219) */}
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(s){s.dataset.zone='12216219',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))",
          }}
        />
        {/* Monetag vignette script (Zone 12216253) */}
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(s){s.dataset.zone='12216253',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))",
          }}
        />
        {/* Monetag vignette script (Zone 12216293) */}
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(s){s.dataset.zone='12216293',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))",
          }}
        />
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
