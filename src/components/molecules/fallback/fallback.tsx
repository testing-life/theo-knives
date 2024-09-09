import { Link } from 'react-router-dom';
import BrokenKnife from 'assets/brokenknife.svg';
import './fallback.css';

const Fallback = () => {
  return (
    <section className='theo-page theo-fallback'>
      <img src={BrokenKnife} className='pure-img' alt='' />
      <strong>Something went wrong, please reload the page.</strong>
      <strong>
        Es ist ein Fehler aufgetreten, bitte laden Sie die Seite neu.
      </strong>
    </section>
  );
};

export default Fallback;
