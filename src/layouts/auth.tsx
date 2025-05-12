import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link, Outlet } from "react-router";
import { Wallet } from "lucide-react";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="glass-panel sticky top-0 z-50 border-b border-border/40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary icon-glow" />
            <h1 className="text-xl font-bold text-glow">Walio</h1>
          </Link>
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
