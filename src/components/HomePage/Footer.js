import styled from 'styled-components';
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from 'react-icons/fa';

const DivContainer = styled.div`
  background-color: #000;
  padding: 20px 0px;
`;

const DivParent = styled.div``;

const UlItems = styled.ul`
  display: flex;
  justify-content: center;
`;

const InstagramItem = styled(FaInstagram)`
  color: white;
  width: 50px;
  height: 50px;
  margin: 20px;
`;

const TwitterItem = styled(FaTwitter)`
  color: white;
  width: 50px;
  height: 50px;
  margin: 20px;
`;

const FacebookItem = styled(FaFacebookSquare)`
  color: white;
  width: 50px;
  height: 50px;
  margin: 20px;
`;

const LinkedinItem = styled(FaLinkedin)`
  color: white;
  width: 50px;
  height: 50px;
  margin: 20px;
`;

const Text = styled.p`
  color: #fff;
  text-align: center;
`;

const Footer = () => {
  return (
    <DivContainer>
      <DivParent>
        <UlItems>
          <InstagramItem />
          <TwitterItem />
          <FacebookItem />
          <LinkedinItem />
        </UlItems>
        <Text>2021 pizza.com</Text>
      </DivParent>
    </DivContainer>
  );
};

export default Footer;
