import "./about.css";

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about-section">
          <h1>About Me</h1>
          <p className="about-text">{about_me}</p>
        </div>
        <div className="about-section">
          <h1>About Explorify</h1>
          <p className="about-text">{about_explorify}</p>
        </div>
      </div>
    </div>
  );
}

export default About;

const about_me = (
  <>
    Hello. I'm the developer of Explorify. With a passion for both music and
    technology, I created this platform to bridge the gap between music
    discovery and personalized listening. My goal is to help you explore a mix
    of underground, niche, and popular tracks, making every musical journey
    unique. When I'm not coding, I'm always diving into new music and creative
    projects. If you have any questions or want to connect, feel free to reach
    out at{" "}
    <span>
      <a className="email" href="mailto:Devir904011@gmail.com">
        Devir904011@gmail.com
      </a>
    </span>
    .{" "}
  </>
);
const about_explorify = (
  <>
    Explorify is a music discovery platform that brings both familiar hits and
    hidden gems to your ears. Whether you're into niche underground artists or
    the latest chart-toppers, it got something for every listener. my goal is to
    help you discover new favorites and broaden your musical horizons.
  </>
);
