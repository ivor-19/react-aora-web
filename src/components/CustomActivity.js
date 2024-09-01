import React from 'react'

function CustomButton({ customPressed, customStyle, handleClick, customImage }) {
  return (
    <button
        className={`box-border bg-white h-40 w-40 hover:opacity-80 rounded-xl flex items-center justify-center ${customStyle} ${customPressed}`}
        onClick={handleClick}
    >
      <img src={customImage} className='h-[60%] w-[60%]'></img>
    </button>
  )
}

export default CustomButton
