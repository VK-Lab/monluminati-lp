import EmblaCarousel from "./EmblaCarousel";
import imageHero from "../assets/image--hero.svg";

const HeroSection = () => {
  return (
    <div className="relative pt-[200px] pb-[200px] min-h-screen sm:min-h-[880px]">
      <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
        <h1 className="!leading-[1.25] sm:mx-auto md:mx-0 sm:w-10/12 md:w-1/2 font-semibold text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl md:text-left xl:text-7xl dark:text-white">
          Unveil the enigmatic world of Monad with <br className="lg:block hidden" />{" "}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
            Monluminati
          </span>
        </h1>
        <div className="lg:flex">
          <div className="relative mt-8 md:mt-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
            <p className="text-lg text-gray-700 dark:text-gray-300 lg:w-11/12 sm:text-2xl mb-6">
              Discover everything in the Monad Ecosystem
            </p>
            <div className="mb-10 flex items-center gap-x-4 justify-center md:justify-start">
              <button className="btn--primary min-w-[160px] md:w-[250px] md:h-[64px] text-center border border-white/80 text-base sm:text-lg md:text-2xl">
                Explore
              </button>
              <button className="btn--secondary min-w-[160px] md:w-[250px] md:h-[64px] text-center border border-white/80 text-base sm:text-lg md:text-2xl">
                Follow Us
              </button>
            </div>

            <div className="max-w-[640px] mt-12">
              <p className="font-semibold text-xl text-uppercase mb-4 uppercase text-[#E8E8E8]">
                Leading Projects
              </p>
              <div className="leading-projects">
                <EmblaCarousel
                  options={{
                    slidesToScroll: "auto",
                  }}
                  slides={new Array(6).fill(1)}
                />
              </div>
            </div>
          </div>
          <div className="top-0 mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
            <div className="relative w-full max-w-[640px] ml-auto">
              {/* <div
                aria-hidden="true"
                className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
              ></div> */}
              <img
                // src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                src={imageHero}
                className="relative w-full max-w-[640px]"
                alt="wath illustration"
                loading="lazy"
                width="320"
                height="320"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
