import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const interFont = Inter({
  subsets: ["cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-sans",
});

type RootLayoutProps = {
  children: Readonly<React.ReactNode>;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          interFont.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
