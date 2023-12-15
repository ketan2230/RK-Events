import "./../style/Aboutus.scss";
import "./../style/base.scss";
import Title from "components/common/Title.js"
// import RecentStory from "../components/home/RecentStrory";
import { ReactComponent as InstagramIcon } from "../images/instagram-icon.svg";

const AboutUs = () => {
  let data = [1, 2, 3, 4]
  return (
    <>
      <Title header="ABOUT US" topHeader="Know" bottomHeader="SINCE 1998" />
      <section className="introduction-section common-section-gap">
        <div className="container">
          <div className="text-card">
            <h4 className="sub-header">INTRODUCTION</h4>
            <h1 className="main-header">WE ARE A CREATIVE DESIGN STUDIO</h1>
            <div className="empty-block" />
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.
            </p>
          </div>
          <div className="image-card">
            <span className="overlay">
              <img
                className="about-image"
                alt=""
                src="https://img.freepik.com/premium-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110090.jpg"
              />
            </span>
          </div>
        </div>
      </section>

      <section className="our-team-section common-section-gap">
        <div className='team-container'>
          <h4 className='sub-header'>MEET THE</h4>
          <h1 className='main-header'>PROFESSIONAL TEAM</h1>
          <div className='empty-block' />
          <div className='image-card-container'>
            {data.map((i) => (
              <div className='image-card' key={i}>
                <span className="overlay">
                  <img src='https://img.freepik.com/premium-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110090.jpg' alt='' />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="feature-wrapper">
        <div className="feature-container">
          <div className="card">
            <InstagramIcon />
            <div className="card-header">Served With love</div>
            <div className="card-text">
              Meet the most advanced live website builder on WordPress. Featuring
              latest web technologies,enjoyable UX.
            </div>
          </div>
          <div className="card">
            <InstagramIcon />
            <div className="card-header">Served With love</div>
            <div className="card-text">
              Meet the most advanced live website builder on WordPress. Featuring
              latest web technologies,enjoyable UX.
            </div>
          </div>
          <div className="card">
            <InstagramIcon />
            <div className="card-header">Served With love</div>
            <div className="card-text">
              Meet the most advanced live website builder on WordPress. Featuring
              latest web technologies,enjoyable UX.
            </div>
          </div>
          <div className="card">
            <InstagramIcon />
            <div className="card-header">Served With love</div>
            <div className="card-text">
              Meet the most advanced live website builder on WordPress. Featuring
              latest web technologies,enjoyable UX.
            </div>
          </div>
        </div>
      </div>

      {/* <RecentStory /> */}

    </>
  );
};

export default AboutUs;
