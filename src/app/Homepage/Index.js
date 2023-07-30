import Navbar from "@/app/Components/Navbar";
import Brands from "./Brands";
import Cards from "./Cards";
function Index() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen bg-fixed rounded-br-3xl"
        style={{ backgroundImage: `url("/images/bg.jpg")` }}
      >
        <div className="mx-auto container">
          <Navbar />
          <div className="w-[58rem] mt-[2rem]">
            <h1 className="text-white font-bold text-6xl ">
              AN EXPERT-CURATED AI PLATFORM PIONEERING THE FUTURE OF SPECIALTY
              CARE
            </h1>
            <p className="text-white mt-[2rem] font-medium">
              Azra Care is an equity-focused digital health platform that
              enables specialty providers to improve patient outcomes by
              integrating Value-Based Care (VBC) and population health models
              into systems while actively addressing healthcare disparities. Our
              AI-powered care navigation and clinical workflow automation
              alleviates provider strain and enhance personalized
              patient-provider relationships.
            </p>
          </div>
        </div>
      </div>
      <Brands />
      <Cards />
    </div>
  );
}

export default Index;
