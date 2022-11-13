import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderContent, Nav, Link } from './Header.styled';

const Header = () => {
  return (
    <>
      <HeaderContent>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </HeaderContent>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Header;
