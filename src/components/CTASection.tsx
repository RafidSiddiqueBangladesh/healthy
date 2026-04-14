import { motion } from "framer-motion";
import { Download, Apple, Globe } from "lucide-react";
import { useState } from "react";

const APK_DOWNLOAD_URL = "https://drive.google.com/file/d/1XkfeP1GMVFAHSnilLFxJdwVhrb8BqBUu/view?usp=sharing";
const WEB_APP_URL = "https://fancy-kangaroo-36756f.netlify.app/";

const CTASection = () => {
  const [showAndroidMessage, setShowAndroidMessage] = useState(false);
  const [showIosMessage, setShowIosMessage] = useState(false);
  const [showWebMessage, setShowWebMessage] = useState(false);
  return (
    <section id="cta" className="relative py-12 sm:py-24">
      <div className="section-divider w-full mb-12 sm:mb-24" />

      {/* Glow background */}
      <div className="gradient-orb w-[400px] h-[300px] sm:w-[600px] sm:h-[400px] bg-primary/20 top-0 left-1/2 -translate-x-1/2" style={{ position: 'absolute' }} />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass glass-border rounded-3xl p-8 sm:p-12 lg:p-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Experience
              <br />
              <span className="text-gradient-primary">AI-Powered Health?</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-full lg:max-w-xl mx-auto mb-10 font-light">
              Join thousands already using NutriCare to supercharge their health and fitness journey.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <button
                onClick={() => setShowAndroidMessage(true)}
                className="flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/25 w-full sm:w-auto"
              >
                <Download size={20} />
                <div className="text-left hidden sm:block">
                  <div className="text-[10px] opacity-70 leading-none">Download for</div>
                  <div className="text-sm font-bold leading-tight">Android APK</div>
                </div>
                <span className="sm:hidden">Android APK</span>
              </button>
              <button 
                onClick={() => setShowIosMessage(true)}
                className="flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full glass font-semibold hover:bg-muted/50 transition-all w-full sm:w-auto">
                <Apple size={20} />
                <div className="text-left hidden sm:block">
                  <div className="text-[10px] opacity-70 leading-none">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
                <span className="sm:hidden">App Store</span>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowWebMessage(true);
                }}
                className="flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full glass font-semibold hover:bg-muted/50 transition-all w-full sm:w-auto"
              >
                <Globe size={20} />
                <div className="text-left hidden sm:block">
                  <div className="text-[10px] opacity-70 leading-none">Access on the</div>
                  <div className="text-sm font-bold leading-tight">Web Version</div>
                </div>
                <span className="sm:hidden">Web Version</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="section-divider w-full mt-12 sm:mt-24" />
      <div className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 text-center">
        <p className="text-xs sm:text-sm text-muted-foreground">© 2026 NutriCare. All rights reserved.</p>
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

      {/* iOS Coming Soon Modal */}
      {showIosMessage && (
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
                onClick={() => setShowIosMessage(false)}
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

export default CTASection;
