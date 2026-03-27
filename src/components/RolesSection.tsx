import { motion } from "framer-motion";
import { Search, FileText, Dumbbell, Stethoscope, Upload, BarChart3, Video, Users, ClipboardList, Heart, Bot } from "lucide-react";

const roles = [
  {
    icon: Users,
    title: "For Patients",
    subtitle: "AI tools designed to simplify your health journey.",
    gradient: "from-primary to-[hsl(320_85%_60%)]",
    features: [
      { icon: Search, label: "Smart Food Scanner", ai: true },
      { icon: Heart, label: "Health Vitals Tracker", ai: false },
      { icon: Dumbbell, label: "AI Exercise Coach", ai: true },
      { icon: Bot, label: "Health Chatbot", ai: true },
    ],
  },
  {
    icon: Stethoscope,
    title: "For Doctors",
    subtitle: "Manage patients and consultations efficiently with smart tools.",
    gradient: "from-accent to-primary",
    features: [
      { icon: ClipboardList, label: "Patient Case Manager", ai: false },
      { icon: Video, label: "Telemedicine Consults", ai: false },
      { icon: BarChart3, label: "AI Health Analytics", ai: true },
      { icon: FileText, label: "Prescription Generator", ai: true },
    ],
    highlight: true,
  },
  {
    icon: Dumbbell,
    title: "For Coaches",
    subtitle: "Design programs and track client progress with AI assistance.",
    gradient: "from-[hsl(320_85%_60%)] to-accent",
    features: [
      { icon: Dumbbell, label: "Workout Builder", ai: false },
      { icon: Search, label: "Pose Detection Coach", ai: true },
      { icon: Upload, label: "Progress Analytics", ai: false },
      { icon: BarChart3, label: "Performance Metrics", ai: false },
    ],
  },
];

const RolesSection = () => {
  return (
    <section id="roles" className="relative py-24">
      <div className="section-divider w-full mb-24" />
      <div className="absolute inset-0 bg-radial-glow-accent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Role-Based</span> AI Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Tailored experiences for every role — all powered by AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass glass-border rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-lg`}>
                  <role.icon size={20} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-bold">{role.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">{role.subtitle}</p>

              <div className="space-y-4">
                {role.features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/80 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <f.icon size={15} className="text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium">{f.label}</span>
                    {f.ai && (
                      <span className="text-[10px] font-bold bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-1.5 py-0.5 rounded border border-primary/20">AI</span>
                    )}
                  </div>
                ))}
              </div>

              {role.highlight && (
                <p className="text-xs text-accent mt-6 font-medium">+ Includes all Patient features plus management tools</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
