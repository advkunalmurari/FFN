
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, 
  CheckCircle, Sparkles, X, Link, Twitter, Facebook, Copy, 
  Check, Send, Play, Pause, Volume2, VolumeX, Maximize, PlayCircle
} from 'lucide-react';
import { Post } from '../types';

interface FeedCardProps {
  post: Post; 
  index?: number; 
  onSelectPost?: (id: string) => void;
}

export const FeedCard: React.FC<FeedCardProps> = ({ post, index = 0, onSelectPost }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showHeart, setShowHeart] = useState(false);
  const [isMediaLoading, setIsMediaLoading] = useState(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Video State
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const controlsTimeoutRef = useRef<number | null>(null);

  const handleLike = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!isLiked) {
      setIsLiked(true);
      setLikes(prev => prev + 1);
      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 800);
    } else {
      setIsLiked(false);
      setLikes(prev => prev - 1);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Video Handlers
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        triggerAutoHide();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const triggerAutoHide = () => {
    if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2500);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    triggerAutoHide();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const p = (current / videoRef.current.duration) * 100;
      setCurrentTime(current);
      setProgress(p);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = time;
      setProgress(parseFloat(e.target.value));
    }
  };

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}/post/${post.id}`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTwitterShare = () => {
    const url = `${window.location.origin}/post/${post.id}`;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
  };

  const handleFacebookShare = () => {
    const url = `${window.location.origin}/post/${post.id}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const isVideoPost = post.type === 'VIDEO' || post.type === 'REEL';

  const focusRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-ffn-primary";
  const hoverBtnStyles = {
    scale: 1.08,
    borderColor: '#f0f5f9',
    backgroundColor: 'rgba(240, 245, 249, 0.4)'
  };

  return (
    <>
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="heart-pride-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E40303" />
            <stop offset="20%" stopColor="#FF8C00" />
            <stop offset="40%" stopColor="#FFED00" />
            <stop offset="60%" stopColor="#008026" />
            <stop offset="80%" stopColor="#24408E" />
            <stop offset="100%" stopColor="#732982" />
          </linearGradient>
        </defs>
      </svg>

      <motion.article 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-xl group border border-gray-100 transition-all hover:shadow-2xl mb-12 md:mb-24"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 md:p-7">
          <div className="flex items-center space-x-4 md:space-x-5">
             <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-white p-[2px] bg-gradient-to-tr from-ffn-ig-purple via-ffn-ig-red to-ffn-ig-orange"
             >
               <img src={post.author.avatarUrl} className="w-full h-full object-cover rounded-[0.8rem]" alt="" />
             </motion.div>
             <div className="cursor-pointer" onClick={() => onSelectPost?.(post.id)}>
               <div className="flex items-center space-x-2">
                  <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-ffn-black">{post.author.username}</span>
                  {post.author.isVerified && (
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />
                  )}
               </div>
               <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black mt-0.5">{post.author.role} &bull; {post.author.location}</p>
             </div>
          </div>
          <motion.button 
            whileHover={hoverBtnStyles}
            whileTap={{ scale: 0.95 }}
            className={`p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-ffn-black border border-transparent transition-all ${focusRing}`}
          >
            <MoreHorizontal className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>

        {/* Visual Content Container */}
        <div 
          className="aspect-[4/5] bg-gray-100 relative overflow-hidden cursor-pointer group/media" 
          onMouseEnter={() => isVideoPost && setShowControls(true)}
          onMouseMove={isVideoPost ? handleMouseMove : undefined}
          onMouseLeave={() => isVideoPost && setShowControls(false)}
          onDoubleClick={handleLike}
          onClick={(e) => {
            if (isVideoPost) togglePlay(e);
            else onSelectPost?.(post.id);
          }}
        >
          <AnimatePresence>
            {isMediaLoading && (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 shimmer-bg animate-shimmer"
              />
            )}
          </AnimatePresence>

          {!isVideoPost ? (
            <motion.img 
              src={post.mediaUrls[0]} 
              onLoad={() => setIsMediaLoading(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: isMediaLoading ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-105" 
              alt="Fashion Editorial" 
            />
          ) : (
            <div className="relative w-full h-full">
              <video 
                ref={videoRef}
                src={post.mediaUrls[0]}
                onLoadedData={() => setIsMediaLoading(false)}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />
              
              {/* Custom Controls Overlay */}
              <AnimatePresence>
                {(showControls || !isPlaying) && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/20 flex flex-col justify-between p-6 md:p-10 pointer-events-none"
                  >
                    {/* Centered Play Button */}
                    <div className="flex-1 flex items-center justify-center">
                      <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.15 }}
                        className="p-12 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 text-white pointer-events-auto shadow-2xl group/play"
                        onClick={togglePlay}
                      >
                        {isPlaying ? 
                          <Pause className="w-10 h-10 fill-white transition-transform group-hover/play:scale-90" /> : 
                          <Play className="w-10 h-10 fill-white ml-2 transition-transform group-hover/play:scale-110" />
                        }
                      </motion.button>
                    </div>

                    {/* Bottom Control Bar */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="glass-card-vibrant p-5 md:p-6 rounded-[2.5rem] border border-white/30 flex flex-col space-y-4 pointer-events-auto shadow-2xl relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <button onClick={togglePlay} className="text-ffn-black hover:text-ffn-primary transition-all focus:outline-none">
                            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                          </button>
                          
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black tracking-tighter text-ffn-black uppercase">
                              {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-5">
                          <button onClick={toggleMute} className="text-ffn-black hover:text-ffn-primary transition-all focus:outline-none p-1">
                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                          </button>
                          <button className="text-ffn-black hover:text-ffn-primary transition-all focus:outline-none">
                            <Maximize className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Timeline Scrub */}
                      <div className="relative group/scrub h-4 flex items-center">
                        <div className="absolute inset-0 bg-ffn-black/5 rounded-full h-1.5 my-auto overflow-hidden">
                          <motion.div 
                            className="h-full bg-ffn-primary shadow-[0_0_15px_rgba(99,102,241,0.8)]"
                            style={{ width: `${progress}%` }}
                            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                          />
                        </div>
                        <input 
                          type="range"
                          min="0"
                          max="100"
                          step="0.1"
                          value={progress}
                          onChange={handleScrub}
                          className="absolute inset-0 w-full h-full bg-transparent appearance-none cursor-pointer opacity-0 z-10"
                        />
                        {/* Interactive Handle */}
                        <motion.div 
                          className="absolute w-3.5 h-3.5 bg-white border-2 border-ffn-primary rounded-full shadow-lg pointer-events-none z-20 opacity-0 group-hover/scrub:opacity-100 transition-opacity"
                          style={{ left: `calc(${progress}% - 7px)` }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Initial Play Signal for Video */}
              <AnimatePresence>
                {!isPlaying && !showControls && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-6 border border-white/20 shadow-2xl">
                       <PlayCircle className="w-12 h-12 text-white fill-white/20" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Top Right 'Motion' Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-ffn-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl flex items-center space-x-2 text-white">
                  <Play className="w-3 h-3 fill-current" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em]">{post.type}</span>
                </div>
              </div>
            </div>
          )}
          
          <AnimatePresence>
            {showHeart && (
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [0.5, 1.2, 0.9, 1], 
                  opacity: [0, 1, 1, 0] 
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, times: [0, 0.3, 0.6, 1] }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
              >
                <Heart className="w-24 md:w-32 h-24 md:h-32 text-white fill-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
              </motion.div>
            )}
          </AnimatePresence>

          {post.author.isBoosted && (
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 glass-card-vibrant px-4 md:px-6 py-2 rounded-full flex items-center space-x-2 md:space-x-3 z-20">
               <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-ffn-accent animate-pulse" />
               <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-ffn-black">Boosted</span>
            </div>
          )}
        </div>

        {/* Interaction Bar */}
        <div className="p-6 md:p-8 pt-5 md:pt-6 space-y-4 md:space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 md:space-x-8">
              <motion.button 
                whileHover={hoverBtnStyles}
                whileTap={{ scale: 0.8 }}
                onClick={(e) => handleLike(e)} 
                className={`group relative p-1.5 md:p-2 rounded-full transition-all duration-300 border border-transparent ${focusRing}`}
              >
                <AnimatePresence>
                  {isLiked && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1.4, opacity: 0.4 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0 bg-gradient-pride blur-xl rounded-full animate-pulse-slow"
                    />
                  )}
                </AnimatePresence>

                <motion.div
                  initial={false}
                  animate={{ 
                    scale: isLiked ? [1, 1.6, 0.8, 1.15, 1] : 1,
                  }}
                  transition={{ 
                    duration: 0.6, 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15 
                  }}
                  className="relative z-10"
                >
                  <Heart 
                    style={{ 
                      fill: isLiked ? 'url(#heart-pride-grad)' : 'transparent',
                      stroke: isLiked ? 'none' : 'currentColor'
                    }}
                    className={`w-7 h-7 md:w-8 md:h-8 transition-all duration-500 ease-out ${isLiked ? '' : 'text-ffn-black group-hover:text-ffn-accent'}`} 
                  />
                </motion.div>
              </motion.button>

              <motion.button 
                whileHover={hoverBtnStyles}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectPost?.(post.id)}
                className={`rounded-full p-1.5 md:p-2 border border-transparent transition-all ${focusRing}`}
              >
                <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-ffn-black hover:text-ffn-primary transition-colors" />
              </motion.button>

              <motion.button 
                whileHover={{ ...hoverBtnStyles, rotate: -15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsShareModalOpen(true)}
                className={`rounded-full p-1.5 md:p-2 border border-transparent transition-all ${focusRing}`}
              >
                <Share2 className="w-7 h-7 md:w-8 md:h-8 text-ffn-black hover:text-ffn-primary transition-all" />
              </motion.button>
            </div>

            <motion.button 
              whileHover={hoverBtnStyles}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full p-1.5 md:p-2 border border-transparent transition-all ${focusRing}`}
            >
              <Bookmark className="w-7 h-7 md:w-8 md:h-8 text-ffn-black hover:text-ffn-primary transition-colors" />
            </motion.button>
          </div>

          <div className="space-y-2 md:space-y-3">
            <p className="text-[10px] md:text-sm font-black uppercase tracking-widest leading-none text-ffn-black">
              {likes.toLocaleString()} Professionals
            </p>
            <p className="text-xs md:text-md text-gray-600 font-light leading-relaxed">
              <span className="font-black text-ffn-black mr-3 md:mr-4 uppercase text-[10px] md:text-xs tracking-widest cursor-pointer hover:text-ffn-primary transition-colors" onClick={() => onSelectPost?.(post.id)}>{post.author.username}</span>
              {post.caption}
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3 pt-1">
              {post.tags.map(tag => (
                <button key={tag} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-ffn-primary/50 hover:text-ffn-primary transition-colors focus:outline-none">
                  #{tag}
                </button>
              ))}
            </div>
            <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-300 font-black pt-2 md:pt-4">
              {post.createdAt} &bull; Editorial Hub
            </p>
          </div>
        </div>
      </motion.article>

      {/* Share Modal */}
      <AnimatePresence>
        {isShareModalOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShareModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="bg-white rounded-[3rem] md:rounded-[3.5rem] w-full max-w-md overflow-hidden relative shadow-2xl z-10 border border-white/20"
            >
              <div className="p-8 md:p-10 space-y-8 md:space-y-10">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3xl font-serif italic text-ffn-black">Share Content</h3>
                    <p className="text-[8px] uppercase tracking-[0.4em] text-gray-400 font-black">Identity Protocol</p>
                  </div>
                  <button onClick={() => setIsShareModalOpen(false)} className="p-3 bg-gray-50 rounded-2xl focus:outline-none">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-4 md:gap-6">
                  {[
                    { icon: Link, label: 'Link', action: handleCopyLink, highlight: copied },
                    { icon: Send, label: 'Direct', action: () => { /* Handle direct message trigger if applicable */ } },
                    { icon: Twitter, label: 'X', action: handleTwitterShare },
                    { icon: Facebook, label: 'FB', action: handleFacebookShare },
                  ].map((option, i) => (
                    <button key={option.label} onClick={option.action} className="flex flex-col items-center space-y-2 group focus:outline-none">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] md:rounded-[1.8rem] flex items-center justify-center transition-all ${option.highlight ? 'bg-ffn-primary text-white shadow-xl' : 'bg-gray-50 text-gray-400 group-hover:bg-ffn-black group-hover:text-white'}`}>
                        {option.highlight ? <Check className="w-5 h-5" /> : <option.icon className="w-5 h-5 md:w-6 md:h-6" />}
                      </div>
                      <span className="text-[8px] md:text-[9px] uppercase tracking-widest font-black text-gray-400">{option.highlight ? 'Copied' : option.label}</span>
                    </button>
                  ))}
                </div>

                <div className="space-y-6">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-black">Suggest to Professionals</p>
                  <div className="space-y-3 max-h-48 overflow-y-auto no-scrollbar pr-1">
                    {[
                      { name: 'milan_agency', role: 'Global Scout' },
                      { name: 'vogue_editorial', role: 'Publisher' },
                      { name: 'paris_casting', role: 'Director' }
                    ].map((entity, i) => (
                      <div key={entity.name} className="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-100 transition-all cursor-pointer group">
                        <div className="flex items-center space-x-3">
                           <div className="w-10 h-10 md:w-12 md:h-12 rounded-[0.8rem] md:rounded-[1rem] bg-gray-200" />
                           <div>
                             <span className="block text-[10px] md:text-xs font-black text-ffn-black uppercase tracking-widest">{entity.name}</span>
                             <span className="block text-[7px] md:text-[8px] uppercase tracking-widest text-gray-400 font-black">{entity.role}</span>
                           </div>
                        </div>
                        <button className="bg-white px-5 md:px-6 py-2 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest shadow-sm group-hover:bg-ffn-black group-hover:text-white transition-all focus:outline-none">Send</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
