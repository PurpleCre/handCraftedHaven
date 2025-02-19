import Image from "next/image";
import Link from "next/link";
import "@/app/ui/not-found.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <Image
        src="/error_404.jpg"
        alt="404 Not Found"
        width={400}
        height={300}
        unoptimized
        />
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className="home-link">Go back to Home</Link>
    </div>
  );
}
