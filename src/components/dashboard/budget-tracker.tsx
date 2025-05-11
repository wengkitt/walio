import { AnimatedProgressBar } from "@/components/custom/animated-progress-bar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Book, Home, Pizza, Plus, ShoppingBag, Wifi } from "lucide-react";
import { motion } from "motion/react";

interface Budget {
  id: string;
  category: string;
  icon: React.ReactNode;
  spent: number;
  total: number;
  color: string;
}

export function BudgetTracker() {
  const budgets: Budget[] = [
    {
      id: "1",
      category: "Groceries",
      icon: <ShoppingBag className="h-4 w-4" />,
      spent: 320,
      total: 500,
      color: "bg-chart-1",
    },
    {
      id: "2",
      category: "Dining",
      icon: <Pizza className="h-4 w-4" />,
      spent: 180,
      total: 250,
      color: "bg-chart-2",
    },
    {
      id: "3",
      category: "Rent",
      icon: <Home className="h-4 w-4" />,
      spent: 1800,
      total: 1800,
      color: "bg-chart-3",
    },
    {
      id: "4",
      category: "Utilities",
      icon: <Wifi className="h-4 w-4" />,
      spent: 120,
      total: 200,
      color: "bg-chart-4",
    },
    {
      id: "5",
      category: "Education",
      icon: <Book className="h-4 w-4" />,
      spent: 90,
      total: 300,
      color: "bg-chart-5",
    },
  ];

  const calculatePercentage = (spent: number, total: number) => {
    return (spent / total) * 100;
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Budget Tracker</CardTitle>
            <CardDescription>Monthly spending limits</CardDescription>
          </div>
          <Button size="sm" variant="secondary" className="h-8 rounded-lg">
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pl-5 pr-5 pt-0 space-y-4">
        {budgets.map((budget, index) => {
          const percentage = calculatePercentage(budget.spent, budget.total);
          const isOverBudget = percentage > 100;

          return (
            <motion.div
              key={budget.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1 },
              }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center text-white",
                        budget.color
                      )}
                    >
                      {budget.icon}
                    </div>
                    <span className="font-medium text-sm">
                      {budget.category}
                    </span>
                  </div>
                  <div className="text-sm font-medium">
                    <span className={isOverBudget ? "text-destructive" : ""}>
                      ${budget.spent.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      / ${budget.total.toLocaleString()}
                    </span>
                  </div>
                </div>
                <AnimatedProgressBar
                  value={Math.min(percentage, 100)}
                  className={cn(
                    "h-2",
                    isOverBudget
                      ? "text-destructive"
                      : budget.color.replace("bg-", "bg-")
                  )}
                />
              </div>
            </motion.div>
          );
        })}
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button className="w-full" variant="outline" size="sm">
          View All Budgets
        </Button>
      </CardFooter>
    </Card>
  );
}
