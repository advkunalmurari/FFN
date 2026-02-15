
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, Grid, Bookmark, Briefcase, Heart, MessageCircle, 
  TrendingUp, ShieldCheck, DollarSign, Users, Award, Edit3, Camera, Plus, X, Upload, Globe, Zap, Sparkles,
  BarChart3, FileCheck, CreditCard, ChevronRight
} from 'lucide-react';
import { ProfileHero } from './ProfileHero';
import { PRICING } from '../constants';

export const MyProfile: React.FC<{ user: any; onLogout: () => void }> = ({ user, onLogout }) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'business' | 'marketing' | 'analytics'>('overview');

  const stats = [
    { label: 'Profile Views', value: '4.2k', icon: TrendingUp, color: 'text-ffn-primary' },
    { label: 'Hire Requests', value: '18', icon: MessageCircle, color: 'text-ffn-accent' },
    { label: 'Direct Earnings', value: '₹45k', icon: DollarSign, color: 'text-emerald-500' },
    { label: 'Identity Score', value: `${user.completionScore || 85}/100`, icon: ShieldCheck, color: 'text-blue-500' },
  ];

  const completionTasks = [
    { id: 1, label: 'Hero Identity Portrait', done: true },
    { id: 2, label: 'Professional Bio Architecture', done: true },
    { id: 3, label: 'Measurements & Stats (for Models)', done: false },
    { id: 4, label: 'Link Professional Instagram Hub', done: true },
    { id: 5, label: 'Upload High-Res Portfolio Gallery', done: false },
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-32">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-ffn-primary">
            <Award className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Talent Identity Infrastructure</span>
          </div>
          <h1 className="text-6xl font-serif italic tracking-tighter text-ffn-black">Identity Management</h1>
        </div>
        <div className="flex items-center space-x-4">
           <button onClick={() => setIsUploadModalOpen(true)} className="px-8 py-4 bg-ffn-primary text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-ffn-black transition-all shadow-xl flex items-center space-x-2"><Plus className="w-4 h-4" /><span>Portfolio Hub</span></button>
           <button onClick={onLogout} className="px-8 py-4 bg-ffn-black text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-ffn-accent transition-all shadow-xl">Protocol Exit</button>
        </div>
      </header>

      {/* Completion Dashboard */}
      <section className="bg-ffn-black rounded-[4rem] p-12 text-white overflow-hidden relative border border-white/5">
         <div className="absolute top-0 right-0 w-96 h-96 bg-ffn-primary/10 blur-[100px] animate-pulse"></div>
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
            <div className="lg:col-span-4 space-y-8 border-r border-white/10 pr-12">
               <div className="space-y-2">
                 <h3 className="text-[10px] uppercase tracking-[0.5em] font-black text-ffn-primary">Identity Strength</h3>
                 <div className="flex items-end space-x-4">
                   <p className="text-8xl font-serif italic font-bold leading-none">{user.completionScore || 85}%</p>
                   <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-black">Professional Grade</p>
                 </div>
               </div>
               <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} animate={{ width: `${user.completionScore || 85}%` }} className="h-full bg-ffn-primary" />
               </div>
               <p className="text-sm text-white/40 font-light leading-relaxed">Complete your profile to increase your discoverability rank by up to <span className="text-ffn-accent font-bold">400%</span>.</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
               {completionTasks.map(task => (
                 <div key={task.id} className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-white/20 transition-all cursor-pointer group">
                   <span className={`text-[10px] uppercase tracking-widest font-black ${task.done ? 'text-white/40' : 'text-ffn-accent'}`}>{task.label}</span>
                   <div className={`p-2 rounded-xl ${task.done ? 'bg-emerald-500 text-white' : 'bg-white/10 text-white/40 group-hover:bg-ffn-accent group-hover:text-white transition-all'}`}>
                     {task.done ? <FileCheck className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <div className="flex space-x-12 border-b border-gray-100 pb-4">
        {[
          { id: 'overview', label: 'Hub Overview', icon: Grid },
          { id: 'business', label: 'Commercials', icon: Briefcase },
          { id: 'marketing', label: 'Growth Suite', icon: Zap },
          { id: 'analytics', label: 'Insights', icon: BarChart3 }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest transition-all relative ${activeTab === tab.id ? 'text-ffn-black' : 'text-gray-400'}`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
            {activeTab === tab.id && <motion.div layoutId="profileTabLine" className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-ffn-black" />}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[3rem] border border-gray-50 shadow-lg group hover:shadow-2xl transition-all">
                  <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center ${stat.color} mb-8 group-hover:scale-110 transition-transform shadow-inner`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">{stat.label}</p>
                  <p className="text-4xl font-serif italic text-ffn-black leading-none">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-[4rem] p-12 border border-gray-100 shadow-xl relative overflow-hidden"><ProfileHero user={user} /></div>
          </motion.div>
        )}

        {activeTab === 'marketing' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="bg-white p-16 rounded-[4rem] shadow-2xl border border-gray-100 space-y-10">
                <div className="flex items-center space-x-4 text-ffn-primary"><Zap className="w-8 h-8" /><span className="text-xs uppercase tracking-[0.5em] font-black">Identity Acceleration</span></div>
                <h3 className="text-5xl font-serif italic text-ffn-black leading-none">Global Hub <br/> <span className="font-bold not-italic">Boost.</span></h3>
                <p className="text-gray-400 font-light leading-relaxed">Increase your profile visibility in search and directory top sections for 30 days.</p>
                <div className="pt-8"><button className="w-full bg-ffn-black text-white py-8 rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-xl hover:bg-ffn-primary transition-all flex items-center justify-center space-x-4"><CreditCard className="w-5 h-5" /> <span>Activate Boost — {PRICING.CURRENCY}{PRICING.PROFILE_BOOST}</span></button></div>
             </div>

             <div className="bg-ffn-black text-white p-16 rounded-[4rem] shadow-2xl space-y-10 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-pride blur-[100px] animate-pulse"></div>
                <div className="flex items-center space-x-4 text-ffn-secondary"><Award className="w-8 h-8" /><span className="text-xs uppercase tracking-[0.5em] font-black">Editorial Vetting</span></div>
                <h3 className="text-5xl font-serif italic leading-none text-gradient-vibrant">Tiered <br/> <span className="font-bold not-italic">Verification.</span></h3>
                <p className="text-white/40 font-light leading-relaxed">Upgrade to 'Featured' or 'Approved' status to unlock premium casting calls and brand shortcuts.</p>
                <div className="pt-8"><button className="w-full bg-white text-ffn-black py-8 rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-xl hover:bg-ffn-primary hover:text-white transition-all">Submit for Vetting — {PRICING.CURRENCY}{PRICING.VERIFICATION}</button></div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
