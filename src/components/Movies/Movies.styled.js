import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px 40px;
`;

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  width: 200px;
  height: 25px;
  padding: 3px 10px;
  outline: none;
  border: 2px solid pink;
  border-radius: 5px;
`;

export const Button = styled.button`
  border: 2px solid pink;
  padding: 7px;
  border-radius: 5px;
  background-color: white;
  margin-left: 2px;
  :hover {
    background-color: pink;
    color: white;
  }
  :active {
    background-color: pink;
    color: white;
  }
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
