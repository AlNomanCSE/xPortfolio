import React from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  toolboxItems,
  className,
  itemsWrapperClassName,
}: {
  className: string;
  itemsWrapperClassName: string;
  toolboxItems: {
    title: string;
    iconType: React.ElementType;
  }[];
}) => {
  return (
    <div
      className={twMerge(
        "flex  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {toolboxItems.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
