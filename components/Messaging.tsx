
import React, { useState } from 'react';
import { Search, Send, Image, Smile, Phone, Video, Info, MoreVertical, Paperclip, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Messaging: React.FC = () => {
  const [activeThread, setActiveThread] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<any[]>([
    { id: 101, sender: 'them', text: 'Hey! I saw your new digital portfolio. The lighting in the third project is incredible.', time: '10:02 AM' },
    { id: 102, sender: 'me', text: 'Thank you so much Marcus! I worked with a local stylist from FFN for that one.', time: '10:05 AM' }
  ]);

  const threads = [
    { id: 1, name: 'Marcus Aurelius', avatar: 'https://picsum.photos/id/65/100/100', lastMsg: 'I loved the latest sketches!', time: '12m', status: 'Online', role: 'Creative Director' },
    { id: 2, name: 'Vogue India', avatar: 'https://picsum.photos/id/68/100/100', lastMsg: 'Contract sent for signature.', time: '2h', status: 'Away', role: 'Agency' },
    { id: 3, name: 'Elite Models', avatar: 'https://picsum.photos/id/64/100/100', lastMsg: 'Are you available for FW?', time: '1d', status: 'Offline', role: 'Casting' },
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMsg]);
    setInputValue('');
  };

  return (
    <div className="h-[calc(100vh-140px)] flex bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl">
      {/* Sidebar */}
      <div className="w-1/3 border-r border-gray-100 flex flex-col bg-gray-50/30">
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-serif italic text-ffn-black tracking-tight">Direct</h2>
            <button className="p-2 bg-white rounded-xl shadow-sm"><Search className="w-4 h-4 text-gray-400" /></button>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-ffn-primary transition-all shadow-sm"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4">
          {threads.map((t, idx) => (
            <motion.div 
              key={t.id}
              whileHover={{ x: 5 }}
              onClick={() => setActiveThread(idx)}
              className={`p-6 rounded-[2rem] flex items-center space-x-4 cursor-pointer transition-all mb-2 ${activeThread === idx ? 'bg-white shadow-xl border border-gray-50' : 'hover:bg-white/50 opacity-60'}`}
            >
              <div className="relative">
                <img src={t.avatar} className="w-14 h-14 rounded-2xl border-2 border-white shadow-md object-cover" alt={t.name} />
                {t.status === 'Online' && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-sm truncate tracking-tight text-ffn-black">{t.name}</h4>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{t.time}</span>
                </div>
                <p className="text-xs text-gray-400 truncate font-light">{t.lastMsg}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header */}
        <header className="px-10 py-6 border-b border-gray-50 flex items-center justify-between">
          <div className="flex items-center space-x-4">
             <div className="w-12 h-12 rounded-2xl overflow-hidden border border-gray-100"><img src={threads[activeThread].avatar} className="w-full h-full object-cover" alt="" /></div>
             <div>
               <span className="block font-bold text-sm tracking-tight text-ffn-black">{threads[activeThread].name}</span>
               <span className="text-[8px] uppercase tracking-widest text-emerald-500 font-bold">{threads[activeThread].status}</span>
             </div>
          </div>
          <div className="flex items-center space-x-6">
             <button className="p-3 text-gray-400 hover:text-ffn-black hover:bg-gray-50 rounded-xl transition-all"><Phone className="w-5 h-5" /></button>
             <button className="p-3 text-gray-400 hover:text-ffn-black hover:bg-gray-50 rounded-xl transition-all"><Video className="w-5 h-5" /></button>
             <button className="p-3 text-gray-400 hover:text-ffn-black hover:bg-gray-50 rounded-xl transition-all"><MoreVertical className="w-5 h-5" /></button>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 p-10 space-y-6 overflow-y-auto no-scrollbar bg-gray-50/20">
          <div className="flex flex-col items-center py-10 opacity-40">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300">Identity Encrypted Feed</span>
          </div>

          <AnimatePresence>
            {messages.map((m) => (
              <motion.div 
                key={m.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-md p-6 rounded-[1.8rem] text-sm leading-relaxed shadow-sm ${m.sender === 'me' ? 'bg-ffn-black text-white rounded-tr-none' : 'bg-white border border-gray-100 text-ffn-black rounded-tl-none'}`}>
                  {m.text}
                  <div className={`text-[8px] mt-3 font-bold uppercase tracking-widest opacity-40 ${m.sender === 'me' ? 'text-white' : 'text-ffn-black'}`}>
                    {m.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input */}
        <div className="p-8 border-t border-gray-50">
          <div className="flex items-center space-x-4">
            <button className="p-4 text-gray-400 hover:text-ffn-black hover:bg-gray-50 rounded-2xl transition-all"><Paperclip className="w-5 h-5" /></button>
            <div className="flex-1 relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Compose message..." 
                className="w-full bg-gray-50 border-none rounded-[2rem] py-5 px-8 text-sm focus:ring-2 focus:ring-ffn-primary transition-all pr-20"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-2 text-gray-400">
                <button className="hover:text-ffn-black transition-colors"><Smile className="w-5 h-5" /></button>
                <button className="hover:text-ffn-black transition-colors"><Mic className="w-5 h-5" /></button>
              </div>
            </div>
            <button 
              onClick={handleSend}
              className="p-5 bg-ffn-black text-white rounded-[1.8rem] shadow-xl hover:bg-ffn-primary transition-all disabled:opacity-50"
              disabled={!inputValue.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Profile Detail Panel */}
      <div className="hidden lg:block w-72 border-l border-gray-100 p-8 space-y-10 bg-gray-50/10">
         <div className="text-center space-y-6">
            <div className="w-32 h-32 rounded-[2.5rem] mx-auto overflow-hidden border-4 border-white shadow-2xl"><img src={threads[activeThread].avatar} className="w-full h-full object-cover" alt="" /></div>
            <div>
              <h3 className="font-serif italic text-2xl text-ffn-black leading-none">{threads[activeThread].name}</h3>
              <p className="text-[9px] uppercase tracking-widest font-bold text-gray-400 mt-2">{threads[activeThread].role}</p>
            </div>
         </div>
         <div className="space-y-6">
            <button className="w-full bg-white border border-gray-100 py-4 rounded-2xl text-[9px] font-bold uppercase tracking-widest shadow-sm hover:border-ffn-primary transition-all">View Mastery Hub</button>
            <div className="space-y-4">
               <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-gray-300">Shared Identity Layers</span>
               <div className="flex -space-x-3 overflow-hidden">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src={`https://picsum.photos/id/${200+i}/100/100`} alt="" /></div>
                 ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
