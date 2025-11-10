import { Header } from "./sections/Header/Header";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { CoursesSection } from "./sections/CoursesSection/CoursesSection";
import { SuccessIntroSection } from "./sections/SuccessIntroSection/SuccessIntroSection";
import { StatsSection } from "./sections/StatsSection/StatsSection";
import { QualitySection } from "./sections/QualitySection/QualitySection";
import { MethodSection } from "./sections/MethodSection/MethodSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CoursesSection />
      <SuccessIntroSection/>
      <StatsSection/>
      <QualitySection/>
      <MethodSection/>
    </>
  );
}

export default App;
