import logo from "../assets/logo.png";
function Section4() {
  return (
    <div className="flex flex-col gap-8 bg-gray-100">
      <div className="flex justify-center flex-col items-center gap-6">
        <button className="w-20 h-7 rounded-lg bg-gray-600 ">Experience</button>
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      <div className="flex gap-20 bg-white rounded-lg justify-center">
        <div className="logo-up">
          <img src={logo.src} />
        </div>
        <div className="flex gap-20 ">
          <div className="flex flex-col gap-3 font-Inter font-normal">
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
      <div className="flex gap-20 bg-white rounded-lg justify-center">
        <div className="logo-up">
          <img src={logo.src} />
        </div>
        <div className="flex gap-20 ">
          <div className="flex flex-col gap-3 font-Inter font-normal">
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
      <div className="flex gap-20 bg-white rounded-lg justify-center">
        <div className="logo-up">
          <img src={logo.src} />
        </div>
        <div className="flex gap-20 ">
          <div className="flex flex-col gap-3 font-Inter font-normal">
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
