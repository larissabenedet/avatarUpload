import AvatarUpload from "./components/AvatarUpload";
import styled from "styled-components";
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <AvatarUpload />
      </Container>
    </>);
}

const Container = styled.section`
  max-width: 553px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0 10px;
`;

export default App;
