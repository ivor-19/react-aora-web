import React from 'react'
import { Icon } from '@iconify/react'

function CustomButton({ title, customStyle, customIcon, showIcon, customTitleStyle, customIconColor, customIconStyle, onClick}) {
  return (
    <button 
      onClick={onClick} 
      className={`py-6 flex items-center justify-center gap-2 bg-secondary rounded-2xl hover:opacity-80 active:opacity-70 ${customStyle}`}
      style={{ boxShadow: "0px 12px 6px rgba(0, 0, 0, 0.25)" }}
    >
        {showIcon &&
            <Icon icon={customIcon} color={customIconColor} className={`${customIconStyle}`}></Icon>
        }
        <span className={`font-poppins-semibold ${customTitleStyle}`}>{title}</span>
    </button>
  )
}

export default CustomButton
