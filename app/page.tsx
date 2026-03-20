import Hero from "@/components/home/Hero";
import ConditionsList from "@/components/home/ConditionsList";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import TreatmentApproach from "@/components/home/TreatmentApproach";
import Testimonials from "@/components/home/Testimonials";
import TrainingPreview from "@/components/home/TrainingPreview";
import ContactCTA from "@/components/home/ContactCTA";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SectionDivider label="Care" />
      <ConditionsList />
      <SectionDivider label="Services" />
      <ServicesPreview />
      <SectionDivider label="About" />
      <AboutPreview />
      <SectionDivider label="Approach" />
      <TreatmentApproach />
      <SectionDivider label="Reviews" />
      <Testimonials />
      <SectionDivider label="Training" />
      <TrainingPreview />
      <ContactCTA />
    </main>
  );
}
