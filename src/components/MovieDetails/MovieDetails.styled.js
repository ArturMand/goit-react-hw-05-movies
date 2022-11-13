import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  padding: 30px;
  display: flex;
  box-shadow: 3px 2px 2px 3px #e9e3e3;
  margin-top: 10px;
`;
export const BackLink = styled(NavLink)`
  font-size: 24px;
  color: black;
  font-weight: bolder;
  :hover {
    color: pink;
  }
`;
export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;
export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  margin: 0;
`;
export const SecondTitle = styled.h3`
  margin: 10px 0;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const Items = styled.li`
  margin-bottom: 5px;
  :last-child {
    margin-right: 0;
  }
`;
export const AdditionalContent = styled.div`
  margin: 0;
  box-shadow: 3px 2px 2px 3px #e9e3e3;
  padding: 0 30px;
`;
export const AdditionalItem = styled.li`
  margin-bottom: 5px;
  :last-child {
    margin-right: 0;
  }
`;
export const AdditionalList = styled.ul`
  margin: 0;
`;
export const Content = styled.div``;
export const Link = styled(NavLink)`
  color: blue;
  font-family: inherit;
  font-size: 18px;
  &.active {
    background-color: pink;
    color: white;
    border-radius: 4px;
    padding: 3px;
    text-decoration: none;
  }
`;
export const Img = styled.img`
  min-width: 320px;
  max-height: 360px;
`;
