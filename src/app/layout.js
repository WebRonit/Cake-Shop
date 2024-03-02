import NextTopLoader from 'nextjs-toploader';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cake Delight",
  description: "Order cakes online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#e4174f" showSpinner={false}/>
        {children} 
      </body>
    </html>
  );
}
