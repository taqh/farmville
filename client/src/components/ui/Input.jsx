import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';

const InputGroup = (props) => {
   const [showPassword, setShowPassword] = useState(false);
   const [isValid, setIsValid] = useState(false);

   return (
      <div className={`input ${!isValid && 'input--error'}`}>
         <input
            type={props.type}
            id={props.id}
            className={`input__field`}
            name='password'
            placeholder={props.label}
            autoComplete='off'
         />
         <label htmlFor={props.id} className='input__label'>
            {props.label}
         </label>
         {props.type === 'password' && (
            <button
               onClick={() => setShowPassword(!showPassword)}
               type='button'
               className='pass-btn'
            >
               <span className='sr-only'>make password visibile</span>
               {showPassword ? (
                  <FaEye className='eye' />
               ) : (
                  <FaEyeSlash className='eye' />
               )}
            </button>
         )}
      </div>
   );
};

export default InputGroup;
