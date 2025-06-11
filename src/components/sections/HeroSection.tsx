"use client";

import { SearchForm } from "@/components/search/SearchForm";
import { StatsSection } from "./StatsSection";
import { SearchFormData } from "@/types/hotel";
import { Motion } from "../common/Motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  onSearch?: (data: SearchFormData) => void;
  className?: string;
}

export function HeroSection({ title = "ค้นพบโรงแรม", subtitle = "จองโรงแรมคุณภาพระดับโลกด้วยราคาพิเศษ พร้อมบริการดีเยี่ยมและประสบการณ์ที่น่าจดจำ", onSearch, className = "" }: HeroSectionProps) {
  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Main Background Gradient with Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100"></div>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 40%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
            linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(14, 165, 233, 0.08) 50%, rgba(99, 102, 241, 0.06) 100%)
          `,
        }}
      ></div>

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30 animate-pulse" style={{ animationDuration: "8s" }}>
        <div
          className="w-full h-full"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                rgba(59, 130, 246, 0.1) 0deg, 
                rgba(14, 165, 233, 0.05) 60deg, 
                rgba(99, 102, 241, 0.08) 120deg, 
                rgba(59, 130, 246, 0.06) 180deg, 
                rgba(14, 165, 233, 0.1) 240deg, 
                rgba(99, 102, 241, 0.05) 300deg, 
                rgba(59, 130, 246, 0.1) 360deg
              )
            `,
          }}
        ></div>
      </div>

      {/* Floating Orbs with Glassmorphism */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-blue-400 to-cyan-300 animate-float"></div>
      <div className="absolute top-32 right-16 w-96 h-96 rounded-full blur-3xl opacity-15 bg-gradient-to-r from-indigo-400 to-blue-300 animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-25 bg-gradient-to-r from-cyan-300 to-blue-400 animate-float-slow"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full blur-2xl opacity-30 bg-gradient-to-r from-blue-300 to-indigo-300 animate-float-reverse"></div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%233b82f6' fillOpacity='0.4'%3E%3Cpath d='M50 50m-4 0a4 4 0 1 1 8 0a4 4 0 1 1 -8 0'/%3E%3Cpath d='M50 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1 -4 0'/%3E%3Cpath d='M50 70m-2 0a2 2 0 1 1 4 0a2 2 0 1 1 -4 0'/%3E%3Cpath d='M30 50m-2 0a2 2 0 1 1 4 0a2 2 0 1 1 -4 0'/%3E%3Cpath d='M70 50m-2 0a2 2 0 1 1 4 0a2 2 0 1 1 -4 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(14, 165, 233)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(14, 165, 233)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(14, 165, 233)" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path d="M0,200 Q300,100 600,150 T1200,100" stroke="url(#line1)" strokeWidth="2" fill="none" className="animate-draw-line" />
          <path d="M0,300 Q400,200 800,250 T1200,200" stroke="url(#line2)" strokeWidth="1.5" fill="none" className="animate-draw-line-delayed" />
        </svg>
      </div>

      {/* Particle Effects */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-indigo-400 rounded-full animate-ping opacity-40" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping opacity-70" style={{ animationDelay: "0.5s" }}></div>

      {/* Glass Morphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-[0.5px] bg-white/5"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) rotate(120deg);
          }
          66% {
            transform: translateY(15px) rotate(240deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(20px) rotate(-120deg);
          }
          66% {
            transform: translateY(-25px) rotate(-240deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(360deg);
          }
          50% {
            transform: translateY(30px) rotate(180deg);
          }
        }

        @keyframes draw-line {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        @keyframes draw-line-delayed {
          0%,
          20% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 15s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 18s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-draw-line {
          animation: draw-line 8s ease-in-out infinite;
        }

        .animate-draw-line-delayed {
          animation: draw-line-delayed 10s ease-in-out infinite;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion initial="fadeIn" animate="fadeIn" transition="smooth">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">{title}</span>
              <br />
              <span className="text-gray-800">ในฝันของคุณ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
          </div>
        </Motion>

        <Motion animate="scaleIn" delay={300}>
          <SearchForm onSearch={onSearch} />
        </Motion>

        <Motion animate="slideUp" delay={100} whileHover="lift" transition="spring">
          <StatsSection />
        </Motion>
      </div>
    </section>
  );
}
