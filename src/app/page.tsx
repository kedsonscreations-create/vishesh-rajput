'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Dashboard } from '@/components/sections/Dashboard';
import { Pricing } from '@/components/sections/Pricing';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b1020] via-[#1a1f3a] to-[#0b1020]">
      <Navbar />
      <Hero />
      <Features />
      <Dashboard />
      <Pricing />
      <Footer />
    </main>
  );
}