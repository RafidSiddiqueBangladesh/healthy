import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-display text-xl font-bold tracking-tight flex items-center gap-2">
          <Sparkles size={20} className="text-primary" />
          Nutri<span className="text-gradient-primary">Care</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#roles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Tools</a>
          <a href="#cta" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Download</a>
          <button className="px-5 py-2 rounded-full glass text-sm font-medium hover:bg-muted/50 transition-colors">
            Web Login
          </button>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/25">
            Download App
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-strong px-6 pb-6 flex flex-col gap-4"
        >
          <a href="#features" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#roles" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>AI Tools</a>
          <a href="#cta" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Download</a>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold w-full">
            Download App
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
