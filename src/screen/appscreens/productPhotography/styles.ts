import styled from "styled-components/native";
import { APP_FONT_SEMI_BOLD, returnAdjustedFont } from "../../../config";

export const CustomListOptions = styled.View`
    margin-top: 16px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const ContainerView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const ContainerButton = styled.TouchableOpacity`
  margin-top: 20px;
  height: 60px;
  width: 48%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding-left: 2px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const TextButton = styled.Text`
  font-size: ${returnAdjustedFont(16)};
  font-family: ${APP_FONT_SEMI_BOLD};
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
