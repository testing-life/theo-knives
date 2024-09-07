import './loaderLayout.css';
import Loader from 'components/atoms/loader/loader';

const LoaderLayout = () => {
  return (
    <div className='theo-loader-layout'>
      <p className='theo-loader-layout__paragraph'>Loading</p>
      <p className='theo-loader-layout__paragraph'>Wird geladet</p>
      <Loader />
    </div>
  );
};

export default LoaderLayout;
