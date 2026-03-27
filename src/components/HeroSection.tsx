import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Apple, Globe } from "lucide-react";
import dashboard1 from "@/assets/1.png";
import dashboard2 from "@/assets/2.png";
import dashboard3 from "@/assets/3.png";
import dashboard4 from "@/assets/4.png";
import dashboard5 from "@/assets/5.png";
import dashboard6 from "@/assets/6.png";

const mockups = [dashboard1, dashboard2, dashboard3, dashboard4, dashboard5, dashboard6];
const APK_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1v_EVq7vYZBu8RvNQf72g6XzOsR-6OIIR";
const WEB_APP_URL = "https://fancy-kangaroo-36756f.netlify.app/";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % mockups.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background orbs */}
      <div className="gradient-orb w-[500px] h-[500px] bg-primary/40 top-[-100px] left-[-100px]" style={{ position: 'absolute' }} />
      <div className="gradient-orb w-[400px] h-[400px] bg-accent/30 bottom-[-50px] right-[-50px]" style={{ position: 'absolute' }} />
      <div className="gradient-orb w-[300px] h-[300px] bg-[hsl(320_85%_60%_/_0.2)] top-[40%] left-[50%]" style={{ position: 'absolute' }} />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-accent font-medium">AI-Powered Health Intelligence</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Your Health Life,
            <br />
            <span className="text-gradient-primary">Augmented by AI.</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed font-light">
            The ultimate AI-powered health ecosystem for patients, doctors, and fitness coaches. 
            Track nutrition, monitor fitness, and get instant personalized recommendations.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: Smartphone, label: "Android", gradient: "from-primary to-[hsl(320_85%_60%)]", href: APK_DOWNLOAD_URL },
              { icon: Apple, label: "iOS", gradient: "from-accent to-primary" },
              { icon: Globe, label: "Web", gradient: "from-[hsl(320_85%_60%)] to-accent", href: WEB_APP_URL },
            ].map(({ icon: Icon, label, gradient, href }) => (
              <a
                key={label}
                href={href ?? "#"}
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${gradient} text-primary-foreground text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-primary/20`}
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — phone mockup carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] sm:w-[340px] h-[580px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={mockups[current]}
                alt={`Health dashboard screen ${current + 1}`}
                width={340}
                height={580}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full absolute inset-0 object-contain drop-shadow-[0_20px_60px_hsl(270_95%_65%/0.25)]"
              />
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {mockups.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
