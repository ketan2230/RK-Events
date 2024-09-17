import React, { useRef, useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import EmailIllustrationSrc from "images/emailIllustration.svg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Title from "components/common/Title.js";

const Container = tw.div`relative px-6`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;
const HighlightedText = tw.p`bg-gray-700 text-gray-100 px-4 transform -skew-x-12 inline-block`;

// const socialMedia = styled.div`
// ${tw`flex items-center justify-between`}
// `
const SubmitButton = styled.button`
  ${tw`text-white py-3 px-2 mt-6`}
  transition: opacity 0.4s, background-color 0.4s, border 0.4s;
  font-weight: 600;
  background: #460fb3 !important;
  border-radius: 10px;
  border: 3px solid #460fb3;

  &:hover {
    background: transparent !important;
    color: #460fb3 !important;
  }
`;

export default ({
  heading = (
    <>
      Feel free to <HighlightedText>Get in touch</HighlightedText>
      <wbr /> with us.
    </>
  ),
  description = "Please Provide all details which mentioned in form, so we can provide our best services to you",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  const form = useRef();

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 2);
    document.getElementById("event_date").min = currentDate
      .toISOString()
      .split("T")[0];
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    setIsLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o72ffxs",
        "template_dde44iz",
        form.current,
        "bKkL5Ani3e2QNWqfd"
      )
      .then(
        (result) => {
          if (result) {
            setIsLoading(false);
            toast.success("Your details are submited Successfully", {
              style: {
                backgroundColor: "#5011CC",
                width: "350px",
              },
            });
          } else {
            toast.error("Something went wrong !");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Title
        header="Get in Touch"
        image="https://images.unsplash.com/photo-1470345961863-06d4b12d93b3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image imageSrc={EmailIllustrationSrc} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              <Heading>{heading}</Heading>
              {description && <Description>{description}</Description>}
              <Form action={formAction} ref={form} onSubmit={sendEmail}>
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Full Name"
                  required
                />
                {/* <Input type="number" name="contact" placeholder="Contact Number" value={contactNumber} required  /> */}
                <Input
                  type="text"
                  name="contact"
                  placeholder="Contact Number"
                  title="Ex:- 1234567890"
                  pattern="[1-9]{1}[0-9]{9}"
                  required
                  maxlength="10"
                  minLength="10"
                />
                <Input
                  type="email"
                  name="reply_to"
                  placeholder="Your Email Address"
                  required
                />
                <Input
                  type="text"
                  name="occasion"
                  placeholder="Ocassion"
                  required
                />
                <Input
                  type="date"
                  name="event_date"
                  id="event_date"
                  placeholder="Date"
                  required
                />
                <Textarea
                  name="requirenment"
                  placeholder="requirements, venue and Etc."
                  required
                />
                <SubmitButton type="submit" tw="mt-6">
                  {isLoading ? "Processing..." : "Create Inquiry"}
                </SubmitButton>
              </Form>
            </TextContent>
          </TextColumn>
        </TwoColumn>
        <ToastContainer
          toastClassName="bg-gray-700"
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Container>

      <section className="google-map-section">
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4388319826903!2d72.63657677607164!3d23.04436791551294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e870dc8a56111%3A0x6fcf1e5553e6d549!2sRK%20Events!5e0!3m2!1sen!2sin!4v1699354861933!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="rkevents-google-map"
          />
        </div>
      </section>
    </>
  );
};
