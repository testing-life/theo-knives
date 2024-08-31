import React, { FC, useState } from 'react';
import { storyblokEditable } from '@storyblok/react';
import Link from 'components/atoms/link/link';
import { ReactComponent as Menu } from 'assets/icons/Menu.svg';
import { ReactComponent as Close } from 'assets/icons/X.svg';
import './MainNav.css';
import IconButton from 'components/atoms/iconButton/iconButton';
import useBreakpoints from 'hooks/useBreakpoints';

interface Props {
  blok: any;
}

const MainNav: FC<Props> = ({ blok }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [forTablet, forDesktop] = useBreakpoints();
  const ariaId = 'mainNav';
  return (
    <div className='theo-main-nav-wrapper'>
      {!forTablet && !forDesktop && (
        <IconButton
          needsAria
          ariaPopup={true}
          ariaExpanded={isOpen}
          clickHandler={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </IconButton>
      )}
      <picture className='theo-main-nav__picture'>
        <source srcSet={blok.logo.filename} media='(min-width: 758px)' />
        <img
          className='theo-main-nav__logo'
          src={blok.mobileLogo.filename}
          alt=''
        />
      </picture>

      <nav
        {...(!forTablet && { 'aria-hidden': !isOpen })}
        className={`pure-menu theo-main-nav  ${
          forTablet ? 'pure-menu-horizontal' : ''
        }
        ${!forTablet && !isOpen ? 'is-hidden' : ''}`}
        {...storyblokEditable(blok)}
      >
        {!forTablet && (
          <IconButton
            needsAria
            ariaControls={ariaId}
            ariaExpanded={isOpen}
            clickHandler={() => setIsOpen(!isOpen)}
          >
            <Close />
          </IconButton>
        )}
        <ul
          id={ariaId}
          {...(!forTablet && { role: 'menu' })}
          className='pure-menu-list'
        >
          {blok.links?.map((link: any) => (
            <li key={link._uid} className='pure-menu-item'>
              <Link blok={link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
