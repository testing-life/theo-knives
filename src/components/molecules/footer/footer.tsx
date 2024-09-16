import React from 'react';
import IconButton from 'components/atoms/iconButton/iconButton';
import Obfuscate from 'react-obfuscate';
import { ReactComponent as Fb } from 'assets/icons/Facebook.svg';
import { ReactComponent as In } from 'assets/icons/Instagram.svg';
import './footer.css';
import Mascot from 'assets/mascot.png';
import LanguageSwitcher from 'components/molecules/languageSwitcher/languageSwitcher';

const Footer = () => {
  return (
    <footer className='theo-footer'>
      <div className='theo-footer__address'>
        <figure className='theo-footer__mascot'>
          <img className='pure-img theo-footer__img' src={Mascot} alt='' />
        </figure>
        <div className=''>
          <span className='-pb-05rem'>Dr. Theo Wernicke</span>
          <span className='-pb-05rem'>Könneritzstr. 16</span>
          <span className='-pb-05rem'>04229 Leipzig</span>
          <span className='-pb-05rem'>
            <Obfuscate
              email='messerschmiede-wernicke@posteo.com'
              headers={{
                subject: 'Allgemeine Anfrage / General Contact',
              }}
            />
          </span>

          <span className='-pb-05rem'>
            &copy; Messerschmiede Wernicke {new Date().getFullYear()}
          </span>
          <span className='-pb-05rem'>
            <LanguageSwitcher />
          </span>
          <div className='theo-footer__social'>
            <IconButton asLink whereTo='https://instagram.com/thwer.knives'>
              <In />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
