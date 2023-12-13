import "./../style/Aboutus.scss";
import "./../style/base.scss";
import { ReactComponent as InstagramIcon } from "../images/instagram-icon.svg";

const AboutUs = () => {
  let data = [1, 2, 3, 4]
  return (
    <>
      <div className="main-image-wrapper">
        <span className="know-text">Know</span>
        <h1 className="page-title">ABOUT US</h1>
        <p className="sinse-text">SINCE 1998</p>
      </div>
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

      <section className="recent-event-story-section common-section-gap">
        <div className="container" style={{display:'block'}}>
        <div className="text-card" style={{width:"100%"}}>
            <h2 className="main-header text-center" style={{width:"100%",textAlign:"center",marginBottom:"25px"}}>Recent Events Storys</h2>
          </div>
          <div className="recent-event-story-wrapper">
            <div class="recent-event-story-img01">
              <img
                src="https://images.unsplash.com/photo-1537026952880-102669376468?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div class="recent-event-story-img02">
              <img
                src="https://cdn0.weddingwire.in/vendor/2199/3_2/640/png/capture_15_52199.webp"
                alt=""
              />
            </div>
            <div class="recent-event-story-img03">
              <img
                src="https://cdn0.weddingwire.in/vendor/2199/3_2/640/png/2_15_52199.webp"
                alt=""
              />
            </div>
            <div class="recent-event-story-img04">
              <img
                src="https://cdn0.weddingwire.in/vendor/2199/3_2/640/jpg/special-designs_v7.webp"
                alt=""
              />
            </div>
            <div class="recent-event-story-img05">
              <img
                src="https://mbatuts.com/wp-content/uploads/2019/11/Event-Planning-Business-in-plan-672x420.jpg"
                alt=""
              />
            </div>
            <div class="recent-event-story-img06">
              <img
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default AboutUs;
