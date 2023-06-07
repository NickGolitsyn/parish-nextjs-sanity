import "@/styles/tailwind.css";
import './global.css';
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display"
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(playfair.variable, lora.variable, inter.variable)}>
      <body className="antialiased text-gray-800 dark:text-gray-400">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
