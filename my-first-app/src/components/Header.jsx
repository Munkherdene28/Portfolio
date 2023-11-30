import LogoIcon from "./LogoIcon";
import { useState } from "react";
import Theme from "./Theme";
export default function header() {
  return (
    <div className="w-full px-4 md:max-w-[1280px] md:max-auto">
      <div className="flex justify-between items-center w-full py-4">
        <LogoIcon />
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 list-none">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <div className="flex justify-center items-center gap-4">
            <div>
              <Theme />
            </div>
            <button className="w-full bg-black text-white px-4 py-1.5 rounded-lg font-medium dark:text-red-400">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
