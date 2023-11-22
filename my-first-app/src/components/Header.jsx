import LogoIcon from "./LogoIcon";
import Theme from "./Theme";
export default function header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="Logo">
          <LogoIcon />
        </div>

        <div className="Navigation">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <div className="action">
            <div className="theme">
              <Theme />
            </div>
            <button className="button">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}
