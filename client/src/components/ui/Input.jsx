import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';

const InputGroup = ({
   type,
   id,
   label,
   pass,
   onChange,
   value,
   onBlur,
   isValid,
   errorMessage,
}) => {
   const [showPassword, setShowPassword] = useState(false);
   if (pass) {
      type = showPassword ? 'text' : 'password';
   }

   return (
      <>
         {!isValid && <p className='input__text'>{errorMessage}</p>}
         <div className={`input ${!isValid ? 'input--invalid' : ''}`}>
            <input
               id={id}
               name={id}
               type={type}
               value={value}
               onBlur={onBlur}
               placeholder={label}
               onChange={onChange}
               autoComplete='off'
               className='input__field'
            />
            <label htmlFor={id} className='input__label'>
               {label}
            </label>
            {pass && (
               <button
                  onClick={() => setShowPassword(!showPassword)}
                  type='button'
                  className='pass-btn'
               >
                  <span className='sr-only'>make password visibile</span>
                  {showPassword ? (
                     <FaEyeSlash className='eye' />
                  ) : (
                     <FaEye className='eye' />
                  )}
               </button>
            )}
         </div>
      </>
   );
};

export default InputGroup;
