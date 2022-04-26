import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ErrorStatus = styled.p`
  text-align: center;
  margin: 80px 0px 20px 0px;
  font-size: 60px;
`;

const HomeButton = styled.button`
  display: block;
  margin: 10px auto 0px auto;
  cursor: pointer;
  color: #fff;
  background-color: blue;
  border: none;
  text-transform: uppercase;
  padding: 15px 25px;
  border-radius: 15px;
  transition: 0.5s;

  &:hover {
    background-color: #fff;
    color: blue;
    transition: 0.5s;
    border: 1px solid blue;
  }
`;

const Text = styled.p`
  text-transform: uppercase;
  color: #7a7e81;
  text-align: center;
`;

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <ErrorStatus>404</ErrorStatus>
      <Text>The selected page does not exist :(</Text>
      <HomeButton onClick={() => navigate('/')}>Home Page</HomeButton>
    </>
  );
};

export default ErrorPage;
