
import React, { useState } from 'react';
import { GiHadesSymbol } from "react-icons/gi";
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-scroll';
import '@fontsource/fascinate-inline'; // Defaults to weight 400
import '@fontsource/caveat'; // Defaults to weight 400


const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className='flex items-center justify-between p-6 lg:flex-row '>
        <div>
        <a href="#" className='text-white font-Fascinate-Inline text-2xl tracking-wider flex items-center'>
  <GiHadesSymbol className="mr-2"/> SHIVI BHADAURIA
</a>

        </div>
        <div className='space-x-2'>
          <div className='ssm:hidden lg:block space-x-2'>
            <Link to="hero" smooth={true} duration={600}  className='text-white font-Caveat hover:bg-gray-500 rounded-full px-2 py-2 text-xl cursor-pointer'>
              About
            </Link>
            <Link to="skills" smooth={true} duration={600} offset={-50} className='text-white font-Caveat hover:bg-gray-500 rounded-full px-2 py-2 text-xl cursor-pointer'>
              Skills
            </Link>
            <Link to="projects" smooth={true} duration={600} offset={-50} className='text-white font-Caveat hover:bg-gray-500 rounded-full px-2 py-2 text-xl cursor-pointer'>
              Projects
            </Link>
            <Link to="gallery" smooth={true} duration={600} offset={-50} className='text-white font-Caveat hover:bg-gray-500 rounded-full px-2 py-2 text-xl cursor-pointer'>
              Collection
            </Link>
            <Link to="contact" smooth={true} duration={600} offset={-50} className='text-white font-Caveat hover:bg-gray-500 rounded-full px-2 py-2 text-xl cursor-pointer'>
              Contact
            </Link>
          </div>
          <div className='ssm:block lg:hidden'>
            {toggle ? (
              <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer' />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} className='text-white' />
            )}
          </div>
        </div>
      </div>

      <div className='ssm:block lg:hidden'>
        {toggle && (
          <div className='flex justify-center ml-10'>
            <ul>
              <li className='text-white  font-Caveat  text-xl mb-2 cursor-pointer'>
                <Link to="hero" smooth={true} duration={500} onClick={closeMenu}>About</Link>
              </li>
              <hr/>
              <li className='text-white font-Caveat  text-xl mb-2 cursor-pointer'>
                <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link>
              </li>
              <hr/>
              <li className='text-white font-Caveat  text-xl mb-2 cursor-pointer'>
                <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
              </li>
              <hr/>
              <li className='text-white font-Caveat  text-xl mb-2 cursor-pointer'>
                <Link to="gallery" smooth={true} duration={500} onClick={closeMenu}>Collection</Link>
              </li>
              <hr/>
              <li className='text-white font-Caveat  text-xl mb-2 cursor-pointer'>
                <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </div>
          

        )}
      </div>
    </>
  );
};

export default Nav;
