import './globals.css';

export const metadata = {
  title: 'ApexBuild — Construction & Home Renovation Portal',
  description: 'Premier construction home page featuring custom residential builds, commercial remodeling, cost estimators, and expert architecture guides.',
  openGraph: {
    title: 'ApexBuild — Construction & Home Renovation Portal',
    description: 'Premier construction home page featuring custom residential builds, commercial remodeling, cost estimators, and expert architecture guides.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
