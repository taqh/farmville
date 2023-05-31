import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';

const InputGroup = ({ type, id, label, pass, onChange, value }) => {
   const [showPassword, setShowPassword] = useState(false);
   const [isValid, setIsValid] = useState(false);
   if (pass) {
      type = showPassword ? 'text' : 'password';
   }

   return (
      <div className={`input ${!isValid && 'input--error'}`}>
         <input
            id={id}
            type={type}
            className='input__field'
            name={id}
            autoComplete='off'
            value={value}
            placeholder={label}
            onChange={onChange}
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
   );
};

export default InputGroup;
