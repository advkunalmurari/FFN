
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Zap, Globe, Sparkles, CheckCircle, 
  Instagram, Tag, Star, Award, Heart, MessageCircle, Play, Camera, ExternalLink
} from 'lucide-react';
import { PRICING, MOCK_TALENT_POOL, MOCK_POSTS, BRAND_SOCIALS, MOCK_SHOOTS } from '../constants';

const HubGraphic: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'Mumbai':
      return (
        <motion.svg 
          viewBox="0 0 40 40" className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:text-ffn-primary transition-all duration-700"
          initial="initial" animate="animate"
        >
          <motion.circle 
            cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4"
            animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="20" cy="20" r="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.5"
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }}
          />
          <circle cx="20" cy="20" r="2" fill="currentColor" />
        </motion.svg>
      );
    case 'Paris':
      return (
        <motion.svg 
          viewBox="0 0 40 40" className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:text-ffn-accent transition-all duration-700"
        >
          <motion.path 
            d="M20 5 L35 35 L5 35 Z" fill="none" stroke="currentColor" strokeWidth="1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path 
            d="M10 25 H30" stroke="currentColor" strokeWidth="1"
            animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.svg>
      );
    case 'London':
      return (
        <motion.svg 
          viewBox="0 0 40 40" className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-700"
        >
          <motion.rect 
            x="12" y="12" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1"
            animate={{ rotate: 45 }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.rect 
            x="12" y="12" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1"
            animate={{ rotate: -45 }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="20" cy="20" r="1.5" fill="currentColor" />
        </motion.svg>
      );
    case 'Milan':
      return (
        <motion.svg 
          viewBox="0 0 40 40" className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:text-ffn-secondary transition-all duration-700"
        >
          <motion.path 
            d="M10 20 Q20 5 30 20 Q20 35 10 20" fill="none" stroke="currentColor" strokeWidth="1"
            animate={{ scale: [0.9, 1.1, 0.9] }} transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.path 
            d="M15 20 Q20 10 25 20 Q20 30 15 20" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.5"
            animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.svg>
      );
    default:
      return null;
  }
};

