import { AnimatedNumber } from "@/components/custom/animated-number";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  ArrowDown,
  ArrowUp,
  CreditCard,
  DollarSign,
  Euro,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react";
import { motion } from "motion/react";

interface WalletData {
  id: string;
  name: string;
  balance: number;
  currency: string;
  currencySymbol: React.ReactNode;
  change: number;
  positiveChange: boolean;
  color: string;
}

export function WalletOverview() {
  const wallets: WalletData[] = [
    {
      id: "1",
      name: "Main Wallet",
      balance: 12850.75,
      currency: "USD",
      currencySymbol: <DollarSign className="h-5 w-5" />,
      change: 3.2,
      positiveChange: true,
      color: "from-[#1DE9B6] to-[#18c79a]",
    },
    {
      id: "2",
      name: "Euro Savings",
      balance: 7430.2,
      currency: "EUR",
      currencySymbol: <Euro className="h-5 w-5" />,
      change: 1.8,
      positiveChange: true,
      color: "from-[#3b82f6] to-[#1d4ed8]",
    },
    {
      id: "3",
      name: "Investments",
      balance: 34120.5,
      currency: "USD",
      currencySymbol: <DollarSign className="h-5 w-5" />,
      change: 2.1,
      positiveChange: false,
      color: "from-[#a855f7] to-[#7e22ce]",
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">Wallet Overview</h2>
          <p className="text-muted-foreground">Monitor your financial assets</p>
        </div>
        <Button variant="outline" size="sm" className="rounded-lg">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Wallet
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wallets.map((wallet) => (
          <motion.div
            key={wallet.id}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="border-gradient overflow-hidden relative h-[180px]">
              <div
                className={cn(
                  "absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl",
                  `bg-gradient-to-br ${wallet.color}`,
                )}
              />

              <CardHeader className="flex flex-row items-center justify-between ">
                <div className="flex items-center space-x-2">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      `bg-gradient-to-r ${wallet.color}`,
                    )}
                  >
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-medium">
                      {wallet.name}
                    </CardTitle>
                    <CardDescription>{wallet.currency}</CardDescription>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Wallet</DropdownMenuItem>
                    <DropdownMenuItem>Transfer Funds</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold mr-1">
                    {wallet.currency === "USD" ? "$" : "€"}
                  </span>
                  <span className="text-3xl font-bold">
                    <AnimatedNumber value={formatCurrency(wallet.balance)} />
                  </span>
                </div>
                <div className="flex items-center mt-3">
                  <div
                    className={cn(
                      "flex items-center px-2 py-1 rounded-full text-xs font-medium",
                      wallet.positiveChange
                        ? "bg-success/20 text-success"
                        : "bg-destructive/20 text-destructive",
                    )}
                  >
                    {wallet.positiveChange ? (
                      <ArrowUp className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-1" />
                    )}
                    {wallet.change}%
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">
                    vs last month
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
