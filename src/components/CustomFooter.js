import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

function CustomFooter() {
  return (
    <div className='h-[10%] w-full mt-6'>
        <div className='h-full max-w-[1100px] mx-auto px-4 flex flex-col justify-between font-poppins-regular text-[12px] sm:flex-row '>
            <div className='flex w-[70%] items-center text-gray-500 gap-2'>
                <ul className='flex flex-wrap gap-2 sm:gap-3 items-center custom-footer-pointer-list '>
                    <span>@2024 Aora Inc.</span>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>What is Aora?</li>
                    <li>Manage my cookies</li>
                    <li>Do not share my personal information</li>
                </ul>
            </div>
            <div className='flex w-[30%] text-gray-500 justify-start sm:justify-end'>
                <ul className='flex flex-wrap gap-4 items-center custom-footer-pointer-icon'>
                    <li>
                        <Icon icon={'streamline:facebook-1-solid'} className='h-5 w-auto'></Icon>
                    </li>
                    <li>
                        <Icon icon={'ri:linkedin-fill'} className='h-5 w-auto'></Icon>
                    </li>
                    <li>
                        <Icon icon={'mdi:github'} className='h-5 w-auto'></Icon>
                    </li>
                    <li>
                        <Icon icon={'ic:baseline-tiktok'} className='h-5 w-auto'></Icon>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CustomFooter
