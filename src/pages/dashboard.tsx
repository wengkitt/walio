import { BudgetTracker } from "@/components/dashboard/budget-tracker";
import { ExpenseSplitter } from "@/components/dashboard/expense-splitter";
import { TransactionTimeline } from "@/components/dashboard/transaction-timeline";
import { WalletOverview } from "@/components/dashboard/wallet-overview";
import { motion } from "motion/react";

function Dashboard() {
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
      <motion.div variants={itemVariants}>
        <WalletOverview />
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <TransactionTimeline />
        </motion.div>
        <motion.div variants={itemVariants}>
          <BudgetTracker />
        </motion.div>
      </div>
      <motion.div variants={itemVariants}>
        <ExpenseSplitter />
      </motion.div>
    </motion.div>
  );
}

export default Dashboard;
