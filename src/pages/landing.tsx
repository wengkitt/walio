import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
import { BarChart3, CreditCard, PieChart, Users, Wallet } from "lucide-react";
import { motion } from "motion/react";

function LandingPage() {
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
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-12 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="w-full">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Manage Your Finances with{" "}
                <span className="text-primary text-glow">Ease</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Walio helps you track expenses, manage budgets, and split costs
                with friends—all in one beautiful, intuitive app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/sign-up">
                  <Button size="lg" className="w-full sm:w-auto rounded-lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="/sign-in">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-lg"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(var(--primary-rgb),0.1),transparent_40%)]"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-4"
            >
              Powerful Features
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Everything you need to take control of your personal finances
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6"
          >
            {/* Feature Cards */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-gradient">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Expense Tracking</CardTitle>
                  <p className="text-muted-foreground">
                    Easily log and categorize your expenses to understand where
                    your money goes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-gradient">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <PieChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Budget Management</CardTitle>
                  <p className="text-muted-foreground">
                    Create custom budgets and track your progress with intuitive
                    visualizations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-gradient">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Split Expenses</CardTitle>
                  <p className="text-muted-foreground">
                    Easily split bills with friends and keep track of who owes
                    what.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-gradient">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">Financial Insights</CardTitle>
                  <p className="text-muted-foreground">
                    Get personalized insights and analytics to improve your
                    financial habits.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-[#a855f7]/10"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to take control of your finances?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of users who are already managing their money
              smarter with Walio.
            </p>
            <Link to="/sign-up">
              <Button size="lg" className="rounded-lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
