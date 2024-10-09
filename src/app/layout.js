import localFont from "next/font/local";
import "./globals.css";
import "./globals.responsive.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Whizangle",
  description: "Whizangle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main id="MainContent" className="MainContent">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
