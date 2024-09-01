import React from 'react'
import CustomNavBar from '../../components/CustomNavBar'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';
import CustomFooter from '../../components/CustomFooter';

function Signup() {
    const navigate = useNavigate();

    return (
        <div className='bg-primary h-screen custom-scrollbar'>
            <div className='min-h-[12%]'></div>

            <header className='bg-primary min-h-[10%] flex items-center fixed top-0 left-0 w-full z-10'>
                <div className='max-w-[1000px] w-full mx-auto flex justify-between'>
                    <div onClick={() => navigate('/')} className='cursor-pointer'>
                        <img src={require('../../assets/images/logo.png')} className='h-6 w-auto'></img>
                    </div> 
                    <div className='flex gap-12 items-center'>
                        <span className='font-poppins-regular text-sm text-gray-500'>Already have an account? </span>
                        <button onClick={() => navigate('/login')} className={`h-6 px-4 opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-white flex items-center gap-2`}>
                            <span className={`font-poppins-semibold text-sm text-white`}>Sign In</span>
                            <Icon icon={'mingcute:arrow-right-fill'} className='h-4 w-auto' color='white'></Icon>
                        </button>
                    </div>
                </div>
            </header>


            {/* Sign up form */}
            <div className='h-screen-[90%] flex items-center justify-center'>
                <div className='w-[450px] bg-black-first rounded-[30px] p-8 flex flex-col items-center gap-8'>
                    <div className=''>
                        <img src={require('../../assets/images/logo.png')} color='white' className='h-8 w-auto'></img>
                    </div>
                    <div className='w-full flex flex-col gap-6'>
                        <FormField 
                            title={'Username'}
                            customInputStyle={'text-start text-[14px]  px-4'}
                            customStyle={'h-16'}
                            customPlaceHolder={'Username'}
                
                        />
                        <FormField 
                            title={'Email'}
                            customInputStyle={'text-start text-[14px]  px-4'}
                            customStyle={'h-16'}
                            customPlaceHolder={'Email'}
                            type={'email'}
                
                        />
                        <FormField 
                            title={'Password'}
                            customInputStyle={'text-start text-[14px] px-4'}
                            customStyle={'h-16'}
                            customPlaceHolder={'Password'}
                        />
                        <FormField 
                            title={'Confirm Password'}
                            customInputStyle={'text-start text-[14px] px-4'}
                            customStyle={'h-16'}
                            customPlaceHolder={'Confirm Password'}
                        />
                    </div>
                    <div className='w-full'>
                        <CustomButton
                            title={'Sign In'}
                            customTitleStyle={'text-[12px]'}
                            customStyle={'w-full'}
                        />
                    </div>
                </div>
            </div>
            <div className='absolute top-50 left-0 right-0'>
                <CustomFooter/>
            </div>
           
        </div>
    )
}

export default Signup
