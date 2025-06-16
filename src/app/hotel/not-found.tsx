"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft, MapPin, Building2, Phone, Mail } from "lucide-react";
import { Motion } from "@/components/common/Motion";

export default function HotelNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <Motion animate="scaleIn" delay={100}>
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text mb-4">404</div>
            <div className="flex justify-center items-center gap-4 mb-6">
              <Building2 className="w-12 h-12 text-blue-500 animate-bounce" style={{ animationDelay: "0s" }} />
              <Building2 className="w-8 h-8 text-cyan-500 animate-bounce" style={{ animationDelay: "0.2s" }} />
              <Building2 className="w-12 h-12 text-blue-400 animate-bounce" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        </Motion>

        {/* Error Message */}
        <Motion animate="slideUp" delay={300}>
          <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ไม่พบโรงแรมที่คุณค้นหา</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ขออภัย โรงแรมที่คุณต้องการอาจถูกลบ หรือ URL ไม่ถูกต้อง
                <br />
                ลองค้นหาโรงแรมอื่นหรือกลับไปหน้าแรกเพื่อเริ่มต้นใหม่
              </p>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Motion whileHover="scale" transition="spring">
                  <Link href="/">
                    <Button variant="outline" className="w-full h-16 flex flex-col gap-2">
                      <Home className="w-5 h-5" />
                      <span className="text-sm">หน้าแรก</span>
                    </Button>
                  </Link>
                </Motion>

                <Motion whileHover="scale" transition="spring">
                  <Link href="/hotels">
                    <Button variant="outline" className="w-full h-16 flex flex-col gap-2">
                      <Search className="w-5 h-5" />
                      <span className="text-sm">ค้นหาโรงแรม</span>
                    </Button>
                  </Link>
                </Motion>

                <Motion whileHover="scale" transition="spring">
                  <Button variant="outline" className="w-full h-16 flex flex-col gap-2" onClick={() => window.history.back()}>
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm">กลับหน้าก่อน</span>
                  </Button>
                </Motion>
              </div>

              {/* Primary Action */}
              <Motion whileHover="scale" whileTap="shrink" transition="spring">
                <Link href="/">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-medium">
                    เริ่มค้นหาโรงแรม
                  </Button>
                </Link>
              </Motion>
            </CardContent>
          </Card>
        </Motion>

        {/* Help Section */}
        <Motion animate="fadeIn" delay={500}>
          <Card className="border-0 shadow-lg bg-blue-50/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ต้องการความช่วยเหลือ?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>โทร: 02-123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>อีเมล: support@hotelbook.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Motion>

        {/* Popular Destinations */}
        <Motion animate="slideUp" delay={600}>
          <div className="mt-8 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">จุดหมายยอดนิยม</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "กรุงเทพฯ", icon: "🏙️" },
                { name: "ภูเก็ต", icon: "🏖️" },
                { name: "เชียงใหม่", icon: "🏔️" },
                { name: "เกาะสมุย", icon: "🌴" },
              ].map((destination) => (
                <Motion key={destination.name} whileHover="lift" transition="spring">
                  <Link href={`/hotels?destination=${destination.name}`}>
                    <Card className="cursor-pointer hover:shadow-md transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl mb-2">{destination.icon}</div>
                        <div className="text-sm font-medium text-gray-700">{destination.name}</div>
                      </CardContent>
                    </Card>
                  </Link>
                </Motion>
              ))}
            </div>
          </div>
        </Motion>

        {/* Fun Animation Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <Motion animate="float" className="absolute top-20 left-10 text-blue-200">
            <Building2 className="w-16 h-16" />
          </Motion>
          <Motion animate="float-delayed" className="absolute top-40 right-20 text-cyan-200">
            <MapPin className="w-12 h-12" />
          </Motion>
          <Motion animate="float-slow" className="absolute bottom-40 left-1/4 text-blue-300">
            <Search className="w-14 h-14" />
          </Motion>
        </div>
      </div>
    </div>
  );
}
