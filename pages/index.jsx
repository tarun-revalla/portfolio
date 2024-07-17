"use client";
import Socials from "../components/Socials";
import Animatedintro from "../components/Animatedintro";
import Photo from "../components/Photo";
import WavyBackground from "../components/ui/WavyBackground";
import DownloadButton from "../components/DownloadButton";
import Stats from "../components/Stats";
import Stairs from "../components/Layout/Stairs";

const Home = () => {
  return (
    <Stairs>
      <WavyBackground className="z-0 w-full h-full p-0">
        <section id="homepage" className="h-full transition-all duration-1000">
          <div className="container mx-auto h-auto">
            <div className="flex flex-col xl:flex-row items-center justify-between sm:pt-15 pt-5 lg:pt-32 xl:pt-10 xl:pb-10 ">
              <div className="text-center xl:text-left xl:mb-13 order-2 xl:order-none">
                <Animatedintro />
                <div className="flex flex-col items-center xl:flex-row xl:items-start xl:gap-8">
                  <DownloadButton
                    fileName="tarun_resume_dev.pdf"
                    buttonText="Download CV"
                  />
                  <div className="mt-8 xl:my-auto xl:ml-8">
                    <Socials
                      containerStyles="flex gap-6"
                      iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transistion-all duration-500"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Photo />
              </div>
            </div>
            <Stats />
          </div>
        </section>
      </WavyBackground>
    </Stairs>
  );
};

export default Home;
