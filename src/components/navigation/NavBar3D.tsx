import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Moon, Sun, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { MainTopicList } from "@/components/topics/MainTopicList";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

interface SubMenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Products",
    href: "/products",
    subItems: [
      { label: "Electronics", href: "/products/electronics" },
      { label: "Clothing", href: "/products/clothing" },
      { label: "Books", href: "/products/books" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    subItems: [
      { label: "Consulting", href: "/services/consulting" },
      { label: "Design", href: "/services/design" },
      { label: "Development", href: "/services/development" },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function NavBar3D() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full bg-gradient-to-r from-background to-muted text-foreground shadow-xl transform-gpu backdrop-blur-sm bg-opacity-80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Top Level */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between border-b border-border">
        <a
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-blue-700 transition-all"
        >
          LOGO
        </a>

        {/* Search Bar */}
        <div className="hidden md:block max-w-md w-full px-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="w-full pl-8 bg-muted/50 border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
            />
          </div>
        </div>

        {/* Auth Buttons, Theme Toggle and Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-muted"
            >
              Sign In
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Second Level - Menu Items (Desktop Only) */}
      <div className="hidden md:block container mx-auto px-4">
        <ul className="flex items-center justify-center space-x-8">
          {menuItems.map((item) => (
            <li key={item.label} className="relative group">
              <button
                className="flex items-center space-x-1 py-3 px-2 hover:text-primary transition-colors"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span className="text-sm font-medium">{item.label}</span>
                {item.subItems && (
                  <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform" />
                )}
              </button>

              {item.subItems && (
                <AnimatePresence>
                  {activeMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-48 bg-popover rounded-md shadow-lg py-2 z-50 border border-border"
                      onMouseEnter={() => setActiveMenu(item.label)}
                      onMouseLeave={() => setActiveMenu(null)}
                      style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {item.subItems.map((subItem, index) => (
                        <motion.a
                          key={subItem.label}
                          href={subItem.href}
                          initial={{ opacity: 0, rotateX: -10 }}
                          animate={{ opacity: 1, rotateX: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="block px-4 py-2 text-sm text-popover-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {subItem.label}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Search (Shown below header on mobile) */}
      <div className="md:hidden p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-full pl-8 bg-muted/50 border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
          />
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent
          side="left"
          className="w-[300px] sm:w-[400px] overflow-y-auto"
        >
          <SheetHeader>
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>
              Browse topics and navigate the site.
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col h-full">
            {/* Main Topics Section */}
            <div className="py-4">
              <MainTopicList />
            </div>

            <div className="divider h-px bg-border my-2" />

            {/* Menu Items */}
            <div className="space-y-4 py-4">
              {menuItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg"
                    onClick={() =>
                      item.subItems &&
                      setActiveMenu(
                        activeMenu === item.label ? null : item.label,
                      )
                    }
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform ${activeMenu === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </Button>

                  {item.subItems && activeMenu === item.label && (
                    <div className="ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Button
                          key={subItem.label}
                          variant="ghost"
                          className="w-full justify-start pl-4"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="mt-auto space-y-4">
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Button>
                <Button
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
