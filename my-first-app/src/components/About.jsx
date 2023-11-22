import Pic from "../assets/Pic.png";
function Section2() {
  return (
    <div className="About">
      <div className="about-me">
        <button className="button2">About me</button>
      </div>
      <div className="full-container">
        <div className="img">
          <img src={Pic.src} />
        </div>
        <div className="Texts-1">
          <h1>Curious about me? Here you have it:</h1>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack<br></br> development (React.js & Node.js). I am very
            enthusiastic about bringing the<br></br> technical and visual
            aspects of digital products to life. User experience, pixel<br></br>
            perfect design, and writing clear, readable, highly performant code
            matters<br></br> to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            <br></br>continued to grow and evolve as a developer, taking on new
            challenges and<br></br> learning the latest technologies along the
            way. Now, in my early thirties, 7<br></br>
            years after starting my web development journey, I'm building
            cutting-edge<br></br> web applications using modern technologies
            such as Next.js, TypeScript,<br></br> Nestjs, Tailwindcss, Supabase
            and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to<br></br> end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on<br></br> twitter or on indie hacker, witnessing the
            journey of early startups or<br></br>
            enjoying some free time. You can follow me on Twitter where I share
            tech-related<br></br> bites and build in public, or you can follow
            me on GitHub.
          </p>
          <div className="lis">
            <div className="two">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </div>
            <div className="three">
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </div>
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and<br></br> say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
}
export default Section2;