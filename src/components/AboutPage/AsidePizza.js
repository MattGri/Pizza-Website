import styled from 'styled-components';

const DivContainer = styled.div`
  background-image: url('./images/multiplePizzas.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 500px;
`;

const AsidePizza = () => {
  return <DivContainer />;
};

export default AsidePizza;
