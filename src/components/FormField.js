import { Icon } from '@iconify/react';
import React, { useState } from 'react'

function FormField({ customStyle, customInputStyle, customPlaceHolder, handleChangeText, value, title, customTitleStyle}) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  // const [formPressed, setFormPressed] = useState(!false);
  // const toggleFormPressed = () => setFormPressed(!formPressed);

  let inputType;

  if(title === 'Password' || title === 'Confirm Password'){
    inputType = !showPassword ? 'password' : 'text'
  }
  else if(title === 'Email'){
    inputType = 'email';
  }
  else{
    inputType = 'text';
  }

  return (
    <div className='flex flex-col gap-2'>
      <span className={`font-poppins-regular text-gray-500 text-md ${customTitleStyle}`}>{title}</span>
      <div className={`flex justify-between items-center bg-primary h-14 rounded-xl border-2 border-transparent focus-within:border-secondary ${customStyle}`}>
        <input 
          className={`bg-transparent flex items-center px-4 font-poppins-regular h-full w-full text-white text-center outline-none ${customInputStyle}`} 
          placeholder={customPlaceHolder}
          onChange={handleChangeText}
          value={value}
          type={inputType}
          // type={((title === 'Password' || title === 'Confirm Password') && !showPassword ? 'password' : 'text')}
          
        
        >

        </input>
        {(title === 'Password' || title === 'Confirm Password') && 
          <button onClick={toggleShowPassword} className='w-[10%] h-full flex items-center justify-center'>
            <Icon icon={showPassword ?  'ion:eye-sharp' : 'ion:eye-off'} color='gray' className='h-5 w-5'/>
          </button>
        }
      </div> 
    </div>
  )
}

export default FormField
