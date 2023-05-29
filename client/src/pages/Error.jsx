import not_found from '../assets/not-found.svg';

function Error() {
   return (
      <div className='error'>
         <h1>Sorry this page does not exist</h1>
         <div>
            <img src={not_found} />
         </div>
      </div>
   );
}

export default Error;
