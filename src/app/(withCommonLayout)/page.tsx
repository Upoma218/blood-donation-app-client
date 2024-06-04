import AboutUs from "@/components/UI/HomePage/AboutUs/AboutUs";
import CovarageArea from "@/components/UI/HomePage/CovarageArea/CovarageArea";
import DonationTips from "@/components/UI/HomePage/DonationTips/DonationTips";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import SearchDonar from "@/components/UI/HomePage/SearchDonar/SearchDonar";
import TeamInformation from "@/components/UI/HomePage/TeamInformation/TeamInformation";

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <TeamInformation></TeamInformation>
      <SearchDonar></SearchDonar>
      <DonationTips></DonationTips>
      <CovarageArea></CovarageArea>
    </>
  );
};

export default HomePage;
