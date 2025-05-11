import { Sidebar } from "@/components/custom/sidebar";
import { Topbar } from "@/components/custom/topbar";
import { cn } from "@/lib/utils";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/protected/_layout")({
  component: ProtectedLayout,
});

function ProtectedLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground">
      <Sidebar collapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      <main
        className={cn(
          "flex-1 flex flex-col transition-all duration-300 ease-in-out",
          isSidebarCollapsed ? "md:ml-20" : "md:ml-64",
        )}
      >
        <Topbar />
        <div className="flex-1 p-4 md:p-6 overflow-auto wolio-scrollbar">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
