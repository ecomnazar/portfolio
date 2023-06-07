import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div id="mainPage">
      <div className="container">
        <div className="row">
          <ul>
            <li><a href="https://www.instagram.com/70nzr/"><img src="images/instagram.png" alt="" /></a></li>
            <li><a href="https://t.me/NabelliAdam"><img src="images/telegram.png" alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/nazar-jumayew-a00957275"><img src="images/linkedin.png" alt="" /></a></li>
            <li><a href="https://github.com/ecomnazar/"><img src="images/github.png" alt="" /></a></li>
          </ul>
        </div>
        <div className="row">
          <div className="col-2">
            <div className="box">
              <h1 className="mainText">
                Bringing <span>Your</span> Ideas To <span>Life</span> Through Me
                And My <span>Experience</span>
              </h1>
              <a href="tel:+99361234355" className="hireMeButton">Hire Me</a>
            </div>
            <div className="row">
              <div className="miniBox">
                <h2>2+</h2>
                <p>Years Experience</p>
              </div>
              <div className="miniBox">
                <h2>5+</h2>
                <p>Handle Project</p>
              </div>
              <div className="miniBox">
                <h2>3+</h2>
                <p>Clients</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="nameBox row">
              <p className="nameText">Name:</p>
              <h4>Nazar Jumayew</h4>
            </div>
            <div className="nameBox row">
              <p className="nameText">Based In:</p>
              <h4>Turkmenistan, Ashgabat City</h4>
            </div>
            <div className="descBox">
              <div className="row">
                <h4>About</h4>
                <p className="resumeText">Resume</p>
              </div>
              <p className="aboutText">
                Hi! I'm Nazar Jumayew, MOBILE and FRONT-END Developer with 2+
                year experience.
                <br />
                <br />
                Front End - Layout of adaptive and cross-browser sites of
                varying complexity using HTML5, CSS3 and
                Javascript.Developed the client side of new products (React
                JS).Refactoring existing code. Collaborated with designers and
                developers.
                <br />
                <br />
                Technologies: HTML5, CSS, Sass/Scss, TailwindCss, JavaScript,
                React JS, TypeScript, Redux, UI Components, Firebase, Git
                <br />
                <br />
                Mobile - Development of cross-platform applications on the
                Flutter framework for about 6 months. Make up UI of any
                complexity. Worked with HTTP Requests. Worked with external
                packages.
              </p>
            </div>
          </div>
        </div>
        {/* <h1 className="myProjects">My Projects</h1>
        <div className="row">
          <Link to="/Mobile" className="col-3">
            <h2>Mobile</h2>
          </Link>
          <Link to="/Website" className="col-3">
            <h2>Website</h2>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default MainPage;
