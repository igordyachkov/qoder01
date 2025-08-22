'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border ${className}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand area - left side */}
        <div className="text-xl font-semibold text-foreground">
          Qoder01
        </div>
        
        {/* Wallet connection button - right side */}
        <div className="flex items-center">
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}