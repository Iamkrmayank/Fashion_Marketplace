import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import LandingPage from './pages/LandingPage';
import VirtualRunwayPage from './pages/VirtualRunway';
import ConnectWallet from './pages/ConnectWallet';
import AuthPage from './pages/AuthPage';
import ShopPage from './pages/ShopPage';
import SubscriptionPage from './pages/SubscriptionPage';
import DesignerDashboard from './pages/designer/DesignerDashboard';
import VirtualStudio from './pages/designer/VirtualStudio';
import CommunityPage from './pages/CommunityPage';
import MarketplacePage from './pages/marketplace/MarketplacePage';
import NFTMarketplacePage from './pages/nft/NFTMarketplacePage';
import CreateNFTPage from './pages/nft/CreateNFTPage';
import WorkshopsPage from './pages/workshops/WorkshopsPage';
import HostWorkshopPage from './pages/workshops/HostWorkshopPage';
import BrandCollaborationPage from './pages/brands/BrandCollaborationPage';
import ApplyPartnershipPage from './pages/brands/ApplyPartnershipPage';
import BrowseProjectsPage from './pages/brands/BrowseProjectsPage';
import FabricMarketPage from './pages/fabric-market/FabricMarketPage';
import ExploreFabricsPage from './pages/fabric-market/ExploreFabricsPage';
import SellMaterialsPage from './pages/fabric-market/SellMaterialsPage';
import MetaCoinPage from './pages/payment/MetaCoinPage';
import TryOnPage from './pages/TryOnPage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black text-primary-foreground">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/connect" element={<ConnectWallet />} />
        <Route path="/runway" element={<VirtualRunwayPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/designer/dashboard" element={<DesignerDashboard />} />
        <Route path="/designer/studio" element={<VirtualStudio />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/nft-marketplace" element={<NFTMarketplacePage />} />
        <Route path="/nft-marketplace/create" element={<CreateNFTPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/workshops/host" element={<HostWorkshopPage />} />
        <Route path="/brands" element={<BrandCollaborationPage />} />
        <Route path="/brands/apply" element={<ApplyPartnershipPage />} />
        <Route path="/brands/projects" element={<BrowseProjectsPage />} />
        <Route path="/fabric-market" element={<FabricMarketPage />} />
        <Route path="/fabric-market/explore" element={<ExploreFabricsPage />} />
        <Route path="/fabric-market/sell" element={<SellMaterialsPage />} />
        <Route path="/metacoin" element={<MetaCoinPage />} />
        <Route path="/try-on" element={<TryOnPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;