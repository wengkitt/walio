import { cn } from "@/lib/utils";
import {
  CreditCard,
  DollarSign,
  LayoutDashboard,
  PieChart,
  Settings,
  Users,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";
import { Link, useRouter } from "@tanstack/react-router";

interface SidebarProps {
  collapsed: boolean;
}

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export function Sidebar({ collapsed }: SidebarProps) {
  const router = useRouter();
  const pathname = router.state.location.pathname;

  console.log(pathname);

  const sidebarItems: SidebarItem[] = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
      path: "/protected",
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      label: "Wallets",
      path: "/protected/wallets",
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      label: "Budgets",
      path: "/protected/budgets",
    },
    {
      icon: <DollarSign className="h-5 w-5" />,
      label: "Transactions",
      path: "/protected/transactions",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Split Expenses",
      path: "/protected/split-expenses",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
      path: "/protected/settings",
    },
  ];

  return (
    <motion.aside
      initial={{ width: collapsed ? 0 : 256 }}
      animate={{ width: collapsed ? 0 : 256 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 z-20 h-full glass-panel border-r border-border",
        "flex flex-col py-6 overflow-hidden",
        collapsed && "opacity-0",
      )}
    >
      <div className="flex items-center px-4 mb-8">
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center"
          >
            <Wallet className="h-5 w-5 text-primary icon-glow mr-2" />
            <h1 className="text-xl font-semibold text-glow">Walio</h1>
          </motion.div>
        )}
      </div>

      <div className="flex-1 space-y-2 px-3">
        {sidebarItems.map((item, index) => {
          const isActive =
            pathname === item.path ||
            (item.path === "/protected" && pathname === "/protected");
          return (
            <Link
              key={index}
              to={item.path}
              className={cn(
                "w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                "hover:bg-secondary group",
                isActive
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground",
                "relative",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center",
                  isActive && "icon-glow",
                  collapsed ? "mx-auto" : "mr-3",
                )}
              >
                {item.icon}
              </div>
              {!collapsed && (
                <span
                  className={cn(
                    "truncate transition-all",
                    isActive && "text-glow",
                  )}
                >
                  {item.label}
                </span>
              )}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute right-0 w-1 h-6 bg-primary rounded-l-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.aside>
  );
}
