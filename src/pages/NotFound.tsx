import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Link href="/">
          <a className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90">
            Go home
          </a>
        </Link>
      </div>
    </div>
  );
}

