
export enum UserRole {
  MODEL = 'MODEL',
  DESIGNER = 'DESIGNER',
  STYLIST = 'STYLIST',
  MUA = 'MUA',
  SINGER = 'SINGER',
  DANCER = 'DANCER',
  ARTIST = 'ARTIST',
  BRAND = 'BRAND'
}

export enum VerificationLevel {
  BASIC = 0,
  VERIFIED = 1,
  FEATURED = 2,
  APPROVED = 3
}

export interface User {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string;
  coverUrl: string;
  role: UserRole;
  verificationLevel: VerificationLevel;
  isVerified: boolean;
  isBoosted: boolean;
  bio: string;
  followersCount: number;
  followingCount: number;
  location: string;
  instagramUrl?: string;
  hourlyRate?: number;
  skills?: string[];
  height?: string;
  measurements?: string;
  completionScore?: number;
}

export interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  location: string;
  website: string;
  industry: string;
}

export interface CastingCall {
  id: string;
  brandId: string;
  brandName: string;
  brandLogo: string;
  title: string;
  description: string;
  location: string;
  role: string;
  budget: string;
  deadline: string;
  category: UserRole;
  requirements: string[];
}

export interface Photoshoot {
  id: string;
  userId: string;
  title: string;
  photographer: string;
  mediaUrl: string;
  category: string;
  createdAt: string;
}

export interface Post {
  id: string;
  authorId: string;
  author: Partial<User>;
  type: 'IMAGE' | 'VIDEO' | 'REEL';
  mediaUrls: string[];
  caption: string;
  likes: number;
  comments: number;
  createdAt: string;
  tags: string[];
}
