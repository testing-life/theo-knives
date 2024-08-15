import React, { FC, useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import Link from "components/atoms/link/link";
import { forDesktop, forTablet } from "utils/breakpoints";
import { ReactComponent as Menu } from "assets/icons/Menu.svg";
import { ReactComponent as Close } from "assets/icons/X.svg";
import "./MainNav.css";
import IconButton from "components/atoms/iconButton/iconButton";

interface Props {
  blok: any;
}

const MainNav: FC<Props> = ({ blok }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ariaId = "mainNav";
  return (
    <div>
      {!forTablet && (
        <IconButton
          needsAria
          ariaPopup={true}
          ariaExpanded={isOpen}
          clickHandler={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </IconButton>
      )}
      <nav
        {...(!forTablet && { "aria-hidden": !isOpen })}
        className={`pure-menu theo-main-nav  ${
          forTablet ? "pure-menu-horizontal" : ""
        }
        ${!forTablet && !isOpen ? "is-hidden" : ""}`}
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
          {...(!forTablet && { role: "menu" })}
          className="pure-menu-list"
        >
          {blok.links?.map((link: any) => (
            <li key={link._uid} className="pure-menu-item">
              <Link blok={link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;