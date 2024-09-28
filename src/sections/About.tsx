import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/../public/icons/star.svg";
import bookImage from "@/../public/images/book-cover.png";
import Image from "next/image";

import JavaScriptIcon from "@/../public/icons/square-js.svg";
import HtmlIcon from "@/../public/icons/html5.svg";
import CSSIcon from "@/../public/icons/css3.svg";
import ReactIcon from "@/../public/icons/react.svg";
import GitHubIcon from "@/../public/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import MapImage from "@/../public/images/map.png";
import SmileImage from "@/../public/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    iconType: ReactIcon,
  },
  {
    title: "AWS",
    iconType: CSSIcon,
  },
  {
    title: "Spring Boot",
    iconType: GitHubIcon,
  },
  {
    title: "React JS",
    iconType: HtmlIcon,
  },
];

const hobbies = [
  { title: "Singing", emoji: "🎶", left: "50%", top: "5%" },
  { title: "Playing ", emoji: "🏏", left: "5%", top: "50%" },
  { title: "Singing", emoji: "🎶", left: "10%", top: "35%" },
  { title: "Playing ", emoji: "🏏", left: "45%", top: "60%" },
  { title: "Singing", emoji: "🎶", left: "20%", top: "17%" },
  { title: "Playing ", emoji: "🏏", left: "35%", top: "40%" },
  { title: "Singing", emoji: "🎶", left: "70%", top: "45%" },
  { title: "Playing ", emoji: "🏏", left: "5%", top: "65%" },
];
export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, What I do, and what inspires me ."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore the books Shaping my perspectives."
                className=""
              />
              <Image
                src={bookImage}
                alt="Book Cover"
                className="w-40 mx-auto mt-2 md:mt-0"
              />
            </Card>
            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className=""
              />

              <ToolboxItems
                toolboxItems={toolboxItems}
                className=""
                itemsWrapperClassName=""
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2">
              <Image
                src={MapImage}
                alt="My Location"
                className="h-full w-full object-cover object-left-top"
              />
              <Image
                src={SmileImage}
                alt="My Image"
                className="size-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full "
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
