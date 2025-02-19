import { MainNav } from '@/components/main-nav';
import { Sidebar } from '@/components/sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <Sidebar />
      <main className="ml-16 lg:ml-64 transition-all duration-300 ease-in-out">
        <div className="p-8">
          <h1 className="text-2xl font-bold">Welcome to Dark Pools Dashboard</h1>
        </div>
      </main>
    </div>
  );
}