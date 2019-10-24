import styled from 'styled-components';
import { fontSize, getSpacing, colorUsage } from 'stylesheet';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${getSpacing(16)};
  padding: 0 ${getSpacing(4)};
  font-size: ${fontSize.large};
  background-color: ${colorUsage.headerBackground};
  color: ${colorUsage.headerTextColor};
`;

HeaderContainer.displayName = 'HeaderContainer';

export const Logo = styled.img`
  height: ${getSpacing(9)};
`;

Logo.displayName = 'Logo';
