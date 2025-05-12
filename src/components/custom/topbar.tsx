import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthActions } from "@convex-dev/auth/react";
import { useLocation, useNavigate } from "react-router";
import {
  Bell,
  Calendar,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

interface TopbarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Topbar({ collapsed, onToggle }: TopbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const { signOut } = useAuthActions();

  // Map pathnames to page titles
  const pageTitles: Record<string, string> = {
    "/protected": "Dashboard",
    "/protected/wallets": "Wallets",
    "/protected/budgets": "Budgets",
    "/protected/transactions": "Transactions",
    "/protected/split-expenses": "Split Expenses",
    "/protected/settings": "Settings",
  };
  const currentPage = pageTitles[pathname] || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-10 py-3 px-4 md:px-6 glass-panel border-b border-border"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="text-muted-foreground hover:text-foreground mr-2"
          >
            {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
          </Button>
          <h1 className="text-xl font-semibold hidden md:block">
            {currentPage}
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            size="sm"
            variant="secondary"
            className="rounded-full hidden md:flex"
          >
            <Calendar className="h-4 w-4 mr-2" />
            <span>Apr 2025</span>
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="relative rounded-full bg-secondary h-9 w-9"
          >
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-primary text-[10px]">
              3
            </Badge>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="rounded-full hidden md:inline-flex bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Wallet
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full h-9 w-9 p-0">
                <Avatar className="h-9 w-9 border border-border">
                  <AvatarImage src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" />
                  <AvatarFallback className="bg-primary/20 text-primary">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Wallets</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={async () => {
                  try {
                    await signOut();
                    toast.success("Signed out successfully");
                    navigate("/");
                  } catch (error) {
                    console.error("Sign out error:", error);
                    toast.error("Failed to sign out");
                  }
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.div>
  );
}
