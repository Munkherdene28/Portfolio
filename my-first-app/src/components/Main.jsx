import sarah from "../assets/sarah.jpeg";
import Icon from "./Icon";
function Main() {
  return (
    <div className="subcontainer">
      <div className="full">
        <div className="texts">
          <h1>Hi, I’m Sagar 👋</h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing)<br></br> exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even<br></br>
            though I have been creating web applications for over 7 years, I
            still love it as if it was something new.
          </p>
        </div>
        <div className="icons">
          <div className="icon1">
            <p>
              {" "}
              <Icon />
              Ahmedabad, India
            </p>
          </div>
          <div className="icon2">
            <p>Available for new projects</p>
          </div>
        </div>
      </div>
      <img src={sarah.src} />
    </div>
  );
}

export default Main;
