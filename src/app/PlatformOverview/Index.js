import Navbar from "@/app/Components/Navbar";
import ChatBotCard from "./ChatBotCard";
import SocialDeterminants from "./SocialDeterminants";
import PhysicalTherapy from "./PhysicalTherapy";
import AnalyticsCard from "./AnalyticsCard";
import OrthopedicCard from "./OrthopedicCard";
import Footer from "../Components/Footer";
function Index() {
  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center h-[32.5rem] bg-fixed rounded-br-3xl"
        style={{ backgroundImage: `url("/images/bg.jpg")` }}
      >
        <div className="mx-auto container">
          <Navbar />
          <div className="w-[58rem] mt-[8rem] ml-[10rem]">
            <h1
              className="text-white font-bold text-[4rem]"
              style={{ fontFamily: " Poppins" }}
            >
              The Azra Care Platform
            </h1>
            <p className="text-white mt-[2rem] font-medium">
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
      <Footer />
    </div>
  );
}

export default Index;
