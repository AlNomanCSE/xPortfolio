import React from "react";
import StarIcon from "@/../public/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection: React.FC = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,rgba(0,0,0,0.7)_90%,transparent)] animate-marquee">
          <div className="flex gap-4 flex-none py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center group">
                <span className="text-gray-900 uppercase font-extrabold text-sm transition-all duration-300 ease-in-out transform group-hover:scale-110">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-700 -rotate-12 transition-transform duration-300 ease-in-out group-hover:rotate-0" />
              </div>
            ))}
          </div>
          <div className="flex gap-4 flex-none py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center group">
                <span className="text-gray-900 uppercase font-extrabold text-sm transition-all duration-300 ease-in-out transform group-hover:scale-110">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-700 -rotate-12 transition-transform duration-300 ease-in-out group-hover:rotate-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
