import NavBar3D from "./navigation/NavBar3D";
import { MainTopicList } from "./topics/MainTopicList";
import { TopicCard } from "./topics/TopicCard";
import { Footer } from "./footer/Footer";
import { motion } from "framer-motion";

const userTopics = [
  {
    id: 1,
    title: "The Future of AI Development",
    description:
      "Discussing the latest trends in artificial intelligence and its impact on software development.",
    likes: 234,
    comments: 45,
    mainTopic: "Technology",
  },
  {
    id: 2,
    title: "UI Design Principles for 2024",
    description:
      "Exploring modern UI design principles and their practical applications in web development.",
    likes: 187,
    comments: 32,
    mainTopic: "Design",
  },
  {
    id: 3,
    title: "Sustainable Business Practices",
    description:
      "How companies are incorporating sustainability into their business models.",
    likes: 156,
    comments: 28,
    mainTopic: "Business",
  },
  {
    id: 4,
    title: "Machine Learning in Healthcare",
    description:
      "Applications of machine learning in modern healthcare and medical research.",
    likes: 198,
    comments: 37,
    mainTopic: "Science",
  },
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <NavBar3D />

      <div className="flex-1">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Sidebar - Main Topics (Desktop) */}
            <div className="md:block md:col-span-3 hidden">
              <div className="md:sticky md:top-24">
                <MainTopicList />
              </div>
            </div>

            {/* Main Content - User Topics */}
            <div className="md:col-span-9">
              <div className="space-y-8">
                {/* Main Topics List (Mobile Only) */}
                <div className="md:hidden mb-8">
                  <MainTopicList />
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Latest Topics
                  </h1>
                  <select className="w-full sm:w-auto bg-muted/50 border border-border/50 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all duration-300">
                    <option>Most Recent</option>
                    <option>Most Liked</option>
                    <option>Most Commented</option>
                  </select>
                </motion.div>

                <div className="space-y-4">
                  {userTopics.map((topic, index) => (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <TopicCard
                        title={topic.title}
                        description={topic.description}
                        likes={topic.likes}
                        comments={topic.comments}
                        mainTopic={topic.mainTopic}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
