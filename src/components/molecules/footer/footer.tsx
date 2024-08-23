import React from 'react';
import IconButton from 'components/atoms/iconButton/iconButton';
import Obfuscate from 'react-obfuscate';
import { ReactComponent as Fb } from 'assets/icons/Facebook.svg';
import { ReactComponent as In } from 'assets/icons/Instagram.svg';
import './footer.css';
import Mascot from 'assets/mascot.png';

const Footer = () => {
  return (
    <footer className='theo-footer'>
      <div className='theo-footer__address'>
        <figure className='theo-footer__mascot'>
          <img className='pure-img' src={Mascot} alt='' />
        </figure>
        <div className=''>
          <span className='-pb-05rem'>John Doe - Custom Knife Maker</span>
          <span className='-pb-05rem'>
            123 Blade Street, 10115 Berlin, Germany
          </span>
          <span className='-pb-05rem'>
            <Obfuscate tel='+49 30 1234567' />
          </span>
          <span className='-pb-05rem'>
            <Obfuscate
              email='john.doe@knifemaker.com'
              headers={{
                subject: 'General Contact',
                body: 'Down with the machines!',
              }}
            />
          </span>
          <span className='-pb-05rem'>
            &copy; Custom Knife Maker {new Date().getFullYear()}
          </span>
          <div className='theo-footer__social'>
            <IconButton asLink whereTo=''>
              <Fb />
            </IconButton>
            <IconButton asLink whereTo=''>
              <In />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
