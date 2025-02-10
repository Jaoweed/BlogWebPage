import { Heart, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TopicCardProps {
  title: string;
  description: string;
  likes: number;
  comments: number;
  mainTopic: string;
}

export function TopicCard({
  title,
  description,
  likes,
  comments,
  mainTopic,
}: TopicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-4 hover:shadow-xl transition-all duration-300 border-border/40 bg-gradient-to-br from-background to-muted/50">
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg line-clamp-1 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {title}
              </h3>
              <motion.span
                className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {mainTopic}
              </motion.span>
            </div>
            <p className="text-sm text-muted-foreground/90 line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-4 text-sm">
              <motion.button
                className="flex items-center space-x-1.5 text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-4 h-4 group-hover:fill-primary transition-all" />
                <span>{likes}</span>
              </motion.button>
              <motion.button
                className="flex items-center space-x-1.5 text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4 group-hover:fill-primary transition-all" />
                <span>{comments}</span>
              </motion.button>
            </div>

            <motion.button
              className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More →
            </motion.button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
