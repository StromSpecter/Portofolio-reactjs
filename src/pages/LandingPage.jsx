import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Service from "../components/Service";
import Portofolio from "../components/Portofolio";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Header />
      <div className="flex-row items-center min-h-screen">
        {/* about */}
        <About />

        {/* service */}
        <Service />

        {/* portofolio */}
        <Portofolio />
      </div>
    </div>
  );
};

export default LandingPage;
