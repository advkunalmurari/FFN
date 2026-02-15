import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added ArrowRight to fix missing reference error
import { Sparkles, TrendingUp, Play, Image as ImageIcon, Search, SlidersHorizontal, Grid, Camera, Zap, ArrowRight } from 'lucide-react';

export const Explore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visual' | 'curated' | 'motion'>('visual');
  
  const topics = ['Streetwear', 'Avant-Garde', 'Minimalism', 'Sustainable', 'Couture', 'Vintage', 'Digital'];
  
  const gridItems = [
    { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800', size: 'large', type: 'IMAGE' },
    { url: 'https://images.unsplash.com/photo-1529139513065-07b3b1bfde91?auto=format&fit=crop&q=80&w=800', size: 'small', type: 'IMAGE' },
    { url: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800', size: 'medium', type: 'IMAGE' },
    { url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800', size: 'medium', type: 'REEL' },
    { url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800', size: 'large', type: 'IMAGE' },
    { url: 'https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?auto=format&fit=crop&q=80&w=800', size: 'small', type: 'IMAGE' },
    { url: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=800', size: 'medium', type: 'IMAGE' },
    { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800', size: 'medium', type: 'REEL' },
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-32">
      <header className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-4">
             <div className="inline-flex items-center space-x-3 text-ffn-primary">
                <Grid className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Identity Discovery Lab</span>
             </div>
             <h1 className="text-7xl font-serif italic tracking-tighter text-ffn-black">Visual Explore</h1>
          </div>
          
          <div className="flex bg-gray-50 p-1.5 rounded-[2rem] space-x-1 border border-gray-100 shadow-inner">
             {[
               { id: 'visual', label: 'Identity Graph', icon: Grid },
               { id: 'curated', label: 'Editorial', icon: Sparkles },
               { id: 'motion', label: 'Cinematic', icon: Play }
             ].map(tab => (
               <button 
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id as any)}
                 className={`flex items-center space-x-3 px-8 py-3.5 rounded-[1.5rem] text-[9px] font-bold uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-ffn-black text-white shadow-xl' : 'text-gray-400 hover:text-ffn-black'}`}
               >
                 <tab.icon className="w-3.5 h-3.5" />
                 <span>{tab.label}</span>
               </button>
             ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
           <div className="relative flex-1 group">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-ffn-primary transition-all" />
             <input 
               type="text" 
               placeholder="Visual identity search..." 
               className="w-full bg-white border border-gray-100 rounded-[2rem] py-6 pl-16 pr-24 text-xs font-bold uppercase tracking-widest shadow-xl shadow-gray-200/20 focus:shadow-2xl focus:border-ffn-primary transition-all"
             />
             <button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-ffn-primary transition-colors">
                <Camera className="w-5 h-5" />
             </button>
           </div>
           <div className="flex overflow-x-auto no-scrollbar space-x-4 items-center">
             {topics.map((topic, idx) => (
               <motion.button
                 key={topic}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-8 py-4 rounded-2xl bg-white border border-gray-50 shadow-sm text-[9px] font-black uppercase tracking-widest text-gray-400 hover:border-ffn-primary hover:text-ffn-black transition-all whitespace-nowrap"
               >
                 {topic}
               </motion.button>
             ))}
             <button className="p-4 bg-ffn-black text-white rounded-2xl shadow-xl hover:bg-ffn-primary transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
             </button>
           </div>
        </div>
      </header>

      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-10 space-y-10">
        {gridItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 4) * 0.1 }}
            className="relative group cursor-pointer break-inside-avoid rounded-[3.5rem] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all border border-gray-100"
          >
            <img src={item.url} className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-ffn-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            <div className="absolute top-8 right-8 p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.type === 'REEL' ? <Play className="w-5 h-5 fill-white" /> : <ImageIcon className="w-5 h-5" />}
            </div>

            <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all translate-y-6 group-hover:translate-y-0 duration-500">
               <div className="space-y-4">
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-xl border-2 border-white overflow-hidden shadow-lg"><img src={`https://i.pravatar.cc/100?u=${idx}`} alt="" /></div>
                   <div>
                     <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white">@identity_node_{idx + 101}</p>
                     <p className="text-[7px] uppercase tracking-widest text-white/60 font-bold">Milan, Italy</p>
                   </div>
                 </div>
                 <button className="flex items-center space-x-3 text-white">
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-white pb-1">Enter Narrative</span>
                   <ArrowRight className="w-4 h-4" />
                 </button>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="bg-ffn-black rounded-[5rem] p-24 text-center space-y-12 relative overflow-hidden shadow-3xl border border-white/5">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-ffn-primary/10 via-transparent to-ffn-accent/10 blur-[120px] rounded-full animate-float"></div>
         <div className="relative z-10 space-y-10">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 flex items-center justify-center text-ffn-accent shadow-2xl">
                 <TrendingUp className="w-8 h-8 animate-pulse" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-6xl md:text-8xl font-serif italic text-white tracking-tighter leading-none">Computational <br/> <span className="text-gradient-vibrant font-bold not-italic">Scouting.</span></h2>
              <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-xl font-light italic leading-relaxed">"FFN’s discovery protocol uses multi-modal intelligence to match talent with global production requirements in real-time."</p>
            </div>
            <div className="pt-8"><button className="px-16 py-8 bg-white text-ffn-black rounded-[2.5rem] text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl hover:bg-ffn-primary hover:text-white transition-all flex items-center space-x-4 mx-auto"><Zap className="w-5 h-5 text-ffn-accent" /><span>Launch Visual Search Engine</span></button></div>
         </div>
      </section>
    </div>
  );
};