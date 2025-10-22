import "./App.css";
import Banner from "./Components/Banner";
import Navber from "./Components/Navber";
import Service from "./Components/Service";

function App() {
  return (
    <>
      <div>
        <div className="px-56 bg-[#FFFCF7]">
          <Navber />
          <Banner />
        </div>
        <Service />
      </div>
    </>
  );
}

export default App;
