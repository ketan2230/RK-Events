import './../style/new.scss'

export default function New() {
  let data = [1, 2, 3, 4]
  return (
    <>
      <div className='container'>
        <div className='text-card'>
          <h4 className='sub-header'>INTRODUCTION</h4>
          <h1 className='main-header'>WE ARE A</h1>
          <h1 className='main-header'>CREATIVE </h1>
          <h1 className='main-header'>DESIGN STUDIO</h1>
          <div className='empty-block' />
          <p className='description'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
        </div>
        <div className='image-card'>
          <span className='overlay'>
            <img className='about-image' alt='' src='https://img.freepik.com/premium-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110090.jpg' />
          </span>
        </div>
      </div>
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
      <div className='contact-container'>
        <div className='image-card-container'>
          <div className='card'>
            <i className="fa-solid fa-phone icon"></i>
            <p className='title'>PHONE</p>
            <span className='detail'>+88 (0) 101 0000 000</span>
          </div>
          <div className='card'>
            <i className="fa-solid fa-map icon"></i>
            <p className='title'>LOCATION</p>
            <span className='detail'>198 West 21th Street, New York, NY 10010</span>
          </div>
          <div className='card'>
            <i className="fa-solid fa-envelope icon"></i>
            <p className='title'>EMAIL</p>
            <span className='detail'>rkevents17@gmail.com</span>
          </div>
          <div className='card'>
            <i className="fa-solid fa-fax icon"></i>
            <p className='title'>SOCIAL</p>
            <span className='detail'>+88 (0) 101 0000 000</span>
          </div>
        </div>
      </div>
      <div className='google-map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4388319826903!2d72.63657677607164!3d23.04436791551294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e870dc8a56111%3A0x6fcf1e5553e6d549!2sRK%20Events!5e0!3m2!1sen!2sin!4v1699354861933!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{
            border: '0',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="rkevents-google-map"
        />
      </div>
    </>
  )
}