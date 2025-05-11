import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Coffee,
  CreditCard,
  Filter,
  Gift,
  Home,
  Laptop,
  Search,
  ShoppingCart,
  Utensils,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TransactionType = "income" | "expense";
type CategoryIcon =
  | "shopping"
  | "food"
  | "coffee"
  | "home"
  | "electronics"
  | "gift";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  categoryIcon: CategoryIcon;
  date: string;
  time: string;
}

const getCategoryIcon = (category: CategoryIcon) => {
  switch (category) {
    case "shopping":
      return <ShoppingCart className="h-4 w-4" />;
    case "food":
      return <Utensils className="h-4 w-4" />;
    case "coffee":
      return <Coffee className="h-4 w-4" />;
    case "home":
      return <Home className="h-4 w-4" />;
    case "electronics":
      return <Laptop className="h-4 w-4" />;
    case "gift":
      return <Gift className="h-4 w-4" />;
    default:
      return <CreditCard className="h-4 w-4" />;
  }
};

export function TransactionTimeline() {
  const [activeTab, setActiveTab] = useState("all");

  const transactions: Transaction[] = [
    {
      id: "1",
      title: "Salary Deposit",
      amount: 4500.0,
      type: "income",
      category: "Income",
      categoryIcon: "gift",
      date: "Apr 15, 2025",
      time: "09:32 AM",
    },
    {
      id: "2",
      title: "Grocery Shopping",
      amount: 125.3,
      type: "expense",
      category: "Food",
      categoryIcon: "shopping",
      date: "Apr 14, 2025",
      time: "02:15 PM",
    },
    {
      id: "3",
      title: "Coffee Shop",
      amount: 5.75,
      type: "expense",
      category: "Cafe",
      categoryIcon: "coffee",
      date: "Apr 14, 2025",
      time: "10:45 AM",
    },
    {
      id: "4",
      title: "Apartment Rent",
      amount: 1800.0,
      type: "expense",
      category: "Housing",
      categoryIcon: "home",
      date: "Apr 10, 2025",
      time: "08:00 AM",
    },
    {
      id: "5",
      title: "Freelance Payment",
      amount: 850.0,
      type: "income",
      category: "Income",
      categoryIcon: "gift",
      date: "Apr 08, 2025",
      time: "03:22 PM",
    },
    {
      id: "6",
      title: "New Laptop",
      amount: 1299.99,
      type: "expense",
      category: "Electronics",
      categoryIcon: "electronics",
      date: "Apr 07, 2025",
      time: "11:30 AM",
    },
  ];

  const filteredTransactions =
    activeTab === "all"
      ? transactions
      : transactions.filter((t) => t.type === activeTab);

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your financial activity</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="h-9 pl-9 pr-3 rounded-lg text-sm bg-secondary border-0 focus:ring-1 focus:ring-primary/40 w-full md:w-auto"
              />
            </div>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="px-5">
            <TabsList className="w-full md:w-auto grid grid-cols-3 h-9 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="expense">Expenses</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="m-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-1"
              >
                {filteredTransactions.map((transaction, index) => (
                  <motion.div
                    key={transaction.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: index * 0.05 },
                    }}
                  >
                    <div className="flex items-center justify-between px-5 py-3 hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                            transaction.type === "income"
                              ? "bg-success/20 text-success"
                              : "bg-destructive/20 text-destructive",
                          )}
                        >
                          {transaction.type === "income" ? (
                            <ArrowDownLeft className="h-5 w-5" />
                          ) : (
                            <ArrowUpRight className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.title}</p>
                          <div className="flex items-center text-xs text-muted-foreground mt-0.5 space-x-1">
                            <span>{transaction.date}</span>
                            <span>•</span>
                            <span>{transaction.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span
                          className={cn(
                            "font-semibold",
                            transaction.type === "income"
                              ? "text-success"
                              : "text-destructive",
                          )}
                        >
                          {transaction.type === "income" ? "+" : "-"}$
                          {transaction.amount.toFixed(2)}
                        </span>
                        <Badge
                          variant="outline"
                          className="mt-1 h-5 px-2 text-xs flex items-center gap-1 bg-secondary"
                        >
                          {getCategoryIcon(transaction.categoryIcon)}
                          {transaction.category}
                        </Badge>
                      </div>
                    </div>
                    {index < filteredTransactions.length - 1 && (
                      <Separator className="last:hidden" />
                    )}
                  </motion.div>
                ))}

                {filteredTransactions.length === 0 && (
                  <div className="py-10 text-center text-muted-foreground">
                    No transactions found
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
