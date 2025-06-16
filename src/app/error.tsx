"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, RefreshCw, AlertTriangle, Bug, Wifi, Server } from "lucide-react";
import { Motion } from "@/components/common/Motion";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error);
  }, [error]);

  const getErrorType = () => {
    if (error.message.includes("fetch") || error.message.includes("network")) {
      return {
        icon: <Wifi className="w-12 h-12 text-orange-500" />,
        title: "ปัญหาการเชื่อมต่อ",
        description: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต",
        bgColor: "from-orange-50 to-red-50",
      };
    }

    if (error.message.includes("server") || error.message.includes("500")) {
      return {
        icon: <Server className="w-12 h-12 text-red-500" />,
        title: "ปัญหาเซิร์ฟเวอร์",
        description: "เซิร์ฟเวอร์กำลังมีปัญหา ทีมงานกำลังแก้ไขอยู่",
        bgColor: "from-red-50 to-pink-50",
      };
    }

    return {
      icon: <Bug className="w-12 h-12 text-purple-500" />,
      title: "เกิดข้อผิดพลาดที่ไม่คาดคิด",
      description: "มีบางอย่างผิดปกติ กรุณาลองใหม่อีกครั้ง",
      bgColor: "from-purple-50 to-blue-50",
    };
  };

  const errorInfo = getErrorType();

  return (
    <div className={`min-h-screen bg-gradient-to-br ${errorInfo.bgColor} flex items-center justify-center px-4`}>
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <Motion animate="scaleIn" delay={100}>
          <div className="mb-8">
            <div className="relative inline-block">
              {errorInfo.icon}
              <div className="absolute -top-2 -right-2">
                <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
              </div>
            </div>
          </div>
        </Motion>

        {/* Error Message */}
        <Motion animate="slideUp" delay={300}>
          <Card className="mb-8 border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{errorInfo.title}</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{errorInfo.description}</p>

              {/* Error Details (for development) */}
              {process.env.NODE_ENV === "development" && (
                <details className="mb-6 text-left">
                  <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 mb-2">รายละเอียดข้อผิดพลาด (Development)</summary>
                  <div className="bg-gray-100 p-4 rounded-md text-xs font-mono text-gray-700 overflow-auto">
                    <div className="mb-2">
                      <strong>Error:</strong> {error.message}
                    </div>
                    {error.digest && (
                      <div className="mb-2">
                        <strong>Digest:</strong> {error.digest}
                      </div>
                    )}
                    {error.stack && (
                      <div>
                        <strong>Stack:</strong>
                        <pre className="whitespace-pre-wrap mt-1">{error.stack}</pre>
                      </div>
                    )}
                  </div>
                </details>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Motion whileHover="scale" transition="spring">
                  <Button onClick={reset} className="w-full h-16 flex flex-col gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                    <RefreshCw className="w-5 h-5" />
                    <span>ลองใหม่อีกครั้ง</span>
                  </Button>
                </Motion>

                <Motion whileHover="scale" transition="spring">
                  <Button variant="outline" onClick={() => (window.location.href = "/")} className="w-full h-16 flex flex-col gap-2 hover:border-blue-400 hover:text-blue-600">
                    <Home className="w-5 h-5" />
                    <span>กลับหน้าแรก</span>
                  </Button>
                </Motion>
              </div>

              {/* Quick Solutions */}
              <div className="text-sm text-gray-600">
                <h3 className="font-semibold mb-2">สิ่งที่คุณสามารถลองทำได้:</h3>
                <ul className="list-disc list-inside space-y-1 text-left max-w-md mx-auto">
                  <li>รีเฟรชหน้าเว็บ (F5 หรือ Ctrl+R)</li>
                  <li>ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต</li>
                  <li>ลองอีกครั้งในอีกสักครู่</li>
                  <li>ล้างแคชของเบราว์เซอร์</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </Motion>

        {/* Contact Support */}
        <Motion animate="fadeIn" delay={500}>
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ยังมีปัญหาอยู่ใช่ไหม?</h3>
              <p className="text-sm text-gray-600 mb-4">หากปัญหายังคงอยู่ กรุณาติดต่อทีมสนับสนุนของเรา</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2 p-3 bg-blue-50 rounded-lg">
                  <span>📞</span>
                  <span>โทร: 02-123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 bg-blue-50 rounded-lg">
                  <span>✉️</span>
                  <span>อีเมล: support@hotelbook.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Motion>

        {/* Error ID for tracking */}
        {error.digest && (
          <Motion animate="fadeIn" delay={700}>
            <div className="mt-4 text-xs text-gray-400">Error ID: {error.digest}</div>
          </Motion>
        )}

        {/* Background animation */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <Motion animate="float" className="absolute top-1/4 left-16 opacity-30">
            <div className="w-24 h-24 bg-gradient-to-r from-red-200 to-orange-200 rounded-full blur-xl"></div>
          </Motion>
          <Motion animate="float-delayed" className="absolute bottom-1/3 right-20 opacity-30">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-xl"></div>
          </Motion>
          <Motion animate="float-slow" className="absolute top-1/2 left-1/3 opacity-30">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-xl"></div>
          </Motion>
        </div>
      </div>
    </div>
  );
}
