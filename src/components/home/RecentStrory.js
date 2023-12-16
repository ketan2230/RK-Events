import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings.js";

const RecentStory = () => {
  const HighlightedText = tw.span`bg-yellow-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Heading = tw(
    SectionHeading
  )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

  return (
    <section className="recent-event-story-section common-section-gap">
      <div className="container" style={{ display: 'block' }}>
        <div className="text-card" style={{ width: "100%" }}>
          <Heading style={{ width: "100%", textAlign: "center", marginBottom: "25px" }}>Our Recent <HighlightedText>Stories</HighlightedText></Heading>
        </div>
        <div className="recent-event-story-wrapper">
          <div className="recent-event-story-img01">
            <img
              src="https://images.unsplash.com/photo-1537026952880-102669376468?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="recent-event-story-img02">
            <img
              src="https://cdn0.weddingwire.in/vendor/2199/3_2/640/png/capture_15_52199.webp"
              alt=""
            />
          </div>
          <div className="recent-event-story-img03">
            <img
              src="https://cdn0.weddingwire.in/vendor/2199/3_2/640/png/2_15_52199.webp"
              alt=""
            />
          </div>
          <div className="recent-event-story-img04">
            <img
              src="https://cdn0.weddingwire.in/vendor/2199/3_2/640/jpg/special-designs_v7.webp"
              alt=""
            />
          </div>
          <div className="recent-event-story-img05">
            <img
              src="https://mbatuts.com/wp-content/uploads/2019/11/Event-Planning-Business-in-plan-672x420.jpg"
              alt=""
            />
          </div>
          <div className="recent-event-story-img06">
            <img
              src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentStory