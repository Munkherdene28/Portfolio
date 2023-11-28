import LogoIcon from "./LogoIcon";
import Theme from "./Theme";
export default function header() {
  return (
    <div className="flex justify-center items-center py-4 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center md:gap-72">
        <div className="">
          <LogoIcon />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
          <p className="mb-2 md:mb-0">About</p>
          <p className="mb-2 md:mb-0">Work</p>
          <p className="mb-2 md:mb-0">Testimonials</p>
          <p className="mb-2 md:mb-0">Contact</p>
          <div className="flex justify-center items-center gap-4">
            <div className="theme">
              <Theme />
            </div>
            <button className="flex bg-black border-black rounded-lg text-white w-28 h-9 items-center justify-center">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
