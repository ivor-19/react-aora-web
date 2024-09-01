import React from 'react'
import CustomNavBar from '../components/CustomNavBar'
import CustomFooter from '../components/CustomFooter'

function About() {
  return (
    <div className='h-screen bg-primary custom-scrollbar'>
        <CustomNavBar

        />
        <div className='min-h-screen bg-primary flex items-center justify-center'>
            <span>ABOUT</span>
            
        </div>
        <CustomFooter

        />
    
      
    </div>
  )
}

export default About
