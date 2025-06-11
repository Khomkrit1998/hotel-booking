import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Wifi, Car, Coffee, Utensils, Users } from "lucide-react";
import { Hotel } from "@/types/hotel";
import { Motion } from "../common/Motion";

interface HotelCardProps {
  hotel: Hotel;
  onBookNow?: (hotel: Hotel) => void;
  className?: string;
}

export function HotelCard({ hotel, onBookNow, className = "" }: HotelCardProps) {
  const getAmenityIcon = (amenity: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Wifi: <Wifi className="w-4 h-4" />,
      Pool: <div className="w-4 h-4 rounded-full bg-blue-400"></div>,
      Restaurant: <Utensils className="w-4 h-4" />,
      Parking: <Car className="w-4 h-4" />,
      Breakfast: <Coffee className="w-4 h-4" />,
      Spa: <div className="w-4 h-4 rounded bg-green-400"></div>,
      Garden: <div className="w-4 h-4 rounded bg-green-500"></div>,
      Gym: <div className="w-4 h-4 rounded bg-orange-400"></div>,
      Rooftop: <div className="w-4 h-4 rounded bg-purple-400"></div>,
      "Private Beach": <div className="w-4 h-4 rounded bg-blue-500"></div>,
      Butler: <Users className="w-4 h-4" />,
    };
    return icons[amenity] || <div className="w-4 h-4 rounded bg-gray-400"></div>;
  };

  return (
    <Motion animate="scaleIn" delay={300} whileHover="rotate" transition="smooth">
      <Card className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${className}`}>
        <div className="relative overflow-hidden">
          <Image
            src={hotel.image}
            alt={hotel.name}
            width={800} // ปรับตามขนาดจริง
            height={320} // ปรับตามขนาดจริง
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/90 text-gray-800 hover:bg-white">ราคาพิเศษ</Badge>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{hotel.rating}</span>
            </div>
          </div>
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-lg line-clamp-1 group-hover:text-blue-600 transition-colors">{hotel.name}</CardTitle>
          <CardDescription className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            {hotel.location}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {hotel.amenities.slice(0, 3).map((amenity, index) => (
              <div key={index} className="flex items-center space-x-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                {getAmenityIcon(amenity)}
                <span>{amenity}</span>
              </div>
            ))}
            {hotel.amenities.length > 3 && <div className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">+{hotel.amenities.length - 3}</div>}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-blue-600">{hotel.price}</span>
              <span className="text-sm text-gray-500">/คืน</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">{hotel.reviews} รีวิว</div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-4">
          <Button onClick={() => onBookNow?.(hotel)} className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 group-hover:shadow-lg transition-all">
            ดูรายละเอียด
          </Button>
        </CardFooter>
      </Card>
    </Motion>
  );
}
