
import React from 'react';
import { UserRole, User, VerificationLevel, Post, Brand, CastingCall, Photoshoot } from './types';

export const PRICING = {
  PROFILE_LISTING: 399,
  PROFILE_BOOST: 999,
  VERIFICATION: 1499,
  CURRENCY: '₹',
  SYMBOL: 'INR'
};

export const BRAND_SOCIALS = {
  INSTAGRAM: 'fashionfreedomnetwork',
  INSTAGRAM_URL: 'https://instagram.com/fashionfreedomnetwork'
};

export const LOGO_SVG = (
  <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logo-grad-vibrant" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#833ab4'}} />
        <stop offset="50%" style={{stopColor: '#fd1d1d'}} />
        <stop offset="100%" style={{stopColor: '#fcb045'}} />
      </linearGradient>
      <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <rect x="10" y="10" width="80" height="80" rx="28" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.1" />
    <g transform="translate(18, 58)" fill="currentColor">
      <path d="M4 0C4 -8 6 -12 12 -12V-10C9 -10 8 -8 8 -4V0H12V2H8V14H4V2H0V0H4Z" />
      <path d="M22 0C22 -8 24 -12 30 -12V-10C27 -10 26 -8 26 -4V0H30V2H26V14H22V2H18V0H22Z" />
      <path d="M40 0V14H44V6C44 2 46 1 49 1C52 1 54 3 54 7V14H58V6C58 -1 54 -4 49 -4C46 -4 44 -2 42 -1V-3H40V0Z" />
    </g>
    <circle cx="78" cy="35" r="5" fill="url(#logo-grad-vibrant)" filter="url(#logo-glow)" />
  </svg>
);

export const MOCK_TALENT_POOL: User[] = [
  {
    id: 't1',
    username: 'aarav_couture',
    displayName: 'Aarav Sharma',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    coverUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    role: UserRole.DESIGNER,
    verificationLevel: VerificationLevel.APPROVED,
    isVerified: true,
    isBoosted: true,
    bio: 'Minimalist sustainable designer based in New Delhi. Exploring the intersection of traditional craft and modern silhouettes.',
    followersCount: 15200,
    followingCount: 432,
    location: 'New Delhi, India',
    instagramUrl: 'https://instagram.com/aarav',
    completionScore: 95
  },
  {
    id: 't2',
    username: 'kiara_m',
    displayName: 'Kiara Malhotra',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    coverUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200',
    role: UserRole.MODEL,
    verificationLevel: VerificationLevel.FEATURED,
    isVerified: true,
    isBoosted: false,
    bio: 'Editorial and commercial model. Featured in Vogue India & Harper Bazaar.',
    followersCount: 89000,
    followingCount: 120,
    location: 'Mumbai, India',
    height: "5'9\"",
    measurements: '32-24-34',
    completionScore: 100
  },
  {
    id: 't3',
    username: 'neil_strokes',
    displayName: 'Neil D-Souza',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    coverUrl: 'https://images.unsplash.com/photo-1523381235312-3f113d27dea3?auto=format&fit=crop&q=80&w=1200',
    role: UserRole.STYLIST,
    verificationLevel: VerificationLevel.BASIC,
    isVerified: false,
    isBoosted: false,
    bio: 'Celebrity stylist focusing on non-binary fashion and streetwear.',
    followersCount: 5400,
    followingCount: 800,
    location: 'Bangalore, India',
    completionScore: 65
  }
];

export const MOCK_BRANDS: Brand[] = [
  { id: 'b1', name: 'ZARA India', logoUrl: 'https://logo.clearbit.com/zara.com', description: 'Global fast-fashion leader with deep roots in creative excellence.', location: 'Mumbai', website: 'zara.com', industry: 'Fast Fashion' },
  { id: 'b2', name: 'Sabyasachi', logoUrl: 'https://logo.clearbit.com/sabyasachi.com', description: 'Luxury Indian heritage wear redefining global couture.', location: 'Kolkata', website: 'sabyasachi.com', industry: 'Luxury' }
];

export const MOCK_CASTINGS: CastingCall[] = [
  { id: 'c1', brandId: 'b1', brandName: 'ZARA India', brandLogo: 'https://logo.clearbit.com/zara.com', title: 'Summer Campaign 2025', description: 'Looking for 10 fresh faces for our upcoming nationwide summer launch.', location: 'Mumbai', role: 'Lead Model', budget: '₹50,000', deadline: '2025-05-10', category: UserRole.MODEL, requirements: ['Height 5\'8"+', 'Fresh skin', 'Availability in May'] },
  { id: 'c2', brandId: 'b2', brandName: 'Sabyasachi', brandLogo: 'https://logo.clearbit.com/sabyasachi.com', title: 'Heritage Bridal Shoot', description: 'Seeking MUAs and Hair Stylists for an editorial bridal campaign.', location: 'Kolkata', role: 'Chief MUA', budget: '₹75,000', deadline: '2025-06-15', category: UserRole.MUA, requirements: ['Portfolio with bridal work', 'Minimum 5 years experience'] }
];

export const MOCK_SHOOTS: Photoshoot[] = [
  { id: 's1', userId: 't2', title: 'Neo-Tradition Editorial', photographer: 'Rohan Shrestha', mediaUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=1000', category: 'High Fashion', createdAt: '2025-03-01' },
  { id: 's2', userId: 't1', title: 'Minimalist Future', photographer: 'Sashikanth', mediaUrl: 'https://images.unsplash.com/photo-1529139513065-07b3b1bfde91?auto=format&fit=crop&q=80&w=1000', category: 'Lookbook', createdAt: '2025-02-15' }
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1', authorId: 't1', author: MOCK_TALENT_POOL[0], type: 'IMAGE', mediaUrls: ['https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800'], caption: 'Process notes: Raw silk meets recycled metals. #FFN #Sustainability', likes: 1240, comments: 45, createdAt: '2h', tags: ['DESIGNER', 'SUSTAINABLE']
  },
  {
    id: 'p2', authorId: 't2', author: MOCK_TALENT_POOL[1], type: 'IMAGE', mediaUrls: ['https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?auto=format&fit=crop&q=80&w=800'], caption: 'Golden hour in Milan. Editorial shoot for the summer issue.', likes: 5600, comments: 128, createdAt: '5h', tags: ['MODEL', 'MILAN']
  },
  {
    id: 'p3', authorId: 'ffn', author: { username: 'fashionfreedomnetwork', displayName: 'FFN Global' }, type: 'IMAGE', mediaUrls: ['https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800'], caption: 'Discover India’s emerging icons.', likes: 12800, comments: 230, createdAt: '1d', tags: ['DISCOVERY', 'INDIA']
  },
  {
    id: 'p4', authorId: 'ffn', author: { username: 'fashionfreedomnetwork', displayName: 'FFN Global' }, type: 'IMAGE', mediaUrls: ['https://images.unsplash.com/photo-1529139513065-07b3b1bfde91?auto=format&fit=crop&q=80&w=800'], caption: 'Verified talent. Global opportunities.', likes: 9500, comments: 140, createdAt: '2d', tags: ['VERIFIED', 'TALENT']
  }
];
