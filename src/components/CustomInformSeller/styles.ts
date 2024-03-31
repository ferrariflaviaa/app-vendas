import { transparentize } from "polished";
import styled, { css } from "styled-components/native";
import { APP_FONT_REGULAR, returnAdjustedFont } from "../../config";

interface IContainerProps {
  isPrimary: boolean;
}

export const Container = styled.View`
  height: 140px;
  padding: 0px 10px;
  background-color: ${({ theme }) => transparentize(0.9, theme.COLORS.PRIMARY)};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${APP_FONT_REGULAR};
  font-weight: 800;
  font-size: 16px;
  margin: 6px 0px;
`;


export const CustomItemTitle = styled.Text<IContainerProps>`
  margin-right: 4px;
  ${({ isPrimary }) =>
    isPrimary === true
      ? css`
          color: ${({ theme }) => theme.COLORS.PRIMARY};
          font-family: ${APP_FONT_REGULAR};
          font-size: ${returnAdjustedFont(16)};
        `
      : css`
          color: ${({ theme }) => theme.COLORS.GREY};
          font-family: ${APP_FONT_REGULAR};
          font-size: ${returnAdjustedFont(14)};
        `}
`;
