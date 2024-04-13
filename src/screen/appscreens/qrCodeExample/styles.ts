import styled from "styled-components/native";
import { Camera  } from 'react-native-vision-camera';

export const CameraContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledCamera = styled(Camera )`
  width: 100%;
  height: 100%;
`;