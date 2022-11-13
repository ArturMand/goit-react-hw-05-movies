import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const HeaderContent = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid grey;
`;
export const Nav = styled.nav`
  padding: 0 50px;
`;
export const Link = styled(NavLink)`
  &.active {
    color: pink;
    border-radius: 4px;
    padding: 3px;
    text-decoration: none;
  }
  font-family: system-ui;
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin-right: 20px;
  :last-child {
    margin-right: 0;
  }
`;
