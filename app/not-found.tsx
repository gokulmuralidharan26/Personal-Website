import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-4">
        <div className="text-7xl font-bold gradient-text">404</div>
        <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
        <p className="text-foreground-3 max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-colors"
        >
          <ArrowLeft size={15} />
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
