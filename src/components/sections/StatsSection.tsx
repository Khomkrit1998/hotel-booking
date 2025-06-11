interface StatItem {
  number: string;
  label: string;
}

interface StatsSectionProps {
  stats?: StatItem[];
  className?: string;
}

const defaultStats: StatItem[] = [
  { number: "10,000+", label: "โรงแรมทั่วโลก" },
  { number: "500,000+", label: "ลูกค้าพึงพอใจ" },
  { number: "150+", label: "ประเทศ" },
  { number: "24/7", label: "บริการช่วยเหลือ" },
];

export function StatsSection({ stats = defaultStats, className = "" }: StatsSectionProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
          <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
