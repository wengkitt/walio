import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, CreditCard, PieChart, Users, Wallet } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/_layout/")({
  component: LandingPage,
});

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.15),transparent_50%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
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
      <section id="features" className="py-16  relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(var(--primary-rgb),0.1),transparent_40%)]"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4"> Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to take control of your finances in one place
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="border-gradient overflow-hidden relative h-full">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full"></div>
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shadow-sm">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg mb-2">
                      {feature.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied users who are taking control of their
              finances
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <p className="text-muted-foreground italic">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div className="mt-auto pt-4 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                          <span className="text-primary font-medium">
                            {testimonial.initials}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-[#a855f7]/10"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto  p-8 text-center">
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

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Wallet className="h-5 w-5 text-primary icon-glow" />
              <h1 className="text-xl font-bold text-glow">Walio</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Walio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const features = [
  {
    title: "Multi-Currency",
    description: "Manage accounts in multiple currencies",
    icon: <CreditCard className="h-7 w-7 text-primary icon-glow" />,
  },
  {
    title: "Budget Tracking",
    description: "Set and monitor spending limits",
    icon: <PieChart className="h-7 w-7 text-primary icon-glow" />,
  },
  {
    title: "Split Expenses",
    description: "Share costs with friends easily",
    icon: <Users className="h-7 w-7 text-primary icon-glow" />,
  },
  {
    title: "Analytics",
    description: "Visualize your spending patterns",
    icon: <BarChart3 className="h-7 w-7 text-primary icon-glow" />,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    title: "Small Business Owner",
    quote:
      "Walio has completely transformed how I manage both my personal and business finances. The expense tracking is intuitive and the reports give me insights I never had before.",
  },
  {
    name: "Michael Chen",
    initials: "MC",
    title: "Software Engineer",
    quote:
      "The split expense feature is a game-changer for me and my roommates. We no longer argue about who owes what - Walio does all the calculations for us!",
  },
  {
    name: "Emma Rodriguez",
    initials: "ER",
    title: "Financial Analyst",
    quote:
      "As someone who works in finance, I'm impressed by the depth of features Walio offers. The multi-currency support is especially useful for my international investments.",
  },
];
