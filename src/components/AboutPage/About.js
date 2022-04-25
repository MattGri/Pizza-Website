import styled from 'styled-components';

const DivContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const DivWrapper = styled.div`
  margin-left: 150px;

  @media (max-width: 900px) {
    width: 100%;
    margin: 50px auto 0 auto;
  }
`;

const MakingPizza = styled.img`
  height: 550px;
  width: 350px;

  @media (max-width: 900px) {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin-bottom: 30px;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const Text = styled.p`
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const About = () => {
  return (
    <DivContainer>
      <DivWrapper>
        <MakingPizza src="./images/makingpizza.jpeg" />
      </DivWrapper>
      <DivWrapper>
        <Title>About Us</Title>
        <Text>Mateusz Grzybowski</Text>
        <Text></Text>
      </DivWrapper>
    </DivContainer>
  );
};

export default About;
