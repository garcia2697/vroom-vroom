import React from "react";
import "./nav.css";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GiCat } from "react-icons/gi";
import { FaDog } from "react-icons/fa";
import { useState } from "react";
const Nav = (props) => {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  // const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* <a href='#' onClick={()=> setActiveNav ('#')} className={activeNav === '#' ? 'active': ''}><SiHomeassistantcommunitystore/></a>
      <a href='#dogs'onClick={() => setActiveNav ('#dogs')} className={activeNav === '#dogs' ? 'active': ''}><FaDog/></a>
      <a href='#cats'onClick={() => setActiveNav ('#cats')} className={activeNav === '#cats' ? 'active': ''}><GiCat/></a> */}

      {pages.map((page) => (
        <li
          className={`mx-1 ${currentPage.name === page.name && "navActive"}`}
          key={page.name}
        >
          <span
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page.name}
          </span>
        </li>
      ))}
    </nav>
  );
};

export default Nav;
