import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Title = styled.h2`
  margin-top: 0;
  font-family: emoji;
  font-size: 28px;
  font-weight: 700;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
`;
export const Item = styled.li`
  margin-bottom: 5px;
  :last-child {
    margin-right: 0;
  }
`;
export const Link = styled(NavLink)`
  color: black;
  font-family: inherit;
  font-size: 18px;
  :hover {
    color: blue;
  }
`;
export const Container = styled.div`
  padding: 20px;
`;
