import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Prkt. AI-advies dat gewoon werkt",
  description: "Prkt helpt mkb-bedrijven AI echt te gebruiken. Praktisch, betaalbaar en zonder gedoe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
