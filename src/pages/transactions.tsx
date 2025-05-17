import { TransactionTimeline } from "@/components/dashboard/transaction-timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  Download,
  Filter,
  Search,
  Upload,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface TransactionFilter {
  id: string;
  label: string;
  active: boolean;
}

function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filters: TransactionFilter[] = [
    { id: "all", label: "All", active: true },
    { id: "income", label: "Income", active: false },
    { id: "expenses", label: "Expenses", active: false },
    { id: "transfers", label: "Transfers", active: false },
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
          <h1 className="text-2xl font-bold">Transactions</h1>
          <p className="text-muted-foreground">Track your financial activity</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={filter.active ? "default" : "outline"}
                  size="sm"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <TransactionTimeline />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Transaction Analytics</CardTitle>
              <CardDescription>This month's overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Income
                    </p>
                    <p className="text-2xl font-bold text-success">$5,350.00</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-success/20 flex items-center justify-center">
                    <ArrowDownLeft className="h-5 w-5 text-success" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Expenses
                    </p>
                    <p className="text-2xl font-bold text-destructive">
                      $3,230.75
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <ArrowUpRight className="h-5 w-5 text-destructive" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recurring Transactions</CardTitle>
              <CardDescription>Manage your scheduled payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div>
                    <h3 className="font-medium">Netflix Subscription</h3>
                    <p className="text-sm text-muted-foreground">
                      Monthly • Next: Apr 15
                    </p>
                  </div>
                  <Badge variant="outline">$14.99</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div>
                    <h3 className="font-medium">Gym Membership</h3>
                    <p className="text-sm text-muted-foreground">
                      Monthly • Next: Apr 20
                    </p>
                  </div>
                  <Badge variant="outline">$49.99</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View All Recurring
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TransactionsPage;
