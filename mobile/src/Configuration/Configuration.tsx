import styled from "styled-components/native";
import { Text } from "react-native";

const Configuration = () => {
  return (
    <Wrapper>
      <Text>
        Code goes here
      </Text>
    </Wrapper>
  );
};

export default Configuration;

const Wrapper = styled.View`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
`;