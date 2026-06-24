import HeroSection from "../components/sections/HeroSection";
import ServicesOverview from "../components/sections/ServicesOverview";
import AISection from "../components/sections/AISection";
import CybersecuritySection from "../components/sections/CybersecuritySection";
import AcademySection from "../components/sections/AcademySection";
import MethodSection from "../components/sections/MethodSection";
import CtaSection from "../components/sections/CtaSection";

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AISection />
      <CybersecuritySection />
      <AcademySection />
      <MethodSection />
      <CtaSection />
    </>
  );
}

export default Home;