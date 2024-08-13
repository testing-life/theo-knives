import React, { FC } from "react";
import { storyblokEditable } from "@storyblok/react";
import Link from "components/atoms/link/link";
import { forDesktop, forTablet } from "utils/breakpoints";
import "./MainNav.css";

interface Props {
  blok: any;
}

const MainNav: FC<Props> = ({ blok }) => {
  return (
    <nav
      className={`pure-menu theo-main-nav  ${
        forTablet ? "pure-menu-horizontal" : ""
      }`}
      {...storyblokEditable(blok)}
    >
      <ul className="pure-menu-list">
        {blok.links?.map((link: any) => (
          <li key={link._uid} className="pure-menu-item">
            <Link blok={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
