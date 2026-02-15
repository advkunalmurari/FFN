
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Github, Chrome, Sparkles, Loader2 } from 'lucide-react';
import { LOGO_SVG } from '../constants';

interface AuthProps {
  onLogin: (userData: any) => void;
}

export const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    onLogin({
      id: 'me',
      username: 'creative_director',
      displayName: 'Alex Sterling',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      role: 'DESIGNER',
      isVerified: true
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100"
      >
        {/* Visual Side */}
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-ffn-black">
          <img 
            src="https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover opacity-60" 
            alt="Fashion Editorial" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ffn-black via-ffn-black/20 to-transparent" />
          <div className="absolute bottom-16 left-16 right-16 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="text-white w-10 h-10">{LOGO_SVG}</div>
              <span className="font-serif text-3xl font-bold text-white tracking-tighter">FFN</span>
            </div>
            <h2 className="text-5xl font-serif italic text-white leading-tight">The architecture of creative freedom.</h2>
            <p className="text-white/60 text-sm font-light uppercase tracking-widest leading-relaxed">Join 50k+ verified professionals globally.</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <div className="space-y-12">
            <header className="space-y-4">
              <div className="flex items-center space-x-2 text-ffn-primary">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Professional Portal</span>
              </div>
              <h1 className="text-5xl font-serif italic text-ffn-black tracking-tight">
                {isLogin ? 'Welcome Back' : 'Join the Network'}
              </h1>
            </header>

            <form onSubmit={handleSubmit} className="space-y-8">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4"
                  >
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                      <input 
                        type="text" 
                        required 
                        className="w-full bg-gray-50 border border-transparent focus:border-ffn-primary focus:bg-white rounded-2xl py-5 pl-14 pr-6 text-sm transition-all" 
                        placeholder="John Doe" 
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Professional Email</label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-gray-50 border border-transparent focus:border-ffn-primary focus:bg-white rounded-2xl py-5 pl-14 pr-6 text-sm transition-all" 
                    placeholder="email@professional.com" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Security Key</label>
                  {isLogin && <button type="button" className="text-[10px] font-bold text-ffn-primary uppercase tracking-widest">Forgot?</button>}
                </div>
                <div className="relative">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input 
                    type="password" 
                    required 
                    className="w-full bg-gray-50 border border-transparent focus:border-ffn-primary focus:bg-white rounded-2xl py-5 pl-14 pr-6 text-sm transition-all" 
                    placeholder="••••••••" 
                  />
                </div>
              </div>

              <button 
                disabled={isLoading}
                type="submit" 
                className="w-full bg-ffn-black text-white py-6 rounded-2xl text-[11px] font-bold uppercase tracking-[0.4em] flex items-center justify-center space-x-3 hover:bg-ffn-primary transition-all shadow-xl disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>{isLogin ? 'Authenticate' : 'Establish Identity'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400"><span className="bg-white px-4">Or Connect Via</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-3 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                <Chrome className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Google</span>
              </button>
              <button className="flex items-center justify-center space-x-3 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                <Github className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">GitHub</span>
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 font-light">
              {isLogin ? "Don't have a professional identity?" : "Already part of the network?"}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 font-bold text-ffn-black hover:text-ffn-primary transition-colors underline underline-offset-4"
              >
                {isLogin ? 'Apply Now' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
