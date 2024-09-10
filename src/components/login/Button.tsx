import styled from "styled-components";

interface ButtonProps {
  title: string;
  color?: string;
  handleClick: () => void;
}

const Button = ({ title, color, handleClick }: ButtonProps) => {
  return (
    <DButton onClick={() => handleClick()} color={color}>
      {title}
    </DButton>
  );
};

export default Button;

interface DButtonProps {
  color?: string;
}

const DButton = styled.button<DButtonProps>`
  border: none;
  padding: 10px 25px;
  border-radius: 10px;
  margin: 10px;
  font-size: 13px;
  background-color: ${(props) =>
    props.color !== undefined ? props.color : props.theme.colors.point1};
  color: ${(props) => (props.color !== undefined ? "white" : "black")};
`;
