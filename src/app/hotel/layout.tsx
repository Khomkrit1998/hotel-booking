import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | HotelBook - จองโรงแรมออนไลน์",
    default: "โรงแรม | HotelBook - จองโรงแรมออนไลน์",
  },
  description: "จองโรงแรมคุณภาพด้วยราคาพิเศษ พร้อมบริการดีเยี่ยมและประสบการณ์ที่น่าจดจำ",
  keywords: ["โรงแรม", "จองโรงแรม", "ที่พัก", "ท่องเที่ยว", "ประเทศไทย"],
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "HotelBook",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HotelBook - จองโรงแรมออนไลน์",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hotelbook",
    creator: "@hotelbook",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HotelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
