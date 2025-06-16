"use client";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedHotelsSection } from "@/components/sections/FeaturedHotelsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Footer } from "@/components/layout/Footer";
import { Hotel, SearchFormData } from "@/types/hotel";
import { getFeaturedHotels, generateHotelSlug } from "@/lib/hotel-utils";
import Preloader from "@/components/common/Preload";

export default function HotelLandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredHotels, setFeaturedHotels] = useState<Hotel[]>([]);

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

      // ดึงข้อมูลโรงแรมแนะนำ
      try {
        const hotels = await getFeaturedHotels(4);
        setFeaturedHotels(hotels);
      } catch (error) {
        console.error("Error fetching featured hotels:", error);
      }

      // Minimum loading time for smooth UX
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);
    };

    preloadAssets();
  }, []);

  // Event Handlers
  const handleSearch = (data: SearchFormData) => {
    console.log("Search data:", data);
    // TODO: Implement search functionality
    // ในอนาคตอาจจะ redirect ไปหน้า search results
    alert(`ค้นหาโรงแรม:\nปลายทาง: ${data.destination}\nเช็คอิน: ${data.checkinDate}\nเช็คเอาท์: ${data.checkoutDate}`);
  };

  const handleBookNow = (hotel: Hotel) => {
    console.log("Book hotel:", hotel);
    // TODO: Navigate to booking page หรือไปยังหน้ารายละเอียดโรงแรม
    const slug = generateHotelSlug(hotel);
    window.location.href = `/hotel/${slug}`;
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
