import { useState } from "react";
import { Button } from "@/components/ui/button";

// Desktop Navigation Component
function DesktopNavigation() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
        โรงแรม
      </a>
      <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
        เที่ยวบิน
      </a>
      <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
        แพ็คเกจ
      </a>
      <div className="hidden md:flex items-center space-x-3">
        <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
          เข้าสู่ระบบ
        </Button>
        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">สมัครสมาชิก</Button>
      </div>
    </div>
  );
}

// Mobile Menu Button Component
function MobileMenuButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <div className="md:hidden">
      <button
        onClick={onClick}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="sr-only">เปิดเมนูหลัก</span>
        {!isOpen ? (
          <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>
    </div>
  );
}

// Mobile Navigation Menu Component
function MobileNavigationMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-blue-100 shadow-lg">
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
          โรงแรม
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
          เที่ยวบิน
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
          แพ็คเกจ
        </a>

        {/* Mobile Buttons */}
        <div className="px-3 py-2 space-y-2">
          <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 justify-center">
            เข้าสู่ระบบ
          </Button>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 justify-center">สมัครสมาชิก</Button>
        </div>
      </div>
    </div>
  );
}

// Logo Component
function NavigationLogo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">H</span>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">HotelBook</span>
    </div>
  );
}

// Main Navigation Component
function Navigation({ className = "" }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavigationLogo />
          <DesktopNavigation />
          <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
        <MobileNavigationMenu isOpen={isMobileMenuOpen} />
      </div>
    </nav>
  );
}

export { Navigation };
