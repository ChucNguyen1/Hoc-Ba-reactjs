import { Header } from "./sections/Header/Header";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { CoursesSection } from "./sections/CoursesSection/CoursesSection";
import { SuccessIntroSection } from "./sections/SuccessIntroSection/SuccessIntroSection";
import { StatsSection } from "./sections/StatsSection/StatsSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CoursesSection />
      <SuccessIntroSection/>
      <StatsSection/>
    </>
  );
}

export default App;
