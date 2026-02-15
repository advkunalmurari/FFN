import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added Loader2 to fix missing reference error
import { MapPin, Clock, DollarSign, ArrowRight, ShieldCheck, Briefcase, X, CheckCircle, Award, Sparkles, FileText, Send, User, Loader2 } from 'lucide-react';
import { UserRole } from '../types';

interface CastingItem {
  id: string;
  title: string;
  brand: string;
  location: string;
  budget: string;
  deadline: string;
  type: string;
  description: string;
  requirements: string[];
}

export const Castings: React.FC = () => {
  const [selectedCasting, setSelectedCasting] = useState<CastingItem | null>(null);
  const [isApplying, setIsApplying] = useState(false);

  const castings: CastingItem[] = [
    { 
      id: 'c1', 
      title: 'Paris Fashion Week Runway', 
      brand: 'Luxury Couture House', 
      location: 'Paris, FR', 
      budget: '€2,500', 
      deadline: '2d', 
      type: 'High Priority',
      description: 'Exclusive opportunity to walk for a major couture house during the upcoming Paris AW25 collection. We are seeking editorial models with strong presence and technical walk capability.',
      requirements: ['Min. Height: 5\'10"', 'Previous Runway Experience', 'Valid Travel Docs', 'Composite Card Ready']
    },
    { 
      id: 'c2', 
      title: 'Global Beauty Campaign', 
      brand: 'Cosmetix Int.', 
      location: 'New York, US', 
      budget: '$5,000', 
      deadline: '5d', 
      type: 'Featured',
      description: 'New skincare line campaign focusing on diverse skin textures and natural radiance. High-fidelity close-up photography required.',
      requirements: ['Clear Skin Texture', 'Diverse Ethos', 'Available for 2-day Shoot', 'No Competing Beauty Contracts']
    },
    { 
      id: 'c3', 
      title: 'Streetwear Lookbook Shoot', 
      brand: 'NEO-SEOUL', 
      location: 'Seoul, KR', 
      budget: '₩1,200k', 
      deadline: '1w', 
      type: 'Standard',
      description: 'Urban-inspired lookbook for upcoming streetwear drop. High energy, movement-focused photography.',
      requirements: ['Streetwear Aesthetic', 'Comfortable with Movement', 'Aged 18-24', 'Seoul Local Preferred']
    },
    { 
      id: 'c4', 
      title: 'Minimalist Model', 
      brand: 'AXIS Studio', 
      location: 'Berlin, DE', 
      budget: '€800', 
      deadline: '3d', 
      type: 'Verified Only',
      description: 'Studio-based lookbook for high-end minimalist furniture brand. Focus on clean lines and sculptural posing.',
      requirements: ['High-Contrast Features', 'FFN Verified Identity', 'Berlin-based', 'Minimalist Style']
    },
  ];

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplying(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsApplying(false);
    setSelectedCasting(null);
    alert("Application Successfully Dispatched to " + selectedCasting?.brand);
  };

  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-32">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 pb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-ffn-accent">
            <Briefcase className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Professional Opportunities</span>
          </div>
          <h1 className="text-6xl font-serif italic tracking-tighter text-ffn-black">Casting Board</h1>
        </div>
        <div className="flex gap-4">
           <button className="px-10 py-5 bg-ffn-black text-white rounded-[1.5rem] text-[9px] font-bold uppercase tracking-widest shadow-xl hover:bg-ffn-primary transition-all">Post a Listing</button>
        </div>
      </header>

      <div className="space-y-6">
        {castings.map((job, idx) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedCasting(job)}
            className="group bg-white rounded-[3rem] p-10 flex flex-col lg:flex-row items-center justify-between gap-10 border border-gray-50 shadow-lg hover:shadow-2xl transition-all hover:border-ffn-primary/20 cursor-pointer"
          >
            <div className="flex items-center space-x-10 w-full lg:w-auto">
               <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center text-gray-300 group-hover:bg-ffn-primary/5 group-hover:text-ffn-primary transition-colors">
                  <ShieldCheck className="w-8 h-8" />
               </div>
               <div className="space-y-2">
                 <div className="flex items-center space-x-4">
                   <h3 className="text-2xl font-serif italic text-ffn-black leading-none">{job.title}</h3>
                   <span className={`text-[8px] px-3 py-1 rounded-full font-bold uppercase tracking-widest ${job.type === 'High Priority' ? 'bg-ffn-accent/10 text-ffn-accent' : 'bg-gray-100 text-gray-400'}`}>{job.type}</span>
                 </div>
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ffn-primary">{job.brand}</p>
               </div>
            </div>

            <div className="flex flex-wrap items-center gap-12 w-full lg:w-auto">
               <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{job.location}</span>
               </div>
               <div className="flex items-center space-x-3 text-ffn-black">
                  <DollarSign className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{job.budget}</span>
               </div>
               <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Deadline: {job.deadline}</span>
               </div>
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              className="w-full lg:w-auto px-10 py-5 bg-gray-50 group-hover:bg-ffn-black group-hover:text-white rounded-2xl text-[9px] font-bold uppercase tracking-[0.3em] flex items-center justify-center space-x-3 transition-all"
            >
              <span>Apply Protocol</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Casting Detail Modal */}
      <AnimatePresence>
        {selectedCasting && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-ffn-black/80 backdrop-blur-xl">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="bg-white w-full max-w-4xl h-[90vh] rounded-[4rem] overflow-hidden relative shadow-2xl flex flex-col border border-white/20"
            >
              <button 
                onClick={() => setSelectedCasting(null)} 
                className="absolute top-10 right-10 z-50 p-4 bg-gray-50 rounded-2xl hover:bg-ffn-black hover:text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-12 lg:p-20 overflow-y-auto no-scrollbar flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                  <div className="lg:col-span-7 space-y-16">
                     <div className="space-y-8">
                       <div className="flex items-center space-x-4 text-ffn-primary">
                          <Sparkles className="w-6 h-6" />
                          <span className="text-[10px] font-black uppercase tracking-[0.5em]">Identity Required Casting</span>
                       </div>
                       <h2 className="text-6xl font-serif italic text-ffn-black leading-none tracking-tight">{selectedCasting.title}</h2>
                       <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-3 text-ffn-black font-black uppercase tracking-widest text-[10px]"><Award className="w-4 h-4 text-ffn-secondary" /> <span>{selectedCasting.brand}</span></div>
                          <span className="text-gray-200">|</span>
                          <div className="flex items-center space-x-3 text-gray-400 font-bold uppercase tracking-widest text-[10px]"><MapPin className="w-4 h-4" /> <span>{selectedCasting.location}</span></div>
                       </div>
                     </div>

                     <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-ffn-black border-b border-gray-50 pb-4">Opportunity Narrative</h4>
                        <p className="text-lg text-gray-500 font-light leading-relaxed italic">"{selectedCasting.description}"</p>
                     </div>

                     <div className="space-y-8">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-ffn-black border-b border-gray-50 pb-4">Protocol Requirements</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           {selectedCasting.requirements.map((req, i) => (
                             <div key={i} className="flex items-start space-x-4">
                                <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-500 mt-1"><CheckCircle className="w-3 h-3" /></div>
                                <span className="text-[11px] font-bold uppercase tracking-widest text-ffn-black">{req}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-5 space-y-12">
                     <div className="bg-gray-50 p-12 rounded-[3.5rem] space-y-12 shadow-inner border border-gray-100">
                        <div className="space-y-4">
                           <p className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-300">Financial Protocol</p>
                           <div className="flex items-end space-x-3">
                              <p className="text-6xl font-serif italic font-bold text-ffn-black leading-none">{selectedCasting.budget}</p>
                              <p className="text-[8px] uppercase tracking-widest text-emerald-600 font-black mb-1">Tax Inclusive</p>
                           </div>
                        </div>

                        <div className="space-y-8">
                           <p className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-300">Submit Application</p>
                           <form onSubmit={handleApply} className="space-y-6">
                              <div className="p-6 bg-white rounded-3xl border border-gray-100 flex items-center justify-between">
                                 <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-xl bg-ffn-black/5 flex items-center justify-center text-ffn-black"><FileText className="w-5 h-5" /></div>
                                    <span className="text-[9px] font-black uppercase tracking-widest">Share Hub Identity</span>
                                 </div>
                                 <div className="w-5 h-5 rounded-full border-2 border-ffn-primary flex items-center justify-center p-0.5"><div className="w-full h-full bg-ffn-primary rounded-full"></div></div>
                              </div>
                              <textarea 
                                required
                                className="w-full bg-white border border-gray-100 rounded-3xl p-6 text-xs h-32 resize-none focus:ring-1 focus:ring-ffn-primary transition-all" 
                                placeholder="Why are you the master for this role?"
                              />
                              <button 
                                disabled={isApplying}
                                className="w-full bg-ffn-black text-white py-8 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.5em] flex items-center justify-center space-x-4 shadow-xl hover:bg-ffn-primary transition-all disabled:opacity-50"
                              >
                                {isApplying ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                                <span>{isApplying ? 'Syncing...' : 'Dispatch Application'}</span>
                              </button>
                           </form>
                        </div>
                     </div>

                     <div className="p-8 text-center space-y-4 opacity-40">
                        <p className="text-[8px] uppercase tracking-[0.5em] font-black text-gray-400">Trusted By Global Scouters</p>
                        <div className="flex items-center justify-center space-x-8">
                           <div className="text-[10px] font-serif italic font-bold">MILAN</div>
                           <div className="text-[10px] font-serif italic font-bold">PARIS</div>
                           <div className="text-[10px] font-serif italic font-bold">NYC</div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};