import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styling/Navbar.module.css';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className={style.navbar}>
      <h1 className={style.navbar__title}>Math Magicians</h1>
      <ul className={style.navbar__list}>
        {links.map((link) => (
          <li key={link.id} className={style.navbar__listEl}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
