import { Hotel } from "@/types/hotel";

// Custom Error Types
export class HotelNotFoundError extends Error {
  constructor(slug: string) {
    super(`Hotel not found: ${slug}`);
    this.name = "HotelNotFoundError";
  }
}

export class InvalidSlugError extends Error {
  constructor(slug: string) {
    super(`Invalid hotel slug format: ${slug}`);
    this.name = "InvalidSlugError";
  }
}

export class HotelServiceError extends Error {
  constructor(message: string, public cause?: unknown) {
    super(message);
    this.name = "HotelServiceError";
  }
}

// Mock data สำหรับโรงแรม (ในความเป็นจริงจะดึงจาก database)
const mockHotels: Hotel[] = [
  {
    id: 1,
    name: "Luxury Beach Resort Phuket",
    location: "ภูเก็ต, ประเทศไทย",
    price: "฿3,500",
    rating: 4.8,
    reviews: 1254,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
    amenities: ["Wifi", "Pool", "Restaurant", "Parking", "Private Beach", "Spa"],
    description: "รีสอร์ทหรูหราริมชายหาดพร้อมวิวทะเลสุดงาม บริการระดับ 5 ดาวที่จะทำให้การพักผ่อนของคุณเป็นที่น่าจดจำ",
  },
  {
    id: 2,
    name: "Mountain View Hotel Chiang Mai",
    location: "เชียงใหม่, ประเทศไทย",
    price: "฿2,200",
    rating: 4.6,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
    amenities: ["Wifi", "Breakfast", "Spa", "Garden", "Restaurant", "Parking"],
    description: "โรงแรมแนวบูติกท่ามกลางธรรมชาติ มีวิวภูเขาที่สวยงามและบรรยากาศที่เงียบสงบ เหมาะสำหรับการพักผ่อน",
  },
  {
    id: 3,
    name: "Urban Style Hotel Bangkok",
    location: "กรุงเทพฯ, ประเทศไทย",
    price: "฿1,800",
    rating: 4.7,
    reviews: 2156,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    amenities: ["Wifi", "Gym", "Rooftop", "Restaurant", "Pool", "Parking"],
    description: "โรงแรมสไตล์โมเดิร์นใจกลางเมือง ใกล้แหล่งช้อปปิ้งและสถานที่ท่องเที่ยวสำคัญ พร้อมสิ่งอำนวยความสะดวกครบครัน",
  },
  {
    id: 4,
    name: "Beachfront Villa Koh Samui",
    location: "เกาะสมุย, ประเทศไทย",
    price: "฿4,200",
    rating: 4.9,
    reviews: 687,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    amenities: ["Private Beach", "Pool", "Spa", "Butler", "Wifi", "Restaurant"],
    description: "วิลล่าส่วนตัวหรูหราริมทะเล พร้อมบริการพ่อบ้านส่วนตัวและสิ่งอำนวยความสะดวกครบครัน เหมาะสำหรับครอบครัวหรือคู่รัก",
  },
  {
    id: 5,
    name: "Business Hotel Sukhumvit",
    location: "กรุงเทพฯ, ประเทศไทย",
    price: "฿2,800",
    rating: 4.5,
    reviews: 1456,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    amenities: ["Wifi", "Gym", "Restaurant", "Parking", "Pool", "Breakfast"],
    description: "โรงแรมสำหรับนักธุรกิจใจกลางสุขุมวิท ใกล้รถไฟฟ้า BTS และศูนย์การค้าชั้นนำ",
  },
  {
    id: 6,
    name: "Riverside Resort Ayutthaya",
    location: "พระนครศรีอยุธยา, ประเทศไทย",
    price: "฿1,500",
    rating: 4.4,
    reviews: 634,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    amenities: ["Wifi", "Restaurant", "Garden", "Parking", "Breakfast", "Spa"],
    description: "รีสอร์ทริมแม่น้ำเจ้าพระยา บรรยากาศเงียบสงบ ใกล้แหล่งประวัติศาสตร์โบราณสถาน",
  },
];

/**
 * แปลงชื่อโรงแรมเป็น URL-friendly slug
 */
export function generateHotelSlug(hotel: Hotel): string {
  const slug = hotel.name
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // ลบอักขระพิเศษ
    .replace(/\s+/g, "-") // แปลงช่องว่างเป็น dash
    .replace(/--+/g, "-") // ลบ dash ซ้ำ
    .trim();

  return `${slug}-${hotel.id}`;
}

/**
 * แยก ID จาก slug
 */
export function extractIdFromSlug(slug: string): number | null {
  const parts = slug.split("-");
  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart, 10);

  return isNaN(id) ? null : id;
}

/**
 * ค้นหาโรงแรมจาก slug
 */
export async function getHotelBySlug(slug: string): Promise<Hotel | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const id = extractIdFromSlug(slug);
  if (!id) return null;

  const hotel = mockHotels.find((h) => h.id === id);
  if (!hotel) return null;

  // ตรวจสอบว่า slug ที่ส่งมาตรงกับ slug ที่ถูกต้องหรือไม่
  const correctSlug = generateHotelSlug(hotel);
  if (slug !== correctSlug) {
    // ในกรณีนี้เราอาจจะ redirect ไปยัง URL ที่ถูกต้อง
    // แต่สำหรับตอนนี้เราจะ return hotel ปกติ
  }

  return hotel;
}

/**
 * ดึงโรงแรมทั้งหมด
 */
export async function getAllHotels(): Promise<Hotel[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockHotels;
}

/**
 * ดึงโรงแรมแนะนำ (สำหรับหน้าแรก)
 */
export async function getFeaturedHotels(limit: number = 4): Promise<Hotel[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockHotels.slice(0, limit);
}

/**
 * ค้นหาโรงแรมตามเงื่อนไข
 */
export async function searchHotels(query: { destination?: string; priceRange?: [number, number]; rating?: number }): Promise<Hotel[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filtered = mockHotels;

  if (query.destination) {
    filtered = filtered.filter((hotel) => hotel.location.toLowerCase().includes(query.destination!.toLowerCase()) || hotel.name.toLowerCase().includes(query.destination!.toLowerCase()));
  }

  if (query.priceRange) {
    filtered = filtered.filter((hotel) => {
      const price = parseInt(hotel.price.replace("฿", "").replace(",", ""));
      return price >= query.priceRange![0] && price <= query.priceRange![1];
    });
  }

  if (query.rating) {
    filtered = filtered.filter((hotel) => hotel.rating >= query.rating!);
  }

  return filtered;
}

/**
 * ดึงโรงแรมที่เกี่ยวข้อง (สำหรับแนะนำในหน้ารายละเอียด)
 */
export async function getRelatedHotels(hotelId: number, limit: number = 3): Promise<Hotel[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const currentHotel = mockHotels.find((h) => h.id === hotelId);
  if (!currentHotel) return [];

  // ค้นหาโรงแรมในพื้นที่เดียวกัน หรือราคาใกล้เคียง
  const related = mockHotels
    .filter((h) => h.id !== hotelId)
    .filter((h) => {
      const sameLocation = h.location === currentHotel.location;
      const currentPrice = parseInt(currentHotel.price.replace("฿", "").replace(",", ""));
      const hotelPrice = parseInt(h.price.replace("฿", "").replace(",", ""));
      const similarPrice = Math.abs(currentPrice - hotelPrice) <= 1000;

      return sameLocation || similarPrice;
    })
    .slice(0, limit);

  return related;
}
