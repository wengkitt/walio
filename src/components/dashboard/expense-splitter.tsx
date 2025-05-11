import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Clock, Divide, ListChecks, Users } from "lucide-react";
import { motion } from "motion/react";

interface SplitGroup {
  id: string;
  name: string;
  members: {
    id: string;
    name: string;
    avatar?: string;
    initials: string;
    balance: number;
  }[];
  lastActivity: string;
  totalExpenses: number;
}

export function ExpenseSplitter() {
  const groups: SplitGroup[] = [
    {
      id: "1",
      name: "Italy Trip",
      members: [
        {
          id: "m1",
          name: "You",
          avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          initials: "YO",
          balance: 120.5,
        },
        {
          id: "m2",
          name: "Alex Johnson",
          avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
          initials: "AJ",
          balance: -75.25,
        },
        {
          id: "m3",
          name: "Sarah Williams",
          avatar:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
          initials: "SW",
          balance: -45.25,
        },
      ],
      lastActivity: "2 days ago",
      totalExpenses: 850.75,
    },
    {
      id: "2",
      name: "Apartment Expenses",
      members: [
        {
          id: "m1",
          name: "You",
          avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          initials: "YO",
          balance: -45.0,
        },
        {
          id: "m4",
          name: "Mike Chen",
          avatar:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
          initials: "MC",
          balance: 45.0,
        },
      ],
      lastActivity: "5 days ago",
      totalExpenses: 1245.3,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
              <Divide className="h-4 w-4" />
            </div>
            <div>
              <CardTitle>Split Expenses</CardTitle>
            </div>
          </div>
          <Button size="sm">
            <Users className="h-4 w-4 mr-2" />
            New Group
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {groups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.2,
                  duration: 0.4,
                },
              }}
              whileHover={{ y: -5 }}
              className="card-hover"
            >
              <Card className="overflow-hidden border-border py-0">
                <div className="px-5 pt-5 pb-3 border-b border-border bg-secondary/50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{group.name}</h3>
                    <Badge
                      variant="outline"
                      className="text-xs bg-secondary flex items-center gap-1"
                    >
                      <Clock className="h-3 w-3" />
                      {group.lastActivity}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Total: ${group.totalExpenses.toFixed(2)}
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {group.members.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8 border border-border">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback className="text-xs">
                              {member.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">
                            {member.name}
                          </span>
                        </div>
                        <span
                          className={cn(
                            "text-sm font-medium",
                            member.balance > 0
                              ? "text-success"
                              : member.balance < 0
                                ? "text-destructive"
                                : "",
                          )}
                        >
                          {member.balance > 0 ? "+" : ""}$
                          {Math.abs(member.balance).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 gap-3">
                    <Button variant="secondary" size="sm" className="w-5/12">
                      <ListChecks className="h-4 w-4 mr-2" />
                      Expenses
                    </Button>
                    <Button variant="default" size="sm" className="w-5/12">
                      Settle Up
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
