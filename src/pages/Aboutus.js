import './../style/Aboutus.scss'
import './../style/base.scss'
import { ReactComponent as InstagramIcon } from "../images/instagram-icon.svg";

const AboutUs = () => {
  return (
    <>
      <div className='main-image-wrapper'>
        <span className='know-text'>Know</span>
        <h1 className='page-title'>ABOUT US</h1>
        <p className='sinse-text'>SINCE 1998</p>
      </div>
      <div className='feature-wrapper'>
        <div className='card'>
          <InstagramIcon />
          <div className='card-header'>Served With love</div>
          <div className='card-text'>Meet the most advanced live website builder on WordPress. Featuring latest web technologies,enjoyable UX.</div>
        </div>
        <div className='card'>
          <InstagramIcon />
          <div className='card-header'>Served With love</div>
          <div className='card-text'>Meet the most advanced live website builder on WordPress. Featuring latest web technologies,enjoyable UX.</div>
        </div>
        <div className='card'>
          <InstagramIcon />
          <div className='card-header'>Served With love</div>
          <div className='card-text'>Meet the most advanced live website builder on WordPress. Featuring latest web technologies,enjoyable UX.</div>
        </div>
        <div className='card'>
          <InstagramIcon />
          <div className='card-header'>Served With love</div>
          <div className='card-text'>Meet the most advanced live website builder on WordPress. Featuring latest web technologies,enjoyable UX.</div>
        </div>
      </div>
    </>
  )
}

export default AboutUs