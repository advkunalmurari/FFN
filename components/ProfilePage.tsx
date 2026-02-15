
import React, { useState } from 'react';
import { User, UserRole, VerificationLevel } from '../types';
import { 
  MapPin, Instagram, Mail, Share2, Grid, CheckCircle, ArrowLeft, 
  ExternalLink, Briefcase, FileText, Download, X, Star, Sparkles, Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProfilePage: React.FC<{ user: User; onBack: () => void }> = ({ user, onBack }) => {
  const [showModelCard, setShowModelCard] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);

  const VerificationBadge = ({ level }: { level: VerificationLevel }) => {
    const badges = [
      null,
      <CheckCircle className="w-6 h-6 text-blue-500 fill-blue-500" />,
      <div className="flex items-center space-x-1 bg-gradient-pride p-1.5 rounded-full shadow-lg"><Star className="w-4 h-4 text-white fill-white" /></div>,
      <div className="flex items-center space-x-1 bg-ffn-black p-1.5 rounded-full shadow-2xl border border-white/20"><Sparkles className="w-4 h-4 text-ffn-accent animate-pulse" /></div>
    ];
    return badges[level] || null;
  };

  return (
    <div className="animate-in fade-in duration-700 pb-32">
      <button 
        onClick={onBack}
        className="mb-12 flex items-center space-x-3 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-ffn-primary transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> <span>Back to Directory</span>
      </button>

      <div className="space-y-20">
        <section className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-2/5 aspect-[4/5] bg-white rounded-[3rem] border border-gray-100 overflow-hidden relative shadow-2xl">
             <img src={user.avatarUrl} className="w-full h-full object-cover" alt={user.displayName} />
             <div className="absolute top-8 right-8 flex flex-col space-y-4">
               <button className="glass-card-vibrant p-4 rounded-2xl border border-white/20 shadow-xl hover:scale-110 transition-all"><Share2 className="w-5 h-5 text-ffn-black" /></button>
               <button 
                 onClick={() => setShowModelCard(true)}
                 className="glass-card-vibrant p-4 rounded-2xl border border-white/20 shadow-xl hover:scale-110 transition-all text-ffn-primary"
                 title="Generate Model Card"
               >
                 <FileText className="w-5 h-5" />
               </button>
             </div>
          </div>

          <div className="flex-1 space-y-12 pt-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter text-ffn-black">{user.displayName}</h1>
                <VerificationBadge level={user.verificationLevel} />
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold bg-ffn-primary text-white px-6 py-2 rounded-full shadow-lg shadow-ffn-primary/20">{user.role}</span>
                <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold flex items-center">
                  <MapPin className="w-3 h-3 mr-2 text-ffn-primary" /> {user.location}
                </span>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-600 max-w-2xl italic">"{user.bio}"</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
               {user.height && (
                 <div className="space-y-1">
                   <p className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Height</p>
                   <p className="text-2xl font-serif italic text-ffn-black">{user.height}</p>
                 </div>
               )}
               {user.measurements && (
                 <div className="space-y-1">
                   <p className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Measurements</p>
                   <p className="text-2xl font-serif italic text-ffn-black">{user.measurements}</p>
                 </div>
               )}
               <div className="space-y-1">
                 <p className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Network</p>
                 <p className="text-2xl font-serif italic text-ffn-black">{user.followersCount.toLocaleString()}+</p>
               </div>
               <div className="space-y-1">
                 <p className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Identity Rank</p>
                 <p className="text-2xl font-serif italic text-ffn-primary">#12 Global</p>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => setShowHireModal(true)}
                className="bg-ffn-black text-white flex-1 py-7 rounded-[2rem] text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center space-x-3 group hover:bg-ffn-primary transition-all shadow-2xl"
              >
                <Mail className="w-5 h-5" /> <span>Inquire Mastery</span>
              </button>
              <button className="bg-white border border-gray-200 text-ffn-black flex-1 py-7 rounded-[2rem] text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center space-x-3 hover:bg-gray-50 transition-all shadow-sm">
                <Briefcase className="w-5 h-5 text-ffn-primary" /> <span>Direct Booking</span>
              </button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="space-y-12">
          <div className="flex items-center justify-between border-b border-gray-100 pb-10">
            <h3 className="text-3xl font-serif italic text-ffn-black">Professional Showcase</h3>
            <div className="flex items-center space-x-8 text-[10px] uppercase tracking-widest font-bold text-gray-400">
               <button className="text-ffn-black border-b-2 border-ffn-black pb-10 -mb-[41px]">Portfolio</button>
               <button className="hover:text-ffn-black transition-colors">Campaigns</button>
               <button className="hover:text-ffn-black transition-colors">Digital Cards</button>
            </div>
          </div>
          <div className="editorial-grid pt-4">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="aspect-[3/4] overflow-hidden group rounded-[2.5rem] border border-gray-100 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                 <img src={`https://picsum.photos/id/${120 + i}/800/1000`} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" alt="" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Model Card Modal */}
      <AnimatePresence>
        {showModelCard && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-ffn-black/90 backdrop-blur-xl">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white w-full max-w-4xl h-[90vh] rounded-[4rem] overflow-hidden relative flex flex-col md:flex-row shadow-2xl">
               <button onClick={() => setShowModelCard(false)} className="absolute top-10 right-10 z-10 p-4 bg-ffn-black text-white rounded-full"><X className="w-6 h-6" /></button>
               
               <div className="md:w-1/2 bg-gray-100 p-0 relative h-1/2 md:h-full">
                  <img src={user.avatarUrl} className="w-full h-full object-cover" alt="" />
                  <div className="absolute top-10 left-10 p-4 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl"><div className="w-8 h-8 text-white">FFN</div></div>
               </div>

               <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-between">
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <p className="text-[10px] uppercase tracking-[0.5em] font-black text-ffn-primary">Professional Identity Card</p>
                      <h2 className="text-6xl font-serif italic text-ffn-black tracking-tight">{user.displayName}</h2>
                      <div className="flex items-center space-x-3"><span className="text-[10px] uppercase tracking-widest font-black text-gray-400">{user.role}</span><VerificationBadge level={user.verificationLevel} /></div>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                       <div className="space-y-2"><p className="text-[8px] uppercase tracking-widest font-black text-gray-400">Height</p><p className="text-xl font-serif italic text-ffn-black">{user.height || 'N/A'}</p></div>
                       <div className="space-y-2"><p className="text-[8px] uppercase tracking-widest font-black text-gray-400">Measurements</p><p className="text-xl font-serif italic text-ffn-black">{user.measurements || 'N/A'}</p></div>
                       <div className="space-y-2"><p className="text-[8px] uppercase tracking-widest font-black text-gray-400">Location</p><p className="text-xl font-serif italic text-ffn-black">{user.location}</p></div>
                       <div className="space-y-2"><p className="text-[8px] uppercase tracking-widest font-black text-gray-400">IG Hub</p><p className="text-xl font-serif italic text-ffn-black">@{user.username}</p></div>
                    </div>
                  </div>

                  <div className="pt-20 space-y-8">
                     <div className="grid grid-cols-4 gap-4">
                        {[1,2,3,4].map(i => <div key={i} className="aspect-square rounded-2xl bg-gray-100 overflow-hidden"><img src={`https://picsum.photos/id/${150+i}/200/200`} className="w-full h-full object-cover" alt="" /></div>)}
                     </div>
                     <button className="w-full bg-ffn-black text-white py-6 rounded-3xl text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center space-x-3 shadow-xl">
                        <Download className="w-5 h-5" /> <span>Download Professional PDF</span>
                     </button>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hire Modal */}
      <AnimatePresence>
        {showHireModal && (
          <div className="fixed inset-0 z-[600] flex items-center justify-center p-6 bg-ffn-black/60 backdrop-blur-md">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white w-full max-w-xl rounded-[3.5rem] p-12 md:p-16 space-y-12 shadow-2xl">
               <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-3xl font-serif italic text-ffn-black">Talent Inquiry</h3>
                    <p className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-400">MASTER IDENTITY PROTOCOL</p>
                  </div>
                  <button onClick={() => setShowHireModal(false)} className="p-4 bg-gray-50 rounded-2xl"><X className="w-6 h-6" /></button>
               </div>
               <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setShowHireModal(false); alert("Inquiry Sent via FFN Network"); }}>
                  <div className="space-y-2"><label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Company / Entity Name</label><input required className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm" placeholder="e.g. Vogue Studios" /></div>
                  <div className="space-y-2"><label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Professional Message</label><textarea required className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm h-32 resize-none" placeholder="Details of the campaign or booking..."></textarea></div>
                  <button type="submit" className="w-full bg-ffn-black text-white py-6 rounded-[2rem] text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center space-x-3 shadow-2xl hover:bg-ffn-primary transition-all">
                    <Send className="w-5 h-5" /> <span>Dispatch Inquiry</span>
                  </button>
               </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
