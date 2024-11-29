import React from 'react';
// import { HeroSection } from '@/components/home/HeroSection.tsx';
// import { FeaturesSection } from './Home/FeaturesSection';
// import { ProductsSection } from './Home/ProductsSection';
// import { IndustriesSection } from './Home/IndustriesSection';
// import { PricingSection } from './Home/PricingSection';
// import { TemplatesSection } from './Home/TemplatesSection';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* <HeroSection /> */}

      {/* Features Section - Dark */}
      <div className="bg-gray-900 py-20">{/* <FeaturesSection /> */}</div>

      {/* Products Section - Light */}
      <div className="bg-white py-20">{/* <ProductsSection /> */}</div>

      {/* Industries Section - Dark */}
      <div className="bg-gray-900 py-20">{/* <IndustriesSection /> */}</div>

      {/* Pricing Section - Light */}
      <div className="bg-white py-0">{/* <PricingSection /> */}</div>

      {/* Templates Section - Dark */}
      <div className="bg-gray-900 py-20">{/* <TemplatesSection /> */}</div>
    </div>
  );
}
