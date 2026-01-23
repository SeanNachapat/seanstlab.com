import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-8xl font-pixel font-bold mb-4 animate-bounce">Σ(OДOᵕ)</h2>
      <p className="py-4">404 | Page not Found.</p>
      <Link 
        href="/" 
      >
        Return Home
      </Link>
    </main>
  );
}
