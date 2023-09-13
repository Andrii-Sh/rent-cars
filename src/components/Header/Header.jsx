// import { Link } from 'react-router-dom';
// import { NavigationLink, NavList, PageHeader, PageLogo } from './Header.styled';
// import pageLogoPath from 'images/page-logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    //   <div>Header</div>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
