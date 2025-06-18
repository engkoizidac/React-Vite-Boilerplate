import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function ServerError() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md bg-card rounded-lg p-8 flex flex-col items-center">
        <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold text-destructive mb-2 text-center">
          Server Offline.
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          The server is currently unavailable. Please try again later.
        </p>
        <Button asChild className="w-full md:w-auto">
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </section>
  );
}
