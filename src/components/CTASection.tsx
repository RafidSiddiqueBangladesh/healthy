import { motion } from "framer-motion";
import { Download, Apple, Globe } from "lucide-react";

const APK_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1v_EVq7vYZBu8RvNQf72g6XzOsR-6OIIR";
const WEB_APP_URL = "https://fancy-kangaroo-36756f.netlify.app/";

const CTASection = () => {
  return (
    <section id="cta" className="relative py-24">
      <div className="section-divider w-full mb-24" />

      {/* Glow background */}
      <div className="gradient-orb w-[600px] h-[400px] bg-primary/20 top-0 left-1/2 -translate-x-1/2" style={{ position: 'absolute' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass glass-border rounded-3xl p-12 sm:p-16 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Ready to Experience
              <br />
              <span className="text-gradient-primary">AI-Powered Health?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 font-light">
              Join thousands already using NutriCare to supercharge their health and fitness journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/25"
              >
                <Download size={20} />
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none">Download for</div>
                  <div className="text-sm font-bold leading-tight">Android APK</div>
                </div>
              </a>
              <button className="flex items-center gap-3 px-7 py-3.5 rounded-full glass font-semibold hover:bg-muted/50 transition-all">
                <Apple size={20} />
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </button>
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-7 py-3.5 rounded-full glass font-semibold hover:bg-muted/50 transition-all"
              >
                <Globe size={20} />
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none">Access on the</div>
                  <div className="text-sm font-bold leading-tight">Web Version</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="section-divider w-full mt-24" />
      <div className="container mx-auto px-6 pt-8 text-center">
        <p className="text-sm text-muted-foreground">© 2026 NutriCare. All rights reserved.</p>
      </div>
    </section>
  );
};

export default CTASection;
