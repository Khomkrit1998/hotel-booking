"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Motion, StaggerContainer } from "@/components/common/Motion"

export default function DemoMotion() {
  const [count, setCount] = useState(0);

  // const cardData = [
  //   { title: "Slide Up Animation", description: "เคลื่อนไหวจากล่างขึ้นบน" },
  //   { title: "Slide Left Animation", description: "เคลื่อนไหวจากซ้ายไปขวา" },
  //   { title: "Scale Animation", description: "เคลื่อนไหวแบบขยาย-หดตัว" },
  //   { title: "Rotate Animation", description: "เคลื่อนไหวแบบหมุน" },
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
      {/* Hero Section */}
      <Motion initial="fadeIn" animate="fadeIn" transition="smooth" className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Framer Motion Alternative</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">สร้าง animations ที่สวยงามด้วย CSS และ JavaScript โดยไม่ต้องใช้ Framer Motion</p>
      </Motion>

      {/* Interactive Counter */}
      <Motion animate="scaleIn" delay={300} className="text-center mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-4">Interactive Counter</h3>
          <div className="text-4xl font-bold text-blue-600 mb-4">{count}</div>
          <div className="space-x-4">
            <Motion whileHover="scale" whileTap="shrink" transition="spring">
              <Button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-600">
                เพิ่ม +
              </Button>
            </Motion>
            <Motion whileHover="scale" whileTap="shrink" transition="spring">
              <Button onClick={() => setCount(Math.max(0, count - 1))} variant="outline">
                ลด -
              </Button>
            </Motion>
          </div>
        </div>
      </Motion>

      {/* Animation Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Motion animate="slideUp" delay={100} whileHover="lift" transition="spring">
          <Card className="h-full cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">Slide Up</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Animation จากล่างขึ้นบน</p>
            </CardContent>
          </Card>
        </Motion>

        <Motion animate="slideLeft" delay={200} whileHover="scale" transition="bounce">
          <Card className="h-full cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">Slide Left</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Animation จากซ้ายไปขวา</p>
            </CardContent>
          </Card>
        </Motion>

        <Motion animate="scaleIn" delay={300} whileHover="rotate" transition="smooth">
          <Card className="h-full cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">Scale In</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Animation แบบขยายตัว</p>
            </CardContent>
          </Card>
        </Motion>

        <Motion animate="rotateIn" delay={400} whileHover="glow" transition="spring">
          <Card className="h-full cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">Rotate In</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Animation แบบหมุน</p>
            </CardContent>
          </Card>
        </Motion>
      </div>

      {/* Stagger Animation */}
      <Motion animate="fadeIn" delay={500}>
        <h2 className="text-3xl font-bold text-center mb-8">Stagger Animation</h2>
      </Motion>

      <StaggerContainer>
        {[1, 2, 3, 4, 5].map((num) => (
          <Motion key={num} whileHover="scale" transition="spring">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Item {num}</h3>
              <p className="text-gray-600">รายการที่ {num} จะแสดงผลทีละตัวด้วย stagger effect</p>
            </div>
          </Motion>
        ))}
      </StaggerContainer>

      {/* Floating Action Button */}
      <Motion animate="scaleIn" delay={1000} whileHover="scale" whileTap="shrink" transition="spring" className="fixed bottom-8 right-8">
        <Button size="lg" className="rounded-full w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-2xl" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </Button>
      </Motion>

      <style jsx global>{`
        /* Custom Easing Functions */
        .ease-spring {
          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .ease-bounce {
          transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* Custom Animation Keyframes */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: rotate(0deg);
          }
        }

        /* Hover Effects */
        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .hover-rotate:hover {
          transform: rotate(3deg);
        }

        .hover-glow:hover {
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
}
