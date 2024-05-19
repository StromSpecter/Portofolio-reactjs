import { FaLaptopCode, FaMobile } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { BsWindowStack } from "react-icons/bs";
const Service = () => {
  return (
    <div
      id="service"
      className="container flex flex-col items-start justify-center gap-5 p-4 mx-auto lg:px-64"
    >
      <p className="text-xl font-bold">Service</p>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-row items-center w-full gap-4 p-10 border-t-2 border-b-8 border-black border-x-2 rounded-3xl">
          <div className="flex flex-col w-full gap-20">
            <p className="text-xl font-bold">Website Developer</p>
            <button className="px-4 py-2 text-sm border-2 border-black rounded-full">Learn more</button>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <FaLaptopCode className="text-8xl"/>
          </div>
        </div>
        <div className="flex flex-row items-center w-full gap-4 p-10 text-white bg-black border-t-2 border-b-8 border-black border-x-2 rounded-3xl">
          <div className="flex flex-col w-full gap-20">
            <p className="text-xl font-bold">Mobile App Developer</p>
            <button className="px-4 py-2 text-sm border-2 border-white rounded-full">Learn more</button>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <FaMobile className="text-8xl"/>
          </div>
        </div>
        <div className="flex flex-row items-center w-full gap-4 p-10 border-t-2 border-b-8 border-black md:bg-black md:text-white border-x-2 rounded-3xl">
          <div className="flex flex-col w-full gap-20">
            <p className="text-xl font-bold">UI / UX Designer</p>
            <button className="px-4 py-2 text-sm border-2 border-black rounded-full md:border-white">Learn more</button>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <BsWindowStack className="text-8xl"/>
          </div>
        </div>
        <div className="flex flex-row items-center w-full gap-4 p-10 text-white bg-black border-t-2 border-b-8 border-black md:bg-white md:text-black border-x-2 rounded-3xl">
          <div className="flex flex-col w-full gap-20">
            <p className="text-xl font-bold">Maintence and Technical Support</p>
            <button className="px-4 py-2 text-sm border-2 border-white rounded-full md:border-black">Learn more</button>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <FaScrewdriverWrench className="text-8xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
