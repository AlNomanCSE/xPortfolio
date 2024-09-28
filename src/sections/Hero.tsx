import Image from "next/image";
import ArrowDown from "@/../public/icons/arrow-down.svg";
import grainImage from "@/../public/images/grain.jpg";
import StarIcon from "@/../public/icons/star.svg";
import SparklIcon from "@/../public/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-40 relative z-0 w-full">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,rgba(0,0,0,0.7)_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {/* all-rings */}
        {/* <div className="size-[1220px] hero-ring "></div> */}
        {/* <div className="size-[1020px] hero-ring "></div> */}
        {/* <div className="size-[820px] hero-ring "></div> */}
        {/* <div className="size-[620px] hero-ring "></div> */}
        {/* animation starts */}

        {/* <HeroOrbit size={800} rotation={-60}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit> */}
        {/* <HeroOrbit size={400} rotation={70}>
          <StarIcon className="size-12 text-emerald-300/10" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={439} rotation={-10}>
          <SparklIcon className="size-6 text-emerald-300/50" />
        </HeroOrbit>
        <HeroOrbit size={439} rotation={-98}>
          <SparklIcon className="size-6 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={439} rotation={-140}>
          <SparklIcon className="size-4 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={-200}>
          <SparklIcon className="size-3 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={-300}>
          <SparklIcon className="size-7 text-emerald-300/20 " />
        </HeroOrbit> */}
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="relative sm:w-[100px] sm:h-[120px] md:w-[200px] md:h-[240px]">
            <div className="absolute inset-0 rounded-full bg-white blur-md"></div>
            <div className="absolute inset-[4px] rounded-full overflow-hidden">
              <Image
                src="/images/IMG_20240129_234859.jpg"
                alt="Person peeking from behind laptop"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 rounded-full absolute inset-0 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide ">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-center md:justify-center mt-8 gap-4">
          <button className=" cursor-pointer inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="cursor-pointer inline-flex items-center gap-2 border border-white bg-white text-gray-950 px-6 h-12 rounded-xl">
            <span className="font-[2rem]">👋</span>
            <span className="font-bold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
