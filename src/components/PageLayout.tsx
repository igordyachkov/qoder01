import { Header } from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main content with top padding to account for fixed header */}
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}