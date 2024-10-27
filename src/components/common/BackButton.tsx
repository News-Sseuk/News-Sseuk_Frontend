import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const nav = useNavigate();

  return <Button onClick={() => nav(-1)} />;
};

export default BackButton;

const Button = styled.button``;
