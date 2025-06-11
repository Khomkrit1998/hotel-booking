import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterSectionProps {
  title?: string;
  subtitle?: string;
  onSubscribe?: (email: string) => void;
  className?: string;
}

export function NewsletterSection({ title = "รับข้อเสนอพิเศษ", subtitle = "สมัครรับจดหมายข่าวและรับส่วนลดสูงสุด 30% สำหรับการจองครั้งแรก", onSubscribe, className = "" }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe?.(email);
      setEmail("");
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-r from-blue-500 to-cyan-500 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h3>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="อีเมลของคุณ" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white/90 border-0 h-12 flex-1" required />
          <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-50 h-12 px-8">
            สมัครเลย
          </Button>
        </form>
      </div>
    </section>
  );
}
