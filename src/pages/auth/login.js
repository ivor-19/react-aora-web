import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import CustomFooter from '../../components/CustomFooter';

function Login() {
    const navigate = useNavigate();

    const [checked, setChecked] = useState(false);
    const toggleChecked = () => setChecked(!checked);

    return (
        <div className='bg-primary h-screen custom-scrollbar'>
            <div className='min-h-[12%]'></div>
            <header className='bg-primary min-h-[10%] flex items-center fixed top-0 left-0 w-full z-10'>
                <div className='max-w-[1000px] w-full mx-auto flex justify-between'>
                    <div onClick={() => navigate('/')} className='cursor-pointer'>
                        <img src={require('../../assets/images/logo.png')} alt="icon" className='h-6 w-auto'></img>
                    </div> 
                    <div className='flex gap-12 items-center'>
                        <span className='font-poppins-regular text-sm text-gray-500'>Don't have an account? </span>
                        <button onClick={() => navigate('/signup')} className={`h-6 px-4 opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-white flex items-center gap-2`}>
                            <span className={`font-poppins-semibold text-sm text-white`}>Sign Up</span>
                            <Icon icon={'mingcute:arrow-right-fill'} className='h-4 w-auto' color='white'></Icon>
                        </button>
                    </div>
                </div>
            </header>

            {/* Sign in form */}
            <div className='min-h-[80%] flex items-center justify-center'>
                <div className='w-[450px] bg-black-first rounded-[30px] p-8 flex flex-col items-center gap-8'>
                    <div className=''>
                        <img src={require('../../assets/images/logo.png')} alt="icon" color='white' className='h-8 w-auto'></img>
                    </div>
                    <div className='w-full flex flex-col gap-6'>
                        <FormField 
                            title={'Username'}
                            customInputStyle={'text-start text-[14px]  px-4'}
                            customStyle={'h-16'}
                            customPlaceHolder={'Username'}
                
                        />
                         <FormField 
                            title={'Password'}
                            customInputStyle={'text-start text-[14px] px-4'}
                            customStyle={'h-16'}
                            customPlaceHolder={'Password'}
                        />
                    </div>
                    <div className='w-full flex flex-row justify-between'>
                        <button onClick={toggleChecked} className={`flex items-center gap-2 hover:opacity-100 ${checked ? 'opacity-100' : 'opacity-60'}`}>
                            <Icon icon={checked ? 'ri:checkbox-line' : 'carbon:checkbox'} color={checked ? '#FF8C00' : 'white'} className='h-4 w-auto'></Icon>
                            <span className={`font-poppins-regular text-[12px] ${checked ? 'text-secondary' : 'text-white'}`}>Remember password</span>
                        </button>

                        <button className={`flex items-center gap-4 opacity-60 hover:opacity-100`}>
                            <span className='font-poppins-regular text-white text-[12px]'>Forgot Password?</span>
                        </button>
                        

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
            <div className='absolute top-70 left-0 right-0'>
                <CustomFooter/>
            </div>
        </div>
    )
}

export default Login
