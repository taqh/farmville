import './bars.css';
import './spinner.css';

export const Bars = () => {
   return (
      <div className='loader'>
         <div className='justify-content-center jimu-primary-loading'></div>
      </div>
   );
};

export const Spinner = () => {
   return (
      <svg className='spinner' viewBox='25 25 50 50'>
         <circle r='20' cy='50' cx='50'></circle>
      </svg>
   );
};
