import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex items-center space-x-1 text-sm text-gray-500">
        <li>
          <Link href="/" className="flex items-center hover:text-blue-600 transition-colors" aria-label="หน้าแรก">
            <Home className="w-4 h-4" />
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            {item.href && !item.isCurrentPage ? (
              <Link href={item.href} className="hover:text-blue-600 transition-colors truncate max-w-40" title={item.label}>
                {item.label}
              </Link>
            ) : (
              <span className={cn("truncate max-w-40", item.isCurrentPage ? "text-gray-900 font-medium" : "text-gray-500")} title={item.label} aria-current={item.isCurrentPage ? "page" : undefined}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
