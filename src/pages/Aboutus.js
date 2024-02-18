import "./../style/Aboutus.scss";
import "./../style/base.scss";
import Title from "components/common/Title.js"
import MainFeature from "components/features/TwoColWithButton.js";
import tw from "twin.macro";
// import RecentStory from "../components/home/RecentStrory";
// import { ReactComponent as InstagramIcon } from "../images/instagram-icon.svg";

const AboutUs = () => {
  // let data = [1, 2, 3, 4]
  const currentYear = new Date().getFullYear()
  const yearsSinceEstablishment = currentYear - 2015;
  const Subheading = tw.span`tracking-wider text-sm font-medium text-yellow-800`;
  const HighlightedText = tw.span`bg-yellow-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8 text-base`;
  const imageCss = tw`rounded-4xl`;

  return (
    <>
      <Title header="Our Journey" topHeader="Know" bottomHeader="SINCE 2015" />
      <MainFeature
        id="about"
        subheading={<Subheading>Established Since 2015</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over {yearsSinceEstablishment}+ years.</HighlightedText>
          </>
        }
        description={
          <Description>
            RK Events, your one stop solution for making any event
            memorable or a success.
            <br />
            <br />
            We provide Birthday Party, Wedding Arrangements, Bride & Groom
            Entries, Catering, Baby Shower, Ring Ceremony, Lights & Sound,
            Photography & Videography and etc.
            <br />
            <br />
            With a Team having an expertise of over 6+ years, your event being
            a success is guaranteed.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* <section className="introduction-section common-section-gap">
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
      </section> */}

      {/* <section className="our-team-section common-section-gap">
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
      </section> */}

      {/* <div className="feature-wrapper">
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
      </div> */}

      {/* <RecentStory /> */}

    </>
  );
};

export default AboutUs;
