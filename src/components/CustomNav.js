import React from 'react'

function CustomNav({ onClick, title, customStyle, customTitleStyle}) {
  return (
    <button 
        className={`h-10 px-10 hover:opacity-65 ${customStyle}`}
        onClick={onClick}
    >
    <span className={`font-poppins-semibold ${customTitleStyle}`}>{title}</span>
    </button>
  )
}

export default CustomNav
