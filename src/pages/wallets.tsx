import { TransactionTimeline } from "@/components/dashboard/transaction-timeline";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Ban as Bank, CreditCard, Plus } from "lucide-react";
import { motion } from "motion/react";

interface WalletCard {
  id: string;
  type: "credit" | "debit" | "savings";
  name: string;
  balance: number;
  currency: string;
  number: string;
  expiryDate?: string;
  color: string;
}

function WalletsPage() {
  const wallets: WalletCard[] = [
    {
      id: "1",
      type: "credit",
      name: "Premium Credit Card",
      balance: 4521.85,
      currency: "USD",
      number: "•••• 4582",
      expiryDate: "05/27",
      color: "from-[#1DE9B6] to-[#18c79a]",
    },
    {
      id: "2",
      type: "debit",
      name: "Main Debit Card",
      balance: 12850.75,
      currency: "USD",
      number: "•••• 7896",
      expiryDate: "09/26",
      color: "from-[#3b82f6] to-[#1d4ed8]",
    },
    {
      id: "3",
      type: "savings",
      name: "Euro Savings",
      balance: 7430.2,
      currency: "EUR",
      number: "•••• 3214",
      color: "from-[#a855f7] to-[#7e22ce]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Wallets</h1>
          <p className="text-muted-foreground">Manage your payment methods</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Wallet
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wallets.map((wallet) => (
          <motion.div
            key={wallet.id}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="card-hover"
          >
            <Card className="relative overflow-hidden h-[200px]">
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-90",
                  wallet.color
                )}
              />

              <CardContent className="relative h-full p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium opacity-80">
                      {wallet.type === "credit"
                        ? "Credit Card"
                        : wallet.type === "debit"
                          ? "Debit Card"
                          : "Savings Account"}
                    </p>
                    <h3 className="text-lg font-semibold mt-1">
                      {wallet.name}
                    </h3>
                  </div>
                  {wallet.type === "credit" || wallet.type === "debit" ? (
                    <CreditCard className="h-8 w-8 opacity-80" />
                  ) : (
                    <Bank className="h-8 w-8 opacity-80" />
                  )}
                </div>

                <div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl font-bold">
                      {wallet.currency === "USD" ? "$" : "€"}
                    </span>
                    <span className="text-3xl font-bold">
                      {wallet.balance.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm mt-2 opacity-80">{wallet.number}</p>
                  {wallet.expiryDate && (
                    <p className="text-sm opacity-80">
                      Expires {wallet.expiryDate}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Recent activity across all wallets</CardDescription>
        </CardHeader>
        <CardContent>
          <TransactionTimeline />
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default WalletsPage;
