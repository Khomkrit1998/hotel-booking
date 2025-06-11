import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HotelCard } from "@/components/hotel/HotelCard";
import { Hotel } from "@/types/hotel";

interface FeaturedHotelsSectionProps {
  hotels: Hotel[];
  title?: string;
  subtitle?: string;
  onViewAll?: () => void;
  onBookNow?: (hotel: Hotel) => void;
  className?: string;
}

export function FeaturedHotelsSection({ hotels, title = "โรงแรมยอดนิยม", subtitle = "ค้นพบโรงแรมคุณภาพระดับโลกที่ได้รับการคัดสรรมาเป็นพิเศษสำหรับคุณ", onViewAll, onBookNow, className = "" }: FeaturedHotelsSectionProps) {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-600 hover:bg-blue-100">โรงแรมแนะนำ</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} onBookNow={onBookNow} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={onViewAll} variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300">
            ดูโรงแรมทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
}
