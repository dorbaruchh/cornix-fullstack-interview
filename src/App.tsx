import React from "react";
import Configuration from "./Configuration/Configuration";
import styled from "styled-components";

function App() {
  return (
    <AppWrapper>
      <Header>Configurationn</Header>
      <Configuration />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;
const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(137, 146, 163, 0.12);
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
`;
