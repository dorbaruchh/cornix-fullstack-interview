import styled from "styled-components/native";
import Configuration from "./src/Configuration/Configuration";

export default function App() {
  return (
    <AppWrapper>
      <Header>
        <Title>Configuration</Title>
      </Header>
      <Configuration />
    </AppWrapper>
  );
}

const AppWrapper = styled.View`
`;
const Header = styled.View`
  width: 100%;
  border-bottom-color: rgba(137, 146, 163, 0.12);
  border-bottom-width: 1px;
  position: relative;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
