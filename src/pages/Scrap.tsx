import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
const Scrap = () => {
  return (
    <>
      <Div>
        <h1>Scrap</h1>
        <NavigationBar />
      </Div>
    </>
  );
};

export default Scrap;

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1rem;
`;
