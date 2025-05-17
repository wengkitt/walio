import { ExpenseSplitter } from "@/components/dashboard/expense-splitter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CreditCard, Plus, Receipt, Users } from "lucide-react";
import { motion } from "motion/react";

interface Settlement {
  id: string;
  from: {
    name: string;
    avatar?: string;
    initials: string;
  };
  to: {
    name: string;
    avatar?: string;
    initials: string;
  };
  amount: number;
  status: "pending" | "completed";
  date: string;
}

function SplitExpensesPage() {
  const settlements: Settlement[] = [
    {
      id: "1",
      from: {
        name: "Alex Johnson",
        avatar:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        initials: "AJ",
      },
      to: {
        name: "Sarah Williams",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        initials: "SW",
      },
      amount: 45.25,
      status: "completed",
      date: "2 days ago",
    },
    {
      id: "2",
      from: {
        name: "Mike Chen",
        avatar:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        initials: "MC",
      },
      to: {
        name: "You",
        avatar:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        initials: "YO",
      },
      amount: 75.5,
      status: "pending",
      date: "Just now",
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
          <h1 className="text-2xl font-bold">Split Expenses</h1>
          <p className="text-muted-foreground">
            Manage shared expenses with friends
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Receipt className="h-4 w-4 mr-2" />
            Add Expense
          </Button>
          <Button>
            <Users className="h-4 w-4 mr-2" />
            New Group
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <ExpenseSplitter />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Recent Settlements</CardTitle>
              <CardDescription>Track payment status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {settlements.map((settlement) => (
                <div
                  key={settlement.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 border border-border">
                        <AvatarImage src={settlement.from.avatar} />
                        <AvatarFallback>
                          {settlement.from.initials}
                        </AvatarFallback>
                      </Avatar>
                      <ArrowRight className="h-4 w-4 mx-2 text-muted-foreground" />
                      <Avatar className="h-8 w-8 border border-border">
                        <AvatarImage src={settlement.to.avatar} />
                        <AvatarFallback>
                          {settlement.to.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        ${settlement.amount.toFixed(2)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {settlement.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      settlement.status === "completed" ? "default" : "outline"
                    }
                  >
                    {settlement.status === "completed" ? "Paid" : "Pending"}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full">
                View All Settlements
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Manage settlement options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Bank Transfer</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant settlement
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>
            <Button className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Payment Method
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default SplitExpensesPage;
