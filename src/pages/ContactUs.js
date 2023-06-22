import React, { useRef, useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import EmailIllustrationSrc from "images/emailIllustration.svg";
// import Loader from "images/emailIllustration.svg";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-primary-500`
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`


const SubmitButton = styled.button`
${tw`text-white py-2 px-2 mt-6`}
  transition: opacity 0.4s, background-color 0.4s, border 0.4s;
  font-weight: 600;
  background: #460fb3 !important;
  border: 3px solid #460fb3;
  border-radius: 10px;

  &:hover {
    background: transparent !important;
    color: #460fb3 !important;
  }
`;

export default ({
  heading = <>Feel free to <span tw="text-primary-800">get in touch</span><wbr /> with us.</>,
  description = "Please Provide all details which mentioned in form, so we can provide our best services to you",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  
  const form = useRef();

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 2);
    document.getElementById("event_date").min = currentDate.toISOString().split("T")[0];
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    setIsLoading(true);
    e.preventDefault();
    emailjs.sendForm('service_o72ffxs', 'template_dde44iz', form.current, 'bKkL5Ani3e2QNWqfd')
    .then((result) => {
        if (result) {
          setIsLoading(false);
          toast.success("Your details are submited Successfully",{
            style: {
              backgroundColor: '#5011CC',
              width: '350px'
            },
          });
        } else {
          toast.error("Something went wrong !");
        }
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
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
              <Input type="text" name="from_name" placeholder="Full Name" required />
              {/* <Input type="number" name="contact" placeholder="Contact Number" value={contactNumber} required  /> */}
              <Input type="text" name="contact" placeholder="Contact Number" title="Ex:- 1234567890" pattern="[1-9]{1}[0-9]{9}" required maxlength="10" minLength="10" />
              <Input type="email" name="reply_to" placeholder="Your Email Address" required />
              <Input type="text" name="occasion" placeholder="Ocassion" required />
              <Input type="date" name="event_date" id="event_date" placeholder="Date" required />
              <Textarea name="requirenment" placeholder="requirements, venue and Etc." required />
              <SubmitButton type="submit" tw="mt-6">{isLoading ? 'Processing...' : 'Create Inquiry'}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <ToastContainer
        toastClassName="bg-primary-800"
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
  );
};
