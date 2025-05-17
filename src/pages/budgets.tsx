import { BudgetTracker } from "@/components/dashboard/budget-tracker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Plus } from "lucide-react";
import { motion } from "motion/react";

interface BudgetInsight {
  id: string;
  title: string;
  description: string;
  action: string;
  impact: "positive" | "negative" | "neutral";
}

function BudgetsPage() {
  const insights: BudgetInsight[] = [
    {
      id: "1",
      title: "Dining expenses exceeded",
      description: "Your restaurant spending is 15% over budget this month.",
      action: "Review dining budget",
      impact: "negative",
    },
    {
      id: "2",
      title: "Utilities under budget",
      description: "You've saved $45 on utility compared to last month.",
      action: "See breakdown",
      impact: "positive",
    },
    {
      id: "3",
      title: "New budget recommendation",
      description:
        "Based on your spending, consider adjusting your grocery budget.",
      action: "View suggestion",
      impact: "neutral",
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
          <h1 className="text-2xl font-bold">Budget Management</h1>
          <p className="text-muted-foreground">
            Track and optimize your spending
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Budget
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <BudgetTracker />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Budget Insights</CardTitle>
              <CardDescription>
                Smart recommendations based on your spending
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {insights.map((insight) => (
                <motion.div
                  key={insight.id}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-lg bg-secondary/50 space-y-2"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-medium">{insight.title}</h3>
                    <span
                      className={cn(
                        "flex h-2 w-2 rounded-full",
                        insight.impact === "positive" && "bg-success",
                        insight.impact === "negative" && "bg-destructive",
                        insight.impact === "neutral" && "bg-primary"
                      )}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {insight.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between"
                  >
                    {insight.action}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Budget Settings</CardTitle>
          <CardDescription>Customize your budget preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Budget Rollover</h3>
                <p className="text-sm text-muted-foreground">
                  Roll unused budget to next month
                </p>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Spending Alerts</h3>
                <p className="text-sm text-muted-foreground">
                  Get notified about budget thresholds
                </p>
              </div>
              <Button variant="outline" size="sm">
                Set Alerts
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Category Management</h3>
                <p className="text-sm text-muted-foreground">
                  Customize budget categories
                </p>
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default BudgetsPage;
