import cn from 'classnames';
import Button from '@/components/core/Button';
import Container from '@/components/core/Container';
import Icon from '@/components//core/Icon';
import Link from '@/components/core/Link';

import '@/assets/sass/components/main/header.scss';
import { useState } from 'react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(true);

  return (
    <header className="main-header">
      <Container className="main-header__container">
        <div className="main-header__logo">
          <Link>
            <Icon name="logo" size="large" className="main-header__icon" />
          </Link>
          <Link
            className={cn([
              'close-icon',
              { 'close-icon--show': openMenu },
              { 'close-icon--hide': !openMenu },
            ])}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <Icon name="menu" size="medium" />
          </Link>
          <Link
            className={cn([
              'close-icon',
              { 'close-icon--show': !openMenu },
              { 'close-icon--hide': openMenu },
            ])}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <Icon name="close" size="medium" />
          </Link>
        </div>

        <nav className={cn(['main-header__navbar', { 'main-header__navbar--mobile': !openMenu }])}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#section-intro">About</a>
            </li>
            <li className="navbar__item">
              <a href="#experience-section">Works</a>
            </li>
            <li className="navbar__item">
              <a href="#section-services">Services</a>
            </li>
            <li className="navbar__item">
              <a href="#main-footer">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          className={cn([
            'main-header__button',
            { 'main-header__button--show': !openMenu },
            {
              'main-header__button--hide': openMenu,
            },
          ])}
        >
          <Button>Contact</Button>
        </div>
      </Container>
    </header>
  );
}
