import React, { FC } from "react";
import { storyblokEditable } from "@storyblok/react";
import Link from "components/atoms/link/link";

interface Props {
  blok: any;
}

const MainNav: FC<Props> = ({ blok }) => {
  console.log("block", blok);
  return (
    <nav {...storyblokEditable(blok)}>
      <ul>
        {blok.links?.map((link: any) => (
          <li key={link._uid}>
            <Link blok={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
