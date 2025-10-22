import "./App.css";
import Banner from "./Components/Banner";
import Features from "./Components/Features";
import Navber from "./Components/Navber";
import Service from "./Components/Service";
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
      </div>
    </>
  );
}

export default App;
