import logo from "../assets/logo.png";
function Section4() {
  return (
    <div className="full-subcontainer">
      <div className="experience">
        <button className="button2">Experience</button>
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      <div className="upwork">
        <div className="logo-up">
          <img src={logo.src} />
        </div>
        <div className="full-data">
          <div className="up-text">
            <h1>Sr. Frontend Developer</h1>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </div>
          <div className="dates">
            <p>Nov 2021 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section4;