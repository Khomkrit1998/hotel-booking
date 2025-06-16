"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft, Compass, Star, MapPin } from "lucide-react";
import { Motion } from "@/components/common/Motion";

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 with floating elements */}
        <Motion animate="scaleIn" delay={100}>
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text mb-4">404</div>

            {/* Floating icons around 404 */}
            <div className="absolute inset-0 pointer-events-none">
              <Star className="absolute top-4 left-8 w-6 h-6 text-yellow-400 animate-pulse" />
              <Compass className="absolute top-12 right-12 w-8 h-8 text-blue-400 animate-spin" style={{ animationDuration: "4s" }} />
              <MapPin className="absolute bottom-8 left-16 w-5 h-5 text-red-400 animate-bounce" />
              <Search className="absolute bottom-4 right-8 w-7 h-7 text-green-400 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </Motion>

        {/* Main Error Message */}
        <Motion animate="slideUp" delay={300}>
          <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">หน้าที่คุณค้นหาไม่พบ</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ขออภัย เราไม่พบหน้าที่คุณต้องการ
                <br />
                หน้านี้อาจถูกย้าย ลบ หรือ URL ไม่ถูกต้อง
              </p>

              {/* Navigation Suggestions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Motion whileHover="scale" transition="spring">
                  <Link href="/">
                    <Button variant="outline" className="w-full h-16 flex flex-col gap-2 hover:border-blue-400 hover:text-blue-600">
                      <Home className="w-6 h-6" />
                      <span>กลับหน้าแรก</span>
                    </Button>
                  </Link>
                </Motion>

                <Motion whileHover="scale" transition="spring">
                  <Button variant="outline" className="w-full h-16 flex flex-col gap-2 hover:border-blue-400 hover:text-blue-600" onClick={() => window.history.back()}>
                    <ArrowLeft className="w-6 h-6" />
                    <span>กลับหน้าก่อน</span>
                  </Button>
                </Motion>
              </div>

              {/* Primary CTA */}
              <Motion whileHover="scale" whileTap="shrink" transition="spring">
                <Link href="/">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                    <Search className="w-5 h-5 mr-2" />
                    เริ่มค้นหาโรงแรม
                  </Button>
                </Link>
              </Motion>
            </CardContent>
          </Card>
        </Motion>

        {/* Quick Links */}
        <Motion animate="slideUp" delay={500}>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50/50 to-cyan-50/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">หน้าที่คุณอาจสนใจ</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "โรงแรมยอดนิยม", href: "/hotels/popular", emoji: "⭐" },
                  { label: "ข้อเสนอพิเศษ", href: "/deals", emoji: "🎯" },
                  { label: "บล็อก", href: "/blog", emoji: "📖" },
                  { label: "ติดต่อเรา", href: "/contact", emoji: "📞" },
                ].map((link, index) => (
                  <Motion key={link.label} whileHover="lift" transition="spring" delay={600 + index * 100}>
                    <Link href={link.href}>
                      <Card className="cursor-pointer hover:shadow-md transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm h-20">
                        <CardContent className="p-4 text-center h-full flex flex-col justify-center">
                          <div className="text-lg mb-1">{link.emoji}</div>
                          <div className="text-xs font-medium text-gray-700 leading-tight">{link.label}</div>
                        </CardContent>
                      </Card>
                    </Link>
                  </Motion>
                ))}
              </div>
            </CardContent>
          </Card>
        </Motion>

        {/* Fun fact or tip */}
        <Motion animate="fadeIn" delay={800}>
          <div className="mt-8 p-4 bg-blue-100/50 rounded-lg border border-blue-200/50">
            <p className="text-sm text-blue-700">
              💡 <strong>เคล็ดลับ:</strong> ลองตรวจสอบการสะกดของ URL หรือใช้แถบค้นหาเพื่อหาสิ่งที่คุณต้องการ
            </p>
          </div>
        </Motion>

        {/* Background decorative elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Floating shapes */}
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-16 w-24 h-24 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>
      </div>
    </div>
  );
}
