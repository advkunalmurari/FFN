
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Users, Search, MessageCircle, ShoppingBag, Compass, 
  Briefcase, Globe, Menu, X, ArrowRight, Play, Calendar, 
  BookOpen, LogIn, User as UserIcon, ChevronLeft, ChevronRight,
  Camera, Briefcase as BrandIcon, Sparkles, Info, Mail, PlusCircle, BrainCircuit
} from 'lucide-react';
import { LOGO_SVG, BRAND_SOCIALS } from '../constants';
import { CreatePostModal } from './CreatePostModal';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  currentUser?: any;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange, currentUser }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Discover' },
    { id: 'feed', icon: Search, label: 'Feed' },
    { id: 'explore', icon: Compass, label: 'Explore' },
    { id: 'motion', icon: Play, label: 'Motion' },
    { id: 'trend-lab', icon: BrainCircuit, label: 'Trend Lab' },
    { id: 'directory', icon: Users, label: 'Talent' },
    { id: 'shoots', icon: Camera, label: 'Shoots' },
    { id: 'brands', icon: BrandIcon, label: 'Brands' },
    { id: 'castings', icon: Briefcase, label: 'Castings' },
    { id: 'events', icon: Calendar, label: 'Events' },
    { id: 'journal', icon: BookOpen, label: 'Journal' },
    { id: 'marketplace', icon: ShoppingBag, label: 'Market' },
    { id: 'network', icon: Globe, label: 'Network' },
    { id: 'about', icon: Info, label: 'About FFN' },
    { id: 'contact', icon: Mail, label: 'Support' },
  ];

  const sidebarVariants = {
    expanded: { width: '320px' },
    collapsed: { width: '100px' }
  };

  const footerLinks = [
    { label: 'Company', items: [
      { id: 'about', label: 'About FFN' },
      { id: 'contact', label: 'Contact Us' },
      { id: 'pricing', label: 'Pricing Hub' },
      { id: 'verification', label: 'Identity Verification' }
    ]},
    { label: 'Support', items: [
      { id: 'faq', label: 'Help & FAQ' },
      { id: 'community-guidelines', label: 'Guidelines' },
      { id: 'journal', label: 'Fashion Journal' }
    ]},
    { label: 'Legal', items: [
      { id: 'privacy-policy', label: 'Privacy Policy' },
      { id: 'terms-and-conditions', label: 'Terms of Use' },
      { id: 'refund-policy', label: 'Refund Policy' },
      { id: 'cookie-policy', label: 'Cookie Policy' }
    ]}
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-ffn-primary selection:text-white flex flex-col lg:flex-row overflow-x-hidden bg-ffn-bg">
      {/* Desktop Sidebar */}
      <motion.aside 
        initial="expanded"
        animate={isSidebarCollapsed ? "collapsed" : "expanded"}
        variants={sidebarVariants}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="hidden lg:flex flex-col h-screen fixed left-0 top-0 border-r border-gray-100 z-[100] bg-white/95 backdrop-blur-3xl shadow-2xl"
      >
        <div className={`flex flex-col h-full ${isSidebarCollapsed ? 'p-6' : 'p-10'}`}>
          <div className="mb-14 flex items-center justify-between">
            <div className="flex items-center space-x-5 cursor-pointer overflow-hidden" onClick={() => onTabChange('home')}>
              <motion.div whileHover={{ rotate: 360, scale: 1.1 }} className="drop-shadow-lg flex-none">{LOGO_SVG}</motion.div>
              {!isSidebarCollapsed && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col leading-none">
                  <span className="font-serif font-bold text-3xl tracking-tighter text-ffn-black">ffn</span>
                  <span className="text-[7px] uppercase tracking-[0.6em] text-ffn-steel mt-1 font-black whitespace-nowrap">Identity Hub</span>
                </motion.div>
              )}
            </div>
            {!isSidebarCollapsed && (
              <button onClick={() => setIsSidebarCollapsed(true)} className="p-2 rounded-xl text-gray-400 hover:text-ffn-black transition-colors focus:outline-none"><ChevronLeft className="w-5 h-5" /></button>
            )}
          </div>
          {isSidebarCollapsed && (
            <button onClick={() => setIsSidebarCollapsed(false)} className="mx-auto mb-8 p-3 rounded-2xl text-ffn-primary bg-ffn-primary/5 hover:bg-ffn-primary/10 transition-colors shadow-inner focus:outline-none"><ChevronRight className="w-6 h-6" /></button>
          )}

          {/* Create Button for Professionals */}
          {currentUser && (
            <motion.button 
              onClick={() => setIsCreateModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mb-10 bg-ffn-black text-white rounded-3xl flex items-center shadow-xl hover:bg-ffn-primary transition-all overflow-hidden ${isSidebarCollapsed ? 'p-4 justify-center' : 'p-5 space-x-5'}`}
            >
              <PlusCircle className="w-5 h-5 flex-none" />
              {!isSidebarCollapsed && <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Create Mastery</span>}
            </motion.button>
          )}

          <nav className="flex-1 space-y-1 overflow-y-auto no-scrollbar pr-2 pb-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center w-full text-left p-3.5 rounded-3xl transition-all relative group focus:outline-none
                  ${isSidebarCollapsed ? 'justify-center' : 'space-x-5'}
                  ${activeTab === item.id ? 'bg-ffn-black text-white font-bold shadow-xl' : 'text-gray-400 hover:text-ffn-black'}`}
              >
                {activeTab === item.id && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-ffn-black rounded-3xl -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                )}
                <item.icon className={`w-4 h-4 transition-all duration-300 ${activeTab === item.id ? 'scale-110' : 'group-hover:text-ffn-primary'}`} />
                {!isSidebarCollapsed && <span className="text-[8px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">{item.label}</span>}
              </button>
            ))}
          </nav>
          <div className="mt-4 space-y-6 pt-6 border-t border-gray-50 overflow-hidden">
            {currentUser ? (
              <button onClick={() => onTabChange('my-profile')} className={`flex items-center w-full text-left rounded-3xl transition-all border focus:outline-none ${isSidebarCollapsed ? 'p-2 justify-center' : 'p-4 space-x-4'} ${activeTab === 'my-profile' ? 'bg-ffn-black text-white border-ffn-black shadow-xl' : 'bg-gray-50 border-transparent text-ffn-black'}`}>
                <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-white shadow-sm flex-none"><img src={currentUser.avatarUrl} className="w-full h-full object-cover" alt="" /></div>
                {!isSidebarCollapsed && <div className="flex flex-col leading-tight overflow-hidden"><span className="text-[9px] font-bold uppercase tracking-widest truncate">{currentUser.displayName}</span><span className="text-[7px] text-gray-400 uppercase font-black">Professional Identity</span></div>}
              </button>
            ) : (
              <button onClick={() => onTabChange('auth')} className={`flex items-center w-full text-left rounded-3xl transition-all bg-ffn-black text-white shadow-2xl group relative overflow-hidden focus:outline-none ${isSidebarCollapsed ? 'p-2 justify-center h-14' : 'p-5 space-x-4'}`}><LogIn className="w-5 h-5 relative z-10" />{!isSidebarCollapsed && <div className="flex flex-col leading-tight relative z-10"><span className="text-[10px] font-bold uppercase tracking-[0.2em]">Sign In</span><span className="text-[7px] text-white/40 uppercase font-black">Entry Protocol</span></div>}</button>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Create Modal */}
      <AnimatePresence>
        {isCreateModalOpen && (
          <CreatePostModal 
            onClose={() => setIsCreateModalOpen(false)} 
            onPostCreated={(post) => {
              console.log("Post Created:", post);
              setIsCreateModalOpen(false);
              onTabChange('feed');
            }}
          />
        )}
      </AnimatePresence>

      {/* Main Container */}
      <div className="flex-1 flex flex-col">
        {/* Top Floating Nav for Primary Conversion */}
        <header className="fixed top-0 right-0 left-0 lg:left-[320px] h-20 lg:h-32 flex items-center justify-between px-8 lg:px-20 z-[90] pointer-events-none">
          <div className="pointer-events-auto lg:hidden">
             {/* Mobile Brand already in header */}
          </div>
          <div className="flex items-center space-x-6 pointer-events-auto ml-auto">
             {!currentUser && (
               <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onTabChange('register-professional')}
                className="bg-ffn-black text-white px-8 py-4 lg:px-12 lg:py-6 rounded-full text-[9px] lg:text-[10px] font-black uppercase tracking-[0.5em] shadow-3xl flex items-center space-x-4 border border-white/10 transition-all hover:bg-ffn-primary"
               >
                 <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Sparkles className="w-5 h-5 text-ffn-accent" /></motion.div>
                 <span>Register as Professional</span>
               </motion.button>
             )}
          </div>
        </header>

        <motion.main 
          animate={{ marginLeft: isSidebarCollapsed ? '100px' : '320px', paddingTop: '160px' }} 
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} 
          className="flex-1 min-h-screen relative lg:block hidden overflow-y-auto no-scrollbar pb-10"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
                {children}
              </motion.div>
            </AnimatePresence>
            
            {/* Page Footer Section */}
            <footer className="mt-64 pb-20 border-t border-gray-100 pt-32">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10">{LOGO_SVG}</div>
                    <span className="font-serif font-bold text-2xl tracking-tighter text-ffn-black">ffn</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-light italic">
                    The global identity infrastructure for the modern fashion professional. Elevating talent through visual sovereignty.
                  </p>
                  <div className="flex items-center space-x-6">
                    <button onClick={() => window.open(BRAND_SOCIALS.INSTAGRAM_URL)} className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:text-ffn-primary transition-colors"><MessageCircle className="w-5 h-5" /></button>
                    <button className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:text-ffn-primary transition-colors"><Globe className="w-5 h-5" /></button>
                  </div>
                </div>

                {footerLinks.map((column) => (
                  <div key={column.label} className="space-y-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-ffn-black">{column.label}</h4>
                    <nav className="flex flex-col space-y-4">
                      {column.items.map((item) => (
                        <button 
                          key={item.id} 
                          onClick={() => { onTabChange(item.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          className="text-left text-[11px] font-bold text-gray-400 hover:text-ffn-black uppercase tracking-widest transition-colors"
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                ))}
              </div>
              <div className="mt-32 pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8">
                <p className="text-[9px] uppercase tracking-[0.5em] font-black text-gray-300">
                  &copy; {new Date().getFullYear()} Fashion Freedom Network. All Identity Rights Reserved.
                </p>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-3 text-[9px] font-black uppercase tracking-widest text-emerald-500">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span>Global Nodes Active</span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </motion.main>
      </div>

      {/* Mobile Header */}
      <header className="lg:hidden w-full h-24 border-b border-gray-50 flex items-center justify-between px-8 fixed top-0 bg-white/95 backdrop-blur-3xl z-[200] shadow-sm">
        <div onClick={() => onTabChange('home')} className="flex items-center space-x-4"><div className="w-10 h-10 drop-shadow-md">{LOGO_SVG}</div><div className="flex flex-col leading-none"><span className="font-serif font-bold text-2xl tracking-tighter text-ffn-black">ffn</span><span className="text-[6px] uppercase tracking-[0.6em] text-ffn-steel font-black">Identity Lab</span></div></div>
        <div className="flex items-center space-x-4">{currentUser && <button onClick={() => onTabChange('my-profile')} className="w-10 h-10 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"><img src={currentUser.avatarUrl} className="w-full h-full object-cover" alt="" /></button>}<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-3.5 text-ffn-black bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors focus:outline-none">{isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button></div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="lg:hidden fixed inset-0 bg-white z-[250] p-8 flex flex-col pt-32 overflow-y-auto">
            <div className="flex items-center justify-between mb-12"><h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-ffn-black opacity-30">Global Navigation</h2><button onClick={() => setIsMobileMenuOpen(false)} className="p-4 bg-gray-50 rounded-2xl"><X className="w-6 h-6" /></button></div>
            <nav className="grid grid-cols-2 gap-4">
              {navItems.map((item, i) => (
                <motion.button 
                  key={item.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.05 }} 
                  onClick={() => { onTabChange(item.id); setIsMobileMenuOpen(false); window.scrollTo({ top: 0 }); }} 
                  className={`flex flex-col items-center justify-center p-8 rounded-[2.5rem] border ${activeTab === item.id ? 'bg-ffn-black text-white border-ffn-black shadow-2xl' : 'bg-gray-50 text-gray-400 border-transparent'}`}
                >
                  <item.icon className="w-7 h-7 mb-4" />
                  <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                </motion.button>
              ))}
            </nav>
            <div className="mt-12 space-y-4">
               {!currentUser ? (
                  <button onClick={() => { onTabChange('register-professional'); setIsMobileMenuOpen(false); }} className="w-full py-6 bg-ffn-black text-white rounded-3xl text-[10px] font-bold uppercase tracking-widest shadow-xl">Join as Professional</button>
               ) : (
                 <button onClick={() => { onTabChange('my-profile'); setIsMobileMenuOpen(false); }} className="w-full py-6 bg-white border border-gray-100 text-ffn-black rounded-3xl text-[10px] font-bold uppercase tracking-widest">My Profile Hub</button>
               )}
            </div>
            {/* Mobile Footer Links */}
            <div className="mt-12 py-12 border-t border-gray-100 grid grid-cols-2 gap-4">
               {footerLinks.flatMap(c => c.items).map(item => (
                 <button key={item.id} onClick={() => { onTabChange(item.id); setIsMobileMenuOpen(false); }} className="text-left text-[8px] font-black uppercase tracking-widest text-gray-400">{item.label}</button>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="lg:hidden flex-1 min-h-screen relative pt-32 pb-10"><div className="max-w-7xl mx-auto px-6"><AnimatePresence mode="wait"><motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{children}</motion.div></AnimatePresence></div></main>
    </div>
  );
};
