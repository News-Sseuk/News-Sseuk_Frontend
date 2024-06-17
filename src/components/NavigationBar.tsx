import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import home from "../assets/home.png";
import search from "../assets/search.png";
import scrap from "../assets/scrap.png";
import mypage from "../assets/mypage.png";

const NavigationBar = () => {
  const nav = useNavigate();

  return (
    <Container>
      <Button
        imgsrc={home}
        onClick={() => {
          nav("/");
        }}
      />
      <Button
        imgsrc={search}
        onClick={() => {
          nav("/search");
        }}
      />
      <Button
        imgsrc={scrap}
        onClick={() => {
          nav("/scrap");
        }}
      />
      <Button
        imgsrc={mypage}
        onClick={() => {
          nav("/mypage");
        }}
      />
    </Container>
  );
};

export default NavigationBar;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-between;
`;

interface ButtonProps {
  imgsrc: string;
}

const Button = styled.div<ButtonProps>`
  background-image: url(${(props) => props.imgsrc});
  background-size: contain;
  background-repeat: no-repeat;
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`;
