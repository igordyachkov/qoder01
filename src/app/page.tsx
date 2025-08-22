import { PageLayout } from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Welcome to Web3
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect your wallet to get started
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
