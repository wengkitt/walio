import { ModeToggle } from "@/components/ui/mode-toggle";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Wallet } from "lucide-react";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header/Navigation */}
      <header className="glass-panel sticky top-0 z-50 border-b border-border/40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary icon-glow" />
            <h1 className="text-xl font-bold text-glow">Walio</h1>
          </div>
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
