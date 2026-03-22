import React from "react";
import {
  Search,
  Play,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  FileText,
  BarChart3,
  Users,
  ShieldAlert,
  FileCheck2,
  Star,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
} from "lucide-react";

const Testimonialsection = () => {
  return (
    <section className="py-24 px-8 bg-white text-center">
      <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-4">
        Client Testimonials
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        What Our Clients Say
      </h2>

      <div className="max-w-4xl mx-auto bg-slate-50 p-10 md:p-14 rounded-3xl shadow-sm border border-slate-100 text-left relative">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0 shadow-lg shadow-blue-500/30">
            SM
          </div>
          <div>
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed italic mb-8">
              "NexGHealth has completely transformed our revenue cycle
              operations. We went from a 78% first-pass acceptance rate to over
              98% within just 6 months. The AI-powered denial prevention alone
              has saved us over $2 million annually. I can't imagine going back
              to our old system."
            </p>
            <div>
              <div className="font-bold text-slate-900">Dr. Sarah Mitchell</div>
              <div className="text-slate-500 text-sm">
                CFO at Ascension Health — Regional Medical Center
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                + Revenue +20%
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                + 98% Clean Rate
              </span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full">
                - 4 Hours/ ROI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonialsection;
