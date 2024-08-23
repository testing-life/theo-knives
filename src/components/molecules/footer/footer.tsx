import React from 'react';
import IconButton from 'components/atoms/iconButton/iconButton';
import Obfuscate from 'react-obfuscate';
import { ReactComponent as Fb } from 'assets/icons/Facebook.svg';
import { ReactComponent as In } from 'assets/icons/Instagram.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer className='theo-footer pure-g'>
      <div className='pure-u-1-2'>col 1</div>
      <div className='pure-u-1-2'>
        <div className='pure-g'>
          <div className='pure-u-1 pure-u-md-1-2'>
            <span>John Doe - Custom Knife Maker</span>
            <span>123 Blade Street, 10115 Berlin, Germany</span>
            <span>
              <Obfuscate tel='+49 30 1234567' />
            </span>
            <span>
              <Obfuscate
                email='john.doe@knifemaker.com'
                headers={{
                  subject: 'General Contact',
                  body: 'Down with the machines!',
                }}
              />
            </span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <div className='pure-u-1 pure-u-md-1-2'>
            <ul className='pure-g'>
              <li className='pure-u-sm-1-2 pure-md-1'>
                <a href='' rel='noopener noreferer'>
                  <IconButton>
                    <Fb />
                  </IconButton>
                </a>
              </li>
              <li className='pure-u-sm-1-2 pure-md-1'>
                <a href='' rel='noopener noreferer'>
                  <IconButton>
                    <In />
                  </IconButton>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
