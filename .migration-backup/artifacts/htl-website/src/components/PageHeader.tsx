import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

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
    <div className="bg-[#080C14] text-white pt-40 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-8 text-[220px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF]/30 to-transparent bg-clip-text text-transparent select-none pointer-events-none">"</div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-6 flex gap-2 items-center">
           {breadcrumbs.length > 0 && (
             <span className="inline-block bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
               {breadcrumbs[breadcrumbs.length-1].label}
             </span>
           )}
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4">{title}</h1>
        {description && <p className="text-xl text-blue-200 max-w-2xl">{description}</p>}
      </div>
    </div>
  );
}
