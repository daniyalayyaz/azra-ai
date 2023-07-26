import Navbar from "@/Components/Navbar";
import ChatBotCard from "./ChatBotCard";
function Index() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[32.5rem] bg-fixed rounded-br-3xl"
        style={{ backgroundImage: `url("/images/bg.jpg")` }}
      >
        <div className="mx-auto container">
          <Navbar />
          <div className="w-[58rem] mt-[2rem] ml-[2rem]">
            <h1 className="text-white font-bold text-6xl ">
              The Azra Care Platform
            </h1>
            <p className="text-white mt-[2rem] font-medium">
              Azra Care’s platform is a pioneering digital health solution that
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
    </div>
  );
}

export default Index;
