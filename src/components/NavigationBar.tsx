import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const nav = useNavigate();

  return <div onClick={() => nav("/")}>nav</div>;
};

export default NavigationBar;
