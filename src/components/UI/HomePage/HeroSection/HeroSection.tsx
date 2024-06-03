/* eslint-disable react/no-unescaped-entities */
import bgImg from "@/assets/bg.jpg";
import HeroImage from "@/assets/HeroImage.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className="relative hero min-h-screen bg-contain bg-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-95 backdrop-blur-sm"></div>

      <div className="relative hero-content flex-col lg:flex-row-reverse z-10 p-6 lg:p-12">
        <div className="flex-shrink-0 lg:mr-6">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="w-full"
            layout="responsive"
            width={300}
            height={200}
          />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">
            Life is in Your Veins: Share It! Be The Lifeline!
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-3 text-red-600">
            Donate Blood, Save Lives!
          </h1>
          <p className="pb-6">
            Every drop counts in the journey of hope. Be the beacon of light for
            someone in their darkest hour. Your blood donation is not just a
            gesture; it's a lifeline. Join us in this noble mission to save
            lives and ignite hope. Together, we can make a difference that lasts
            a lifetime.
          </p>
          <div className="join flex flex-col md:flex-row md:items-center">
            <div className="mb-2 md:mb-0 md:mr-2">
              <input className="input input-bordered" placeholder="Search" />
            </div>
            <div className="mb-2 md:mb-0 md:mr-2">
              <label htmlFor="genre" className="sr-only">
                Select Genre
              </label>
              <select id="genre" className="select select-bordered">
                <option disabled selected>
                  Filter
                </option>
                <option>Blood Type</option>
                <option>Location</option>
                <option>Availability</option>
              </select>
            </div>
            <div>
              <button className="btn bg-red-700 text-white font-bold">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;