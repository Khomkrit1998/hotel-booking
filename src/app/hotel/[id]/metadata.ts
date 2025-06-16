import { Metadata } from "next";
import { getHotelBySlug } from "@/lib/hotel-utils";

// Updated interface for Next.js 15+ params as Promise
interface MetadataProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  try {
    // Unwrap params Promise - Required for Next.js 15+
    const { id } = await params;
    const hotel = await getHotelBySlug(id);

    if (!hotel) {
      return {
        title: "ไม่พบโรงแรม | HotelBook",
        description: "ไม่พบโรงแรมที่คุณค้นหา",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const title = `${hotel.name} - ${hotel.location} | HotelBook`;
    const description = `จอง ${hotel.name} ใน${hotel.location} ราคาเริ่มต้น ${hotel.price}/คืน ⭐ ${hotel.rating} (${hotel.reviews} รีวิว) ${hotel.description}`;

    return {
      title,
      description,
      keywords: [hotel.name, hotel.location, "โรงแรม", "จองโรงแรม", "ที่พัก", "ท่องเที่ยว", "ประเทศไทย", ...hotel.amenities],
      authors: [{ name: "HotelBook Team" }],
      creator: "HotelBook",
      publisher: "HotelBook",
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      category: "travel",
      classification: "business",
      openGraph: {
        type: "website",
        title,
        description,
        url: `/hotel/${id}`,
        images: [
          {
            url: hotel.image,
            width: 1200,
            height: 630,
            alt: hotel.name,
            type: "image/jpeg",
          },
          {
            url: hotel.image,
            width: 800,
            height: 600,
            alt: `${hotel.name} - รูปภาพโรงแรม`,
            type: "image/jpeg",
          },
        ],
        siteName: "HotelBook",
        locale: "th_TH",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [hotel.image],
        site: "@hotelbook",
        creator: "@hotelbook",
      },
      alternates: {
        canonical: `/hotel/${id}`,
        languages: {
          "th-TH": `/hotel/${id}`,
          "en-US": `/en/hotel/${id}`,
        },
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      verification: {
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
        yahoo: "your-yahoo-verification-code",
      },
      // Custom hotel-specific metadata
      other: {
        "hotel:name": hotel.name,
        "hotel:location": hotel.location,
        "hotel:price": hotel.price,
        "hotel:rating": hotel.rating.toString(),
        "hotel:reviews": hotel.reviews.toString(),
        "hotel:amenities": hotel.amenities.join(", "),
        "og:price:amount": hotel.price.replace("฿", "").replace(",", ""),
        "og:price:currency": "THB",
        "og:availability": "in stock",
        "product:price:amount": hotel.price.replace("฿", "").replace(",", ""),
        "product:price:currency": "THB",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "เกิดข้อผิดพลาด | HotelBook",
      description: "เกิดข้อผิดพลาดในการโหลดข้อมูลโรงแรม",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

// Generate static params for popular hotels (optional)
export async function generateStaticParams() {
  // You can pre-generate paths for popular hotels
  // This helps with performance for frequently visited pages

  const popularHotelSlugs = ["luxury-beach-resort-phuket-1", "mountain-view-hotel-chiang-mai-2", "urban-style-hotel-bangkok-3", "beachfront-villa-koh-samui-4"];

  return popularHotelSlugs.map((id) => ({
    id,
  }));

  // For fully dynamic generation, return empty array:
  // return [];
}
