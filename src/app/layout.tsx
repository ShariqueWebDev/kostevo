import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Headers/Header";
import Footer from "@/components/Footer/Footer";
import ScreentoTop from "@/components/ScrolltoTop/ScrolltoTop";
import NextTopLoader from "nextjs-toploader";
import AppContextProvider from "@/components/context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// WE CAN CALL THIS FONT IN TAILWIND CSS LIKE: font-[family-name:var(--font-geist-sans)]
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const title = "Kostevo, Building a better world through Engineering";

export const description =
  "We specialize in delivering high-quality industrial components that power industries worldwide. From durable tube fittings, flanges, and fasteners to precision-engineered pipe fittings, gears, and valves, our products are built to meet the most demanding standards. Whether you need industrial valves, check valves, needle valves, manifold valves, or ball valves, we ensure unmatched reliability and performance in every piece.";

export const keywords =
  "Precision Machining Services, Valve Manufacturing, Tube Fittings Supplier, Custom Machining Solutions, Industrial Valve Fittings, CNC Machining, Engineering Components Manufacturer, High-Pressure Valves, Mechanical Component Fabrication, Gear Shafts and Pins Supplier, Industrial Equipment Manufacturer, Valve and Maintenance, Heavy Equipment Parts Manufacturer, Industrial Component Services";

// export const BASE_URL2 = `https://kostevobck.demo-web.live`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppContextProvider>
          <NextTopLoader />
          <Header />
          <ScreentoTop />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
