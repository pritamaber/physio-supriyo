import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import ConditionsList from "@/components/home/ConditionsList";
import ServicesPreview from "@/components/home/ServicesPreview";
import PreviousTreatments from "@/components/home/PreviousTreatments";
import EventsPreview from "@/components/home/EventsPreview";
import AboutPreview from "@/components/home/AboutPreview";
// import TreatmentApproach from "@/components/home/TreatmentApproach";
import Testimonials from "@/components/home/Testimonials";
import TrainingPreview from "@/components/home/TrainingPreview";
import ContactCTA from "@/components/home/ContactCTA";
import SectionDivider from "@/components/ui/SectionDivider";
import ScrollReveal from "@/components/ui/ScrollReveal";

// function ScrollReveal({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       {children}
//     </motion.section>
//   );
// }

export default function HomePage() {
  return (
    <main>
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        <SectionDivider label="Care" />
        <ConditionsList />
      </ScrollReveal>

      <ScrollReveal>
        <SectionDivider label="Services" />
        <ServicesPreview />
      </ScrollReveal>

      <ScrollReveal>
        <SectionDivider label="Few Works" />
        <PreviousTreatments />
      </ScrollReveal>

      <ScrollReveal>
        <SectionDivider label="About" />
        <AboutPreview />
      </ScrollReveal>

      <ScrollReveal>
        <SectionDivider label="Events" />
        <EventsPreview />
      </ScrollReveal>

      <ScrollReveal>
        <SectionDivider label="Reviews" />
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <SectionDivider label="Training" />
        <TrainingPreview />
      </ScrollReveal>

      <ScrollReveal>
        <ContactCTA />
      </ScrollReveal>
    </main>
  );
}
