import "./App.css";
import Banner from "./Components/Banner";
import CustomerTestimonial from "./Components/CustomerTestimonial";
import Features from "./Components/Features";
import Navber from "./Components/Navber";
import PricingPlan from "./Components/PricingPlan";
import Service from "./Components/Service";
import SlideFeatures from "./Components/SlideFeatures";
import WorkHard from "./Components/WorkHard";

function App() {
  return (
    <>
      <div>
        <div className="px-56 bg-[#FFFCF7]">
          <Navber />
          <Banner />
        </div>
        <Service />
        <Features />
        <WorkHard />
        <SlideFeatures />
        <PricingPlan />
        <CustomerTestimonial />
      </div>
    </>
  );
}

export default App;
