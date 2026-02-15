
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, MessageCircle, Share2, Music, UserPlus, Sparkles } from 'lucide-react';

export const Motion: React.FC = () => {
  const reels = [
    { id: 1, video: 'https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?auto=format&fit=crop&q=80&w=800', author: 'parisian_chic', music: 'L’Avenue - Night Drive', likes: '45.2k' },
    { id: 2, video: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800', author: 'neo_seoul', music: 'K-Pop Beats - Instrumental', likes: '12.8k' },
    { id: 3, video: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800', author: 'milan_editorial', music: 'Classic Strings - Orchestral', likes: '89.1k' },
  ];

  return (
    <div className="h-[calc(100vh-120px)] overflow-y-scroll snap-y snap-mandatory no-scrollbar rounded-[3rem] bg-black">
      {reels.map((reel, idx) => (
        <section key={reel.id} className="h-full w-full snap-start relative group flex flex-col justify-end p-12 overflow-hidden">
          {/* Background Media Placeholder */}
          <div className="absolute inset-0 z-0">
            <img src={reel.video} className="w-full h-full object-cover opacity-80" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
          </div>

          {/* Overlay Content */}
          <div className="relative z-10 flex justify-between items-end gap-10">
            <div className="space-y-6 max-w-lg">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl border-2 border-white overflow-hidden shadow-2xl">
                   <img src={`https://i.pravatar.cc/100?u=${reel.author}`} alt="" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-white font-bold text-lg tracking-tight uppercase flex items-center gap-2">
                    {reel.author}
                    <UserPlus className="w-4 h-4 text-ffn-primary fill-ffn-primary" />
                  </h3>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Global Motion Resident</p>
                </div>
              </div>
              
              <p className="text-white/90 text-sm font-light leading-relaxed">
                Capturing the essence of late-night Milan. The new collection explores the duality of shadow and silhouette. <span className="text-ffn-primary font-bold">#MilanMotion</span>
              </p>

              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl w-fit border border-white/10">
                 <Music className="w-4 h-4 text-ffn-accent animate-pulse" />
                 <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">{reel.music}</span>
              </div>
            </div>

            {/* Side Actions */}
            <div className="flex flex-col items-center space-y-8">
               <div className="flex flex-col items-center space-y-2">
                  <motion.button whileTap={{ scale: 0.8 }} className="p-5 rounded-[1.5rem] bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-ffn-accent transition-all shadow-2xl">
                    <Heart className="w-6 h-6 fill-white" />
                  </motion.button>
                  <span className="text-white text-[10px] font-bold">{reel.likes}</span>
               </div>
               <div className="flex flex-col items-center space-y-2">
                  <motion.button whileTap={{ scale: 0.8 }} className="p-5 rounded-[1.5rem] bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-ffn-primary transition-all shadow-2xl">
                    <MessageCircle className="w-6 h-6" />
                  </motion.button>
                  <span className="text-white text-[10px] font-bold">482</span>
               </div>
               <motion.button whileTap={{ scale: 0.8 }} className="p-5 rounded-[1.5rem] bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white hover:text-black transition-all shadow-2xl">
                  <Share2 className="w-6 h-6" />
               </motion.button>
               <motion.div 
                 animate={{ rotate: 360 }} 
                 transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                 className="w-12 h-12 rounded-full bg-gradient-to-tr from-ffn-primary to-ffn-accent p-1"
               >
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white ml-1" />
                  </div>
               </motion.div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1.5 bg-ffn-primary shadow-[0_0_20px_rgba(99,102,241,0.5)]" style={{ width: '45%' }}></div>
        </section>
      ))}
    </div>
  );
};
