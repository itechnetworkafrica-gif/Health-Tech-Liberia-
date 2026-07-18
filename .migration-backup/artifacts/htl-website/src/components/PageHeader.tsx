import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";

export function PageHeader({ 
  title, 
  description, 
  breadcrumbs 
}: { 
  title: string; 
  description?: string;
  breadcrumbs: { label: string; href: string }[];
}) {
  return (
    <div className="relative bg-accent pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px]" />
        <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-secondary/5 rounded-tr-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              {index === breadcrumbs.length - 1 ? (
                <span className="text-primary">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4 max-w-3xl">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