export const Home: React.FC<{ onApply: () => void; onDirectory: () => void; onRegisterProfessional: () => void }> = ({ onApply, onDirectory, onRegisterProfessional }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const igPosts = MOCK_POSTS.filter(p => p.author?.username === BRAND_SOCIALS.INSTAGRAM);

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-32 md:space-y-48 pb-32 md:pb-64"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden -mt-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ffn-primary blur-[120px] rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-ffn-accent blur-[160px] rounded-full animate-pulse-slow"></div>
        </div>
        <div className="max-w-7xl space-y-12">
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full bg-white/50 backdrop-blur-xl border border-ffn-primary/10 shadow-2xl mb-8">
             <Sparkles className="w-4 h-4 text-ffn-accent animate-pulse" />
             <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-ffn-primary">The Identity Protocol for Fashion</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-[10rem] lg:text-[11rem] font-serif italic leading-[0.9] tracking-tighter text-ffn-black">
            India’s Emerging <br/>
            <span className="text-gradient-vibrant not-italic font-bold">Fashion Talent</span> <br/>
            Discovery Platform.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-2xl max-w-4xl mx-auto uppercase tracking-[0.2em] leading-relaxed font-light mt-10">
            Designers, Models, MUAs, and Artists. <br/>
            <span className="text-ffn-black font-bold">Claim your professional sovereignty</span> and get discovered by global scouts.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0 30px 60px rgba(99, 102, 241, 0.4)" }} whileTap={{ scale: 0.98 }} onClick={onRegisterProfessional} className="w-full sm:w-auto bg-ffn-black text-white px-16 py-8 rounded-[2.5rem] text-xs font-bold uppercase tracking-[0.4em] flex items-center justify-center space-x-4 group shadow-[0_20px_40px_rgba(0,0,0,0.1)]"><span>Register as a Professional</span><ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></motion.button>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: "#fff" }} whileTap={{ scale: 0.98 }} onClick={onDirectory} className="w-full sm:w-auto bg-white/50 backdrop-blur-md border border-gray-100 text-ffn-black px-16 py-8 rounded-[2.5rem] text-xs font-bold uppercase tracking-[0.4em] shadow-sm hover:shadow-xl transition-all">Explore Talent</motion.button>
          </motion.div>
          <motion.div variants={itemVariants} className="pt-20 flex flex-col items-center space-y-6"><div className="flex -space-x-4">{[1,2,3,4,5].map(i => (<div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-xl"><img src={`https://i.pravatar.cc/150?img=${i+10}`} className="w-full h-full object-cover" alt="" /></div>))}<div className="w-14 h-14 rounded-full border-4 border-white bg-ffn-black text-white flex items-center justify-center text-[10px] font-bold shadow-xl">+5k</div></div><p className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-300">Trusted by Global Casting Directors</p></motion.div>
        </div>
      </section>

      {/* Mid-Section Conversion CTA */}
      <section className="bg-ffn-black rounded-[4rem] p-16 md:p-32 text-center space-y-12 relative overflow-hidden mx-4 shadow-3xl">
         <div className="absolute top-0 right-0 w-96 h-96 bg-ffn-primary/20 blur-[120px] rounded-full animate-float"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-ffn-accent/10 blur-[100px] rounded-full"></div>
         <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-7xl font-serif italic text-white leading-tight tracking-tighter">Your Future <br/> in Global Fashion.</h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm md:text-xl font-light italic">Join the network where identity meets opportunity. Activate your professional hub today.</p>
            <div className="pt-6">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onRegisterProfessional}
                className="bg-white text-ffn-black px-12 py-6 md:px-20 md:py-10 rounded-[2.5rem] text-[10px] md:text-xs font-black uppercase tracking-[0.5em] shadow-2xl hover:bg-ffn-primary hover:text-white transition-all"
              >
                Register as a Professional
              </motion.button>
            </div>
         </div>
      </section>

      {/* Professional Showcase Highlight */}
      <section className="space-y-20 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-ffn-primary"><Camera className="w-5 h-5" /><span className="text-[10px] font-bold uppercase tracking-[0.6em]">Editorial Spotlight</span></div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-ffn-black leading-none">Professional <br/> <span className="text-gradient-vibrant font-bold not-italic">Showcases.</span></h2>
          </div>
          <ArrowRight className="w-10 h-10 text-gray-200" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {MOCK_SHOOTS.map((shoot, i) => (
             <motion.div key={shoot.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="group relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
               <img src={shoot.mediaUrl} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="" />
               <div className="absolute inset-0 bg-gradient-to-t from-ffn-black via-transparent to-transparent p-12 flex flex-col justify-end">
                  <h4 className="text-3xl text-white font-serif italic">{shoot.title}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-black mt-2">Captured by {shoot.photographer}</p>
               </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Instagram Hub Section */}
      <section className="space-y-16 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-ffn-accent">
              <Instagram className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.6em]">Digital Connectivity Hub</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-ffn-black leading-none">Instagram <br/> <span className="text-gradient-vibrant font-bold not-italic">Connect.</span></h2>
          </div>
          <a 
            href={BRAND_SOCIALS.INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-4 group"
          >
            <div className="text-right hidden md:block">
              <p className="text-[10px] uppercase tracking-widest font-black text-ffn-black">Follow Identity Hub</p>
              <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 group-hover:text-ffn-primary transition-colors">@{BRAND_SOCIALS.INSTAGRAM}</p>
            </div>
            <div className="p-5 bg-white rounded-3xl border border-gray-100 shadow-xl group-hover:shadow-2xl transition-all">
              <ExternalLink className="w-6 h-6 text-ffn-black group-hover:text-ffn-primary" />
            </div>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {igPosts.map((post, i) => (
            <motion.div 
              key={post.id} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-gray-100 rounded-[2.5rem] overflow-hidden relative group shadow-xl"
            >
              <img src={post.mediaUrls[0]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-ffn-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-4 h-4 fill-white" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{(post.likes / 1000).toFixed(1)}k</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Mock additional slots for full grid */}
          {[1, 2].map((i) => (
            <div key={i} className="aspect-square bg-gray-50 rounded-[2.5rem] overflow-hidden relative group hidden lg:block border border-gray-100/50">
              <img src={`https://picsum.photos/id/${160+i}/800/800`} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Talent Spotlight */}
      <section className="space-y-16 md:space-y-24 px-4">
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-8 md:pb-12"><div className="space-y-4"><h2 className="text-[10px] uppercase tracking-[0.6em] font-bold text-ffn-accent">Discovery Pipeline</h2><h3 className="text-4xl md:text-6xl font-serif italic text-ffn-black leading-none">The Future Faces</h3></div><motion.button whileHover={{ x: 10 }} onClick={onDirectory} className="hidden md:flex text-[10px] uppercase tracking-widest font-bold items-center group text-ffn-primary hover:text-ffn-accent transition-colors">Open Full Directory <ArrowRight className="ml-3 w-4 h-4" /></motion.button></motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {MOCK_TALENT_POOL.map((talent, idx) => (
            <motion.div key={talent.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }} className="group cursor-pointer space-y-6 md:space-y-8" onClick={() => onDirectory()}>
              <div className="aspect-[3/4] overflow-hidden relative rounded-[3rem] md:rounded-[4rem] shadow-2xl group-hover:shadow-ffn-primary/20 transition-all duration-700">
                <img src={talent.avatarUrl} className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110" alt={talent.displayName} />
                <div className="absolute inset-0 bg-gradient-to-t from-ffn-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10"><div className="space-y-2"><p className="text-[10px] uppercase tracking-widest text-white/60 font-black">{talent.role}</p><h4 className="text-white text-3xl font-serif italic">View Identity</h4></div></div>
              </div>
              <div className="space-y-2 md:space-y-4 px-4"><div className="flex items-center justify-between"><div className="flex items-center space-x-2 md:space-x-3"><h4 className="font-serif italic text-2xl md:text-3xl text-ffn-black">{talent.displayName}</h4>{talent.isVerified && <CheckCircle className="w-5 h-5 text-blue-500 fill-blue-500" />}</div></div><p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">{talent.location}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Offer Section */}
      <section className="relative py-24 md:py-64 bg-ffn-black rounded-[4rem] md:rounded-[6rem] px-6 md:px-12 lg:px-24 overflow-visible border border-white/5 shadow-2xl mx-4">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] bg-ffn-primary/10 blur-[120px] md:blur-[180px] animate-pulse-slow"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-start md:items-center relative z-10">
          <div className="lg:col-span-6 xl:col-span-7 space-y-12 md:space-y-20 text-white"><motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-5xl md:text-8xl xl:text-9xl font-serif leading-[1] md:leading-[0.85] italic tracking-tighter">India’s New <br/><span className="text-gradient-vibrant font-bold not-italic">Identity</span> <br/>Protocol.</motion.h2><div className="grid gap-8 md:gap-12 max-w-xl"><p className="text-white/60 text-lg md:text-2xl font-light leading-relaxed italic">"Join the 1% of emerging fashion talent. Establish your professional sovereignty and get indexed for global dominance."</p><div className="space-y-8">{["Public professional portfolio hub", "Direct social media graph sync", "Editorial-grade category tagging", "Casting & Brand feature eligibility", "Verified Badge activation"].map((text, i) => (<div key={i} className="flex items-center space-x-6"><CheckCircle className="w-6 h-6 text-ffn-primary fill-ffn-primary/20" /><span className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-black text-white/80">{text}</span></div>))}</div></div></div>
          <div className="lg:col-span-6 xl:col-span-5 relative w-full lg:pt-12">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} className="relative w-full bg-white rounded-[4rem] md:rounded-[5rem] p-10 md:p-20 flex flex-col justify-between text-center group shadow-[0_60px_100px_rgba(0,0,0,0.5)] border border-white/20 overflow-visible"><div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"><span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-black text-ffn-primary bg-white px-10 py-5 rounded-full shadow-2xl border border-indigo-100 flex items-center space-x-4"><Sparkles className="w-4 h-4 text-ffn-accent" /><span>Launch Phase Activation</span></span></div><div className="space-y-10 md:space-y-16 relative z-10 pt-8 pb-4"><div className="space-y-6 md:space-y-10"><h3 className="text-4xl md:text-7xl font-serif italic leading-[1.1] text-ffn-black tracking-tight text-center">Verified <br/> Talent <br/> <span className="not-italic font-bold">Listing.</span></h3></div><div className="pt-4 md:pt-8"><div className="text-6xl md:text-9xl font-serif font-bold tracking-tighter text-ffn-primary leading-none flex items-center justify-center"><span className="text-2xl md:text-5xl mr-2 font-sans">{PRICING.CURRENCY}</span>{PRICING.PROFILE_LISTING}</div><p className="text-[9px] uppercase tracking-[0.6em] text-gray-300 mt-8 font-black">One-Time Lifecycle Investment</p></div></div><div className="pt-12 md:pt-20 pb-2 relative z-10"><motion.button whileHover={{ scale: 1.05, backgroundColor: '#000', boxShadow: '0 40px 80px rgba(0,0,0,0.3)' }} whileTap={{ scale: 0.95 }} onClick={onRegisterProfessional} className="bg-ffn-black text-white w-full py-10 rounded-[3rem] text-sm font-black uppercase tracking-[0.5em] shadow-2xl transition-all flex items-center justify-center space-x-4 group"><span>Activate Hub</span><ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></motion.button></div></motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center space-y-16 md:space-y-32 py-24 md:py-64 border-t border-gray-100 relative px-4">
        <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-6xl md:text-[14rem] font-serif italic leading-[1] md:leading-none max-w-[1400px] mx-auto tracking-tighter text-ffn-black">Your Future <br/><span className="text-gradient-vibrant font-bold not-italic">is Fashion.</span></motion.h2>
        
        <div className="flex flex-col items-center space-y-16 md:space-y-24">
          <motion.button whileHover={{ scale: 1.1, rotate: 1 }} whileTap={{ scale: 0.9 }} onClick={onRegisterProfessional} className="bg-ffn-black text-white px-20 md:px-32 py-12 md:py-16 text-xs md:text-sm font-bold uppercase tracking-[0.5em] rounded-[3rem] md:rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.25)]">Claim Your Identity Spot</motion.button>
          
          <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 border-t border-gray-100 pt-16 md:pt-32">
            {[
              { label: 'Mumbai Hub', type: 'Mumbai' },
              { label: 'Paris Studio', type: 'Paris' },
              { label: 'London Agency', type: 'London' },
              { label: 'Milan Collective', type: 'Milan' }
            ].map((hub) => (
              <motion.div 
                key={hub.label}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center space-y-6 group cursor-default"
              >
                <HubGraphic type={hub.type} />
                <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-gray-400 font-black group-hover:text-ffn-black transition-colors">{hub.label}</span>
                <div className="w-1 h-1 rounded-full bg-gray-200 group-hover:bg-ffn-primary group-hover:scale-150 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
