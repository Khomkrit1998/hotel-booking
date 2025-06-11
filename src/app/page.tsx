"use client";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedHotelsSection } from "@/components/sections/FeaturedHotelsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Footer } from "@/components/layout/Footer";
import { Hotel, SearchFormData } from "@/types/hotel";
import Preloader from "@/components/common/Preload";

export default function HotelLandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);

  // Simulate loading time and preload assets
  useEffect(() => {
    const preloadAssets = async () => {
      // Preload images
      const imageUrls = [
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop",
      ];

      const preloadPromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      });

      try {
        await Promise.all(preloadPromises);
      } catch (error) {
        console.log("Some images failed to preload:", error);
      }

      // Minimum loading time for smooth UX
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);
      setTimeout(() => setIsPageReady(true), 100);
    };

    preloadAssets();
  }, []);

  // Mock data สำหรับโรงแรมแนะนำ
  const featuredHotels: Hotel[] = [
    {
      id: 1,
      name: "Luxury Beach Resort Phuket",
      location: "ภูเก็ต, ประเทศไทย",
      price: "฿3,500",
      rating: 4.8,
      reviews: 1254,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop",
      amenities: ["Wifi", "Pool", "Restaurant", "Parking"],
      description: "รีสอร์ทหรูหราริมชายหาดพร้อมวิวทะเลสุดงาม",
    },
    {
      id: 2,
      name: "Mountain View Hotel Chiang Mai",
      location: "เชียงใหม่, ประเทศไทย",
      price: "฿2,200",
      rating: 4.6,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=250&fit=crop",
      amenities: ["Wifi", "Breakfast", "Spa", "Garden"],
      description: "โรงแรมแนวบูติกท่ามกลางธรรมชาติ",
    },
    {
      id: 3,
      name: "Urban Style Hotel Bangkok",
      location: "กรุงเทพฯ, ประเทศไทย",
      price: "฿1,800",
      rating: 4.7,
      reviews: 2156,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
      amenities: ["Wifi", "Gym", "Rooftop", "Restaurant"],
      description: "โรงแรมสไตล์โมเดิร์นใจกลางเมือง",
    },
    {
      id: 4,
      name: "Beachfront Villa Koh Samui",
      location: "เกาะสมุย, ประเทศไทย",
      price: "฿4,200",
      rating: 4.9,
      reviews: 687,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop",
      amenities: ["Private Beach", "Pool", "Spa", "Butler"],
      description: "วิลล่าส่วนตัวหรูหราริมทะเล",
    },
  ];

  // Event Handlers
  const handleSearch = (data: SearchFormData) => {
    console.log("Search data:", data);
    // TODO: Implement search functionality
    alert(`ค้นหาโรงแรม:\nปลายทาง: ${data.destination}\nเช็คอิน: ${data.checkinDate}\nเช็คเอาท์: ${data.checkoutDate}`);
  };

  const handleBookNow = (hotel: Hotel) => {
    console.log("Book hotel:", hotel);
    // TODO: Navigate to booking page
    alert(`จองโรงแรม: ${hotel.name}`);
  };

  const handleViewAllHotels = () => {
    console.log("View all hotels");
    // TODO: Navigate to hotels listing page
    alert("ไปยังหน้ารายการโรงแรมทั้งหมด");
  };

  const handleNewsletterSubscribe = (email: string) => {
    console.log("Newsletter subscription:", email);
    // TODO: Implement newsletter subscription
    alert(`สมัครรับจดหมายข่าวด้วยอีเมล: ${email}`);
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      <HeroSection onSearch={handleSearch} />

      <FeaturedHotelsSection hotels={featuredHotels} onBookNow={handleBookNow} onViewAll={handleViewAllHotels} />

      <NewsletterSection onSubscribe={handleNewsletterSubscribe} />

      <Footer />
    </div>
  );
}
