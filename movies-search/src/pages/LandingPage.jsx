import Navbar from "../components/Navbar";
import bg from '../assets/bg.jpg'

const LandingPage = () => {
  return (
    <div>
      <div className="h-screen w-screen absolute top-0 left-0 z-0">
        <img className="h-full w-full opacity-50" src={bg} alt="" />
      </div>
      <div className="h-screen w-screen absolute top-0 left-0 z-10 px-10">
        <Navbar />
              <div className="h-[90%] flex justify-center items-center">
                  <h1 className="text-5xl">Langin page coming soon</h1>
              </div>
      </div>
    </div>
  );
};

export default LandingPage;
