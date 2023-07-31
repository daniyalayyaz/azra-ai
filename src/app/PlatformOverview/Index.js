import Navbar from "@/app/Components/Navbar";
import ChatBotCard from "./ChatBotCard";
import SocialDeterminants from "./SocialDeterminants";
import PhysicalTherapy from "./PhysicalTherapy";
import AnalyticsCard from "./AnalyticsCard";
import OrthopedicCard from "./OrthopedicCard";
import Footer from "../Components/Footer";
import ContactUs from "./ContactUs";
function Index() {
  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center h-[36rem] w-full absolute bg-fixed rounded-br-[120px]"
        style={{ backgroundImage: `url("/images/bg.png")` }}
      >
        <div className="mx-auto container">
          <Navbar />
          <div className="w-[70rem] mt-[6rem] ml-[10rem]">
            <h1
              className="text-white boldfont text-[4rem]"
              style={{ fontFamily: "sans-serif" }}
            >
              The Azra Care Platform
            </h1>
            <p
              className="text-white mt-[2rem] mediumfont mb-[4rem]"
              style={{ color: "#DEE1F8" }}
            >
              Azra Care's platform is a pioneering digital health solution that
              leverages artificial intelligence to revolutionize specialty care.
              Our Care Concierge uses large language models informed by
              evidence-based data curated by our clinician specialists,
              providing automated and empathetic responses to patient queries
              throughout their care journey. Our intelligent clinical support
              triage system escalates concerns to your team before they escalate
              into adverse events. By actively addressing healthcare
              disparities, our platform also enhances patient-provider
              relationships, propelling patient outcomes forward while
              simultaneously reducing the burden on healthcare providers.
            </p>
          </div>
        </div>
      </div>
      <ChatBotCard />
      <SocialDeterminants />
      <PhysicalTherapy />
      <div className="flex flex-row gap-2 ml-[22rem]">
        <AnalyticsCard />
        <OrthopedicCard />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Index;
