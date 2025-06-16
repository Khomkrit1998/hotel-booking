"use client";

import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Wifi, Car, Coffee, Utensils, Users, Phone, Mail, Calendar, Clock, Heart, ArrowLeft } from "lucide-react";
import { Hotel } from "@/types/hotel";
import { Motion } from "@/components/common/Motion";
import { HotelCard } from "@/components/hotel/HotelCard";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { getHotelBySlug, getRelatedHotels, HotelNotFoundError, InvalidSlugError } from "@/lib/hotel-utils";

// Updated interface for Next.js 15+ params as Promise
interface HotelDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function HotelDetailPage({ params }: HotelDetailPageProps) {
  // Unwrap params Promise using React.use() - New Next.js 15+ requirement
  const { id } = use(params);

  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [relatedHotels, setRelatedHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const hotelData = await getHotelBySlug(id);

        setHotel(hotelData);

        // ดึงโรงแรมที่เกี่ยวข้อง
        if (hotelData) {
          const related = await getRelatedHotels(hotelData.id);
          setRelatedHotels(related);
        }
      } catch (error) {
        console.error("Error fetching hotel:", error);

        if (error instanceof HotelNotFoundError || error instanceof InvalidSlugError) {
          // For these specific errors, trigger not-found page
          notFound();
        } else {
          // For other errors, you might want to show an error page
          // or handle them differently
          console.error("Unexpected error:", error);
          notFound(); // For now, treat all errors as not found
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]); // Updated dependency to use unwrapped id

  const getAmenityIcon = (amenity: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Wifi: <Wifi className="w-5 h-5" />,
      Pool: <div className="w-5 h-5 rounded-full bg-blue-400"></div>,
      Restaurant: <Utensils className="w-5 h-5" />,
      Parking: <Car className="w-5 h-5" />,
      Breakfast: <Coffee className="w-5 h-5" />,
      Spa: <div className="w-5 h-5 rounded bg-green-400"></div>,
      Garden: <div className="w-5 h-5 rounded bg-green-500"></div>,
      Gym: <div className="w-5 h-5 rounded bg-orange-400"></div>,
      Rooftop: <div className="w-5 h-5 rounded bg-purple-400"></div>,
      "Private Beach": <div className="w-5 h-5 rounded bg-blue-500"></div>,
      Butler: <Users className="w-5 h-5" />,
    };
    return icons[amenity] || <div className="w-5 h-5 rounded bg-gray-400"></div>;
  };

  const handleBooking = () => {
    alert(`จองโรงแรม: ${hotel?.name}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!hotel) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Back Button and Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Motion animate="slideLeft" delay={100}>
          <Button variant="ghost" className="mb-4" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับ
          </Button>
        </Motion>

        <Motion animate="slideUp" delay={200}>
          <Breadcrumb className="mb-4" items={[{ label: "โรงแรม", href: "/hotels" }, { label: hotel.location.split(",")[0].trim() }, { label: hotel.name, isCurrentPage: true }]} />
        </Motion>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image src={hotel.image} alt={hotel.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <Motion animate="slideUp" className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30">ราคาพิเศษ</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{hotel.rating}</span>
                  <span className="text-white/80">({hotel.reviews} รีวิว)</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{hotel.name}</h1>
              <div className="flex items-center text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                {hotel.location}
              </div>
            </Motion>
          </div>
        </div>

        {/* Floating Action Button */}
        <Motion animate="scaleIn" delay={500} whileHover="scale" transition="spring" className="absolute top-4 right-4">
          <Button variant="outline" size="icon" className="bg-white/90 hover:bg-white border-0 shadow-lg" onClick={() => setIsLiked(!isLiked)}>
            <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </Button>
        </Motion>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Motion animate="slideUp" delay={200}>
              <Card>
                <CardHeader>
                  <CardTitle>เกี่ยวกับโรงแรม</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {hotel.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </CardContent>
              </Card>
            </Motion>

            {/* Amenities */}
            <Motion animate="slideUp" delay={300}>
              <Card>
                <CardHeader>
                  <CardTitle>สิ่งอำนวยความสะดวก</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {hotel.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        {getAmenityIcon(amenity)}
                        <span className="font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Motion>

            {/* Contact Information */}
            <Motion animate="slideUp" delay={400}>
              <Card>
                <CardHeader>
                  <CardTitle>ข้อมูลติดต่อ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <span>+66 12 345 6789</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span>info@{hotel.name.toLowerCase().replace(/\s+/g, "")}.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span>เช็คอิน: 14:00 | เช็คเอาท์: 12:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Motion>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Motion animate="slideUp" delay={500}>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-center">
                    <span className="text-3xl font-bold text-blue-600">{hotel.price}</span>
                    <span className="text-gray-500 ml-2">/คืน</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">เช็คอิน</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input type="date" className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">เช็คเอาท์</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input type="date" className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">จำนวนผู้เข้าพัก</label>
                    <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400">
                      <option>1 ผู้ใหญ่</option>
                      <option>2 ผู้ใหญ่</option>
                      <option>3 ผู้ใหญ่</option>
                      <option>4 ผู้ใหญ่</option>
                    </select>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>ราคาต่อคืน</span>
                      <span>{hotel.price}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>ค่าบริการ</span>
                      <span>฿200</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>รวมทั้งหมด</span>
                      <span className="text-blue-600">฿{parseInt(hotel.price.replace("฿", "").replace(",", "")) + 200}</span>
                    </div>
                  </div>

                  <Button onClick={handleBooking} className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-3">
                    จองตอนนี้
                  </Button>

                  <p className="text-xs text-gray-500 text-center">สามารถยกเลิกได้ฟรีใน 24 ชั่วโมง</p>
                </CardContent>
              </Card>
            </Motion>
          </div>
        </div>

        {/* Related Hotels Section */}
        {relatedHotels.length > 0 && (
          <div className="mt-16">
            <Motion animate="slideUp" delay={600}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">โรงแรมที่คุณอาจสนใจ</h2>
            </Motion>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedHotels.map((relatedHotel, index) => (
                <Motion key={relatedHotel.id} animate="slideUp" delay={700 + index * 100}>
                  <HotelCard hotel={relatedHotel} variant="compact" onBookNow={(hotel) => alert(`จองโรงแรม: ${hotel.name}`)} />
                </Motion>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
