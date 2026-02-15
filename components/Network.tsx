
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Users, Hash, MessageCircle, ArrowRight, Zap, UserPlus, Check, X, ShieldCheck } from 'lucide-react';

export const Network: React.FC = () => {
  const [activeNetworkTab, setActiveNetworkTab] = useState<'channels' | 'requests'>('channels');

  const requests = [
    { id: 'r1', name: 'Milan Creative Lab', role: 'Agency', location: 'Milan, IT', avatar: 'https://i.pravatar.cc/100?u=milan' },
    { id: 'r2', name: 'Sasha Volt', role: 'Designer', location: 'Berlin, DE', avatar: 'https://i.pravatar.cc/100?u=sasha' },
    { id: 'r3', name: 'Luxe Visuals', role: 'Production', location: 'London, UK', avatar: 'https://i.pravatar.cc/100?u=luxe' },
  ];

  const channels = [
    { name: 'LUX-MINIMAL', members: '1.2k', active: true, desc: 'High-end minimalist aesthetic discussion.' },
    { name: 'SUSTAINABLE-LAB', members: '840', active: false, desc: 'Eco-friendly textiles and production.' },
    { name: 'REEL-CREATIVES', members: '3.4k', active: true, desc: 'Tips for high-impact fashion video.' },
    { name: 'MILAN-TALENT', members: '450', active: true, desc: 'Local coordination for Milan FW.' },
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20">
      <header className="space-y-8">
        <div className="flex items-center space-x-3 text-ffn-primary">
           <Globe className="w-6 h-6 animate-pulse" />
           <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Global Creative Graph</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-2">
            <h1 className="text-6xl font-serif italic tracking-tighter text-ffn-black">The Network</h1>
            <p className="text-gray-400 text-sm max-w-xl font-light">Manage your professional relationships and collaborative spaces.</p>
          </div>
          <div className="flex bg-gray-100 p-1.5 rounded-[1.5rem] space-x-1">
            <button 
              onClick={() => setActiveNetworkTab('channels')}
              className={`px-8 py-3 rounded-2xl text-[9px] font-bold uppercase tracking-widest transition-all ${activeNetworkTab === 'channels' ? 'bg-white text-ffn-black shadow-sm' : 'text-gray-400 hover:text-ffn-black'}`}
            >
              Channels
            </button>
            <button 
              onClick={() => setActiveNetworkTab('requests')}
              className={`px-8 py-3 rounded-2xl text-[9px] font-bold uppercase tracking-widest transition-all relative ${activeNetworkTab === 'requests' ? 'bg-white text-ffn-black shadow-sm' : 'text-gray-400 hover:text-ffn-black'}`}
            >
              Requests
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-ffn-accent text-white text-[8px] flex items-center justify-center rounded-full border-2 border-white">3</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {activeNetworkTab === 'channels' ? (
          <motion.div 
            key="channels"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {channels.map((channel, idx) => (
              <div key={idx} className="bg-white rounded-[3.5rem] p-12 border border-gray-100 shadow-xl group cursor-pointer hover:shadow-2xl transition-all">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-ffn-primary/5 rounded-[1.5rem] flex items-center justify-center text-ffn-primary group-hover:bg-ffn-primary group-hover:text-white transition-all">
                     <Hash className="w-8 h-8" />
                  </div>
                  <div className="flex items-center space-x-2 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                     <Users className="w-4 h-4" />
                     <span>{channel.members} Professionals</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-3xl font-serif italic text-ffn-black leading-none">{channel.name}</h3>
                    {channel.active && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{channel.desc}</p>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-between">
                   <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="" /></div>
                     ))}
                   </div>
                   <button className="flex items-center space-x-3 text-[9px] font-bold uppercase tracking-[0.3em] text-ffn-primary group-hover:text-ffn-accent transition-colors">
                      <span>Enter Channel</span>
                      <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="requests"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {requests.map((request, idx) => (
              <motion.div 
                key={request.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-lg flex items-center justify-between group"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-gray-50 shadow-sm">
                    <img src={request.avatar} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3">
                      <h4 className="text-xl font-serif italic text-ffn-black">{request.name}</h4>
                      <span className="text-[8px] px-2 py-0.5 bg-ffn-primary/10 text-ffn-primary rounded-full font-bold uppercase tracking-widest">{request.role}</span>
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mt-1">{request.location} &bull; Shared Connection Hub</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="p-4 bg-ffn-primary text-white rounded-2xl hover:bg-ffn-black transition-all shadow-xl shadow-ffn-primary/20"><Check className="w-5 h-5" /></button>
                  <button className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-ffn-accent hover:text-white transition-all"><X className="w-5 h-5" /></button>
                </div>
              </motion.div>
            ))}
            <div className="p-12 text-center bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
              <UserPlus className="w-10 h-10 text-gray-200 mx-auto mb-4" />
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Collaborative Discovery: Search for talent to expand your network</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="bg-ffn-black rounded-[4rem] p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-80 h-80 bg-ffn-primary/10 blur-[100px] rounded-full"></div>
         <div className="space-y-4 text-center md:text-left relative z-10">
            <div className="flex items-center justify-center md:justify-start space-x-3 text-ffn-accent mb-2">
               <Zap className="w-5 h-5" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Mastery Program</span>
            </div>
            <h2 className="text-4xl font-serif italic tracking-tight leading-none">Identity Sovereignty</h2>
            <p className="text-sm text-white/40 font-light leading-relaxed max-w-md">Your professional brand is protected by the global FFN verification infrastructure.</p>
         </div>
         <button className="px-14 py-6 bg-white text-ffn-black rounded-3xl text-[10px] font-bold uppercase tracking-[0.4em] shadow-2xl hover:bg-ffn-primary hover:text-white transition-all relative z-10">Join Group Session</button>
      </section>
    </div>
  );
};
