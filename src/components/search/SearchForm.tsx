'use client'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarDays, MapPin } from "lucide-react";
import { SearchFormData } from "@/types/hotel";

interface SearchFormProps {
  onSearch?: (data: SearchFormData) => void;
  className?: string;
}

export function SearchForm({ onSearch, className = "" }: SearchFormProps) {
  const [formData, setFormData] = useState<SearchFormData>({
    destination: "",
    checkinDate: "",
    checkoutDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(formData);
  };

  return (
    <Card className={`max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border-0 shadow-2xl shadow-blue-500/10 ${className}`}>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-sm font-medium text-gray-700">
                ปลายทาง
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="destination"
                  placeholder="กรุงเทพฯ, ภูเก็ต..."
                  value={formData.destination}
                  onChange={(e) => setFormData((prev) => ({ ...prev, destination: e.target.value }))}
                  className="pl-10 h-12 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkin" className="text-sm font-medium text-gray-700">
                เช็คอิน
              </Label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="checkin" type="date" value={formData.checkinDate} onChange={(e) => setFormData((prev) => ({ ...prev, checkinDate: e.target.value }))} className="pl-10 h-12 border-gray-200 focus:border-blue-400 focus:ring-blue-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkout" className="text-sm font-medium text-gray-700">
                เช็คเอาท์
              </Label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="checkout" type="date" value={formData.checkoutDate} onChange={(e) => setFormData((prev) => ({ ...prev, checkoutDate: e.target.value }))} className="pl-10 h-12 border-gray-200 focus:border-blue-400 focus:ring-blue-400" />
              </div>
            </div>

            <div className="flex items-end">
              <Button type="submit" size="lg" className="w-full h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300">
                ค้นหาโรงแรม
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
