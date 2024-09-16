import tw, { styled } from "twin.macro";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as GoogleIcon } from "../../images/google-icon1.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg";
import { ReactComponent as WhatsAppIcon } from "../../images/whatsapp.svg";
import { ReactComponent as CallIcon } from "../../images/call.svg";
import { ReactComponent as Email } from "../../images/email.svg";

const HeaderContent = styled.div`
  ${tw`sm:flex py-1 w-full bg-black`}
`;

const SocialLinksContainer = tw.div`my-2 sm:my-1 mx-auto sm:mx-8 mr-4 sm:justify-end flex w-full`;
const ContactContainer = tw.div`hidden my-1 mt-1 ml-4 sm:flex items-center`;
const Details = tw.div`text-gray-400 hover:text-gray-100 transition cursor-pointer duration-300 mx-2`;
const SocialLinkContact = styled.a`
  ${tw`cursor-pointer flex items-center text-gray-400 hover:text-gray-100 transition duration-300 mx-4 font-mono sm:w-full`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const SocialLinkContactMobile = styled.a`
  ${tw`cursor-pointer inline-block sm:hidden hover:shadow-md hover:transform hover:transition duration-300 text-gray-400 hover:text-gray-100 transition duration-300 mx-auto sm:mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block hover:shadow-md hover:transform hover:transition duration-300 text-gray-400 hover:text-gray-100 transition duration-300 mx-auto sm:mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const SocialHeader = () => {
  return (
    <HeaderContent>
      <ContactContainer>
        <SocialLinkContact href="tel:+918488824036" target="_">
          <CallIcon />
          <Details>+918488824036</Details>
        </SocialLinkContact>
        <SocialLinkContact href="mailto:rkevents17@gmail.com" target="_">
          <Email />
          <Details>rkevents17@gmail.com</Details>
        </SocialLinkContact>
      </ContactContainer>
      <SocialLinksContainer>
        <SocialLinkContactMobile href="tel:+918488824036">
          <CallIcon />
        </SocialLinkContactMobile>
        <SocialLinkContactMobile href="mailto:rkevents17@gmail.com" target="_">
          <Email />
        </SocialLinkContactMobile>
        <SocialLink
          href="https://www.facebook.com/people/RK-Events/100063812500363/"
          target="_"
        >
          <FacebookIcon />
        </SocialLink>
        <SocialLink href="https://wa.me/+918488824036" target="_">
          <WhatsAppIcon />
        </SocialLink>
        <SocialLink href="https://g.page/r/CUnV5lNVHs9vEA0" target="_">
          <GoogleIcon />
        </SocialLink>
        <SocialLink href="https://youtube.com/@rk_events" target="_">
          <YoutubeIcon />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/r_k__events/" target="_">
          <InstagramIcon />
        </SocialLink>
      </SocialLinksContainer>
    </HeaderContent>
  );
};

export default SocialHeader;
