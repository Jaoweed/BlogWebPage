import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface MainTopic {
  id: string;
  name: string;
  count: number;
}

const mainTopics: MainTopic[] = [
  { id: "1", name: "Technology", count: 156 },
  { id: "2", name: "Design", count: 89 },
  { id: "3", name: "Business", count: 124 },
  { id: "4", name: "Science", count: 78 },
  { id: "5", name: "Health", count: 92 },
];

export function MainTopicList() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="space-y-2 bg-muted/30 p-6 rounded-xl border border-border/50"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Main Topics
      </h2>
      {mainTopics.map((topic) => (
        <motion.div key={topic.id} variants={item}>
          <Button
            variant="ghost"
            className="w-full justify-between text-left font-normal hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-lg"
          >
            <span>{topic.name}</span>
            <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">
              {topic.count}
            </span>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}
