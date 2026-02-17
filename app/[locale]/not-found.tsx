import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-4xl font-bold mb-4 text-primary">404</h2>
      <p className="text-xl text-muted-foreground mb-8">Page not found</p>
      <Link href="/">
        <Button variant="sky">Return Home</Button>
      </Link>
    </div>
  );
}
