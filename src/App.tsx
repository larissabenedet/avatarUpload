import AvatarUpload from "./components/AvatarUpload";
import styled from "styled-components";
import GlobalStyle from './styles/global'
import { AvatarContextProvider } from "./contexts/AvatarContext";

function App() {
  return (
    <AvatarContextProvider>
      <GlobalStyle />
      <Container>
        <AvatarUpload />
      </Container>
    </AvatarContextProvider>);
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
