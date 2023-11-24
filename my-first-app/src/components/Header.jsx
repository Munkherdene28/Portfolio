import LogoIcon from "./LogoIcon";
import Theme from "./Theme";
export default function header() {
  return (
    <div className="flex justify-center items-center py-4 px-20">
      <div className="flex justify-center gap-72">
        <div className="Logo">
          <LogoIcon />
        </div>
        <div className="flex justify-center items-center gap-12">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
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
