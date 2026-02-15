
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Directory } from './components/Directory';
import { ProfilePage } from './components/ProfilePage';
import { ApplyNow } from './components/ApplyNow';
import { Feed } from './components/Feed';
import { Marketplace } from './components/Marketplace';
import { Messaging } from './components/Messaging';
import { Explore } from './components/Explore';
import { Castings } from './components/Castings';
import { Network } from './components/Network';
import { Motion } from './components/Motion';
import { Events } from './components/Events';
import { Journal } from './components/Journal';
import { Auth } from './components/Auth';
import { MyProfile } from './components/MyProfile';
import { PostDetail } from './components/PostDetail';
import { Photoshoots } from './components/Photoshoots';
import { Brands } from './components/Brands';
import { RegisterProfessional } from './components/RegisterProfessional';
import { PrivacyPolicy, TermsAndConditions, RefundPolicy, CookiePolicy } from './components/LegalPages';
import { AboutPage, FAQPage, CommunityGuidelines, PricingPage, VerificationPage } from './components/InfoPages';
import { ContactPage } from './components/Contact';
import { TrendLab } from './components/TrendLab';
import { MOCK_TALENT_POOL, MOCK_POSTS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedTalentId, setSelectedTalentId] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('ffn_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData: any) => {
    setUser(userData);
    localStorage.setItem('ffn_user', JSON.stringify(userData));
    setActiveTab('home');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('ffn_user');
    setActiveTab('home');
  };

  const handleSelectTalent = (id: string) => {
    setSelectedTalentId(id);
    setActiveTab('profile-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (id: string) => {
    setSelectedPostId(id);
    setActiveTab('post-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (activeTab === 'profile-view' && selectedTalentId) {
      const talent = MOCK_TALENT_POOL.find(t => t.id === selectedTalentId);
      if (talent) return <ProfilePage user={talent} onBack={() => setActiveTab('directory')} />;
    }

    if (activeTab === 'post-view' && selectedPostId) {
      const post = MOCK_POSTS.find(p => p.id === selectedPostId);
      if (post) return <PostDetail post={post} onBack={() => setActiveTab('feed')} />;
    }

    switch (activeTab) {
      case 'home': return <Home onApply={() => setActiveTab('register-professional')} onDirectory={() => setActiveTab('directory')} onRegisterProfessional={() => setActiveTab('register-professional')} />;
      case 'feed': return <Feed onSelectPost={handleSelectPost} />;
      case 'explore': return <Explore />;
      case 'motion': return <Motion />;
      case 'trend-lab': return <TrendLab />;
      case 'directory': return <Directory onSelectTalent={handleSelectTalent} onRegisterProfessional={() => setActiveTab('register-professional')} />;
      case 'shoots': return <Photoshoots />;
      case 'brands': return <Brands />;
      case 'castings': return <Castings />;
      case 'events': return <Events />;
      case 'journal': return <Journal />;
      case 'marketplace': return <Marketplace />;
      case 'network': return <Network />;
      case 'messages': return user ? <Messaging /> : <Auth onLogin={handleLogin} />;
      case 'auth': return <Auth onLogin={handleLogin} />;
      case 'my-profile': return user ? <MyProfile user={user} onLogout={handleLogout} /> : <Auth onLogin={handleLogin} />;
      case 'register-professional': return <RegisterProfessional onSuccess={handleLogin} />;
      case 'apply': return <ApplyNow onSuccess={() => setActiveTab('directory')} />;
      
      /* Legal & Informational Routes */
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'privacy-policy': return <PrivacyPolicy />;
      case 'terms-and-conditions': return <TermsAndConditions />;
      case 'refund-policy': return <RefundPolicy />;
      case 'cookie-policy': return <CookiePolicy />;
      case 'faq': return <FAQPage />;
      case 'community-guidelines': return <CommunityGuidelines />;
      case 'pricing': return <PricingPage onRegister={() => setActiveTab('register-professional')} />;
      case 'verification': return <VerificationPage />;

      default: return <Home onApply={() => setActiveTab('register-professional')} onDirectory={() => setActiveTab('directory')} onRegisterProfessional={() => setActiveTab('register-professional')} />;
    }
  };

  return (
    <Layout activeTab={activeTab === 'profile-view' ? 'directory' : (activeTab === 'post-view' ? 'feed' : activeTab)} onTabChange={setActiveTab} currentUser={user}>
      {renderContent()}
    </Layout>
  );
};

export default App;
