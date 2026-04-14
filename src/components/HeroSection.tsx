import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Apple, Globe } from "lucide-react";
import dashboard1 from "@/assets/newpic/i1.png";
import dashboard2 from "@/assets/newpic/i2.png";
import dashboard3 from "@/assets/newpic/i3.png";
import dashboard4 from "@/assets/newpic/i4.png";
import dashboard5 from "@/assets/newpic/i5.png";
import dashboard6 from "@/assets/newpic/i6.png";
import dashboard7 from "@/assets/newpic/i7.png";
import dashboard8 from "@/assets/newpic/i8.png";
import dashboard9 from "@/assets/newpic/i9.png";
import dashboard10 from "@/assets/newpic/i10.png";
import dashboard11 from "@/assets/newpic/i11.png";
import dashboard12 from "@/assets/newpic/i12.png";
import dashboard13 from "@/assets/newpic/i13.png";

const mockups = [dashboard1, dashboard2, dashboard3, dashboard4, dashboard5, dashboard6, dashboard7, dashboard8, dashboard9, dashboard10, dashboard11, dashboard12, dashboard13];
const APK_DOWNLOAD_URL = "https://drive.google.com/file/d/1XkfeP1GMVFAHSnilLFxJdwVhrb8BqBUu/view?usp=sharing";
const WEB_APP_URL = "https://fancy-kangaroo-36756f.netlify.app/";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showAndroidMessage, setShowAndroidMessage] = useState(false);
  const [showWebMessage, setShowWebMessage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % mockups.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 lg:py-20 lg:min-h-screen flex items-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="gradient-orb w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/40 top-[-100px] left-[-100px]" style={{ position: 'absolute' }} />
      <div className="gradient-orb w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-accent/30 bottom-[-50px] right-[-50px]" style={{ position: 'absolute' }} />
      <div className="gradient-orb w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[hsl(320_85%_60%_/_0.2)] top-[40%] left-[50%]" style={{ position: 'absolute' }} />

      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-[hsl(320_85%_60%)] bg-clip-text text-transparent">
            NutriCare
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-accent font-medium">AI-Powered Health Intelligence</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Your Health Life,
            <br />
            <span className="text-gradient-primary">Augmented by AI.</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg lg:text-lg max-w-full lg:max-w-lg mb-8 leading-relaxed font-light">
            The ultimate AI-powered health ecosystem for patients, doctors, and fitness coaches. 
            Track nutrition, monitor fitness, and get instant personalized recommendations.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
            {[
              { icon: Smartphone, label: "Android", gradient: "from-primary to-[hsl(320_85%_60%)]", href: APK_DOWNLOAD_URL },
              { icon: Apple, label: "iOS", gradient: "from-accent to-primary" },
              { icon: Globe, label: "Web", gradient: "from-[hsl(320_85%_60%)] to-accent", href: WEB_APP_URL },
            ].map(({ icon: Icon, label, gradient, href }) => (
              <button
                key={label}
                onClick={() => {
                  if (label === "Android") {
                    setShowAndroidMessage(true);
                  } else if (label === "iOS") {
                    setShowComingSoon(true);
                  } else if (label === "Web") {
                    setShowWebMessage(true);
                  }
                }}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${gradient} text-primary-foreground text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-primary/20 cursor-pointer w-full sm:w-auto`}
              >
                <Icon size={18} />
                {label}
              </button>
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
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[480px] lg:max-w-none h-auto aspect-[9/16] lg:h-[1000px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={mockups[current]}
                alt={`Health dashboard screen ${current + 1}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-contain drop-shadow-[0_20px_60px_hsl(270_95%_65%/0.25)]"
              />
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="absolute bottom-4 lg:bottom-40 left-1/2 -translate-x-1/2 flex gap-2">
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

      {/* Android Message Modal */}
      {showAndroidMessage && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gradient-to-br from-primary via-accent to-[hsl(320_85%_60%)] p-1 rounded-2xl w-full max-w-md"
          >
            <div className="bg-background rounded-2xl p-6 sm:p-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-primary">📱 Beta Version</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Download NutriCare and enjoy the beta version!
              </p>
              <div className="flex gap-3 flex-col">
                <button
                  onClick={() => {
                    window.open(APK_DOWNLOAD_URL, "_blank");
                    setShowAndroidMessage(false);
                  }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:brightness-110 transition-all"
                >
                  Download Now
                </button>
                <button
                  onClick={() => setShowAndroidMessage(false)}
                  className="px-6 py-3 rounded-full glass font-semibold hover:bg-muted/50 transition-all"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Coming Soon Overlay */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gradient-to-br from-primary via-accent to-[hsl(320_85%_60%)] p-1 rounded-2xl w-full max-w-md"
          >
            <div className="bg-background rounded-2xl p-6 sm:p-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-primary">iOS Coming Soon</h2>
              <button
                onClick={() => setShowComingSoon(false)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:brightness-110 transition-all w-full"
              >
                Got it!
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Web Message Modal */}
      {showWebMessage && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gradient-to-br from-primary via-accent to-[hsl(320_85%_60%)] p-1 rounded-2xl w-full max-w-md"
          >
            <div className="bg-background rounded-2xl p-6 sm:p-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-primary">💻 Web Version</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Best viewed on mobile! Open DevTools (F12) and toggle phone view. Not optimized for big screens (PC/Laptop).
              </p>
              <div className="flex gap-3 flex-col">
                <button
                  onClick={() => {
                    window.open(WEB_APP_URL, "_blank");
                    setShowWebMessage(false);
                  }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:brightness-110 transition-all"
                >
                  Open Web Version
                </button>
                <button
                  onClick={() => setShowWebMessage(false)}
                  className="px-6 py-3 rounded-full glass font-semibold hover:bg-muted/50 transition-all"
                >
                  Got it!
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
