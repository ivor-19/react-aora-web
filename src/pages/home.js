import React from 'react'
import CustomButton from '../components/CustomButton'
import CustomNavBar from '../components/CustomNavBar'
import CustomFooter from '../components/CustomFooter'

function Home() {
  return (
    <div className='h-screen bg-primary relative overflow-x-hidden custom-scrollbar '>
        <img src={require('../assets/images/bg-shape-4.png')} alt="" className='h-[60%] w-auto absolute top-20 left-0 opacity-90 z-0'></img>
        <img src={require('../assets/images/bg-shape-3.png')} alt="" className='h-[80%] w-auto absolute top-60 -right-64 opacity-90 z-0'></img>
        <CustomNavBar

        />
        <div className='min-h-[12%]'></div>
        <div className='min-h-[90%] bg-primary flex items-center justify-center z-10'>
            <div className='max-w-[1100px] w-full mx-auto gap-20 flex flex-col'>
                <div className='flex flex-col items-center  z-20'>
                    <span className='text-white font-poppins-bold text-[30px] text-center'>Discover Endless Possibilities with 
                        <span className='text-secondary font-poppins-bold text-[30px]'> Aora</span>
                    </span>
                    <span className='text-gray-500 text-center font-poppins-regular text-[16px] w-[50%]'>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</span>
                </div>
                {/* <div className='flex flex-col items-center 0'>
                    <img src={require('../assets/images/cards.png')} className='h-[60%] w-auto'></img>
                    <span className='text-white text-4xl'>Discover Endless Possibilities with Aora</span>
                </div> */}
                <div className='w-full flex justify-center z-20'>
                    <CustomButton
                        title={'Continue with Email'}
                        customStyle={'w-[50%] hover:opacity-80'}
                        customTitleStyle={'font-poppins-semibold text-[12px]'}
                    />
                </div>
            </div>            
        </div>
        <img src={require('../assets/images/bg-shape-5.png')} alt="" className='h-[70%] w-auto absolute top-[600px] left-[200px] opacity-90  z-10'></img>
        <div className='h-screen bg-primary'>
            <div className={'max-w-[1000px] h-full w-full mx-auto gap-20 flex flex-col'}>
                {/* <div className='h-[50%] w-full flex flex-wrap items-center justify-center gap-4'>
                    <div className='bg-black-first h-[50%] w-[48%] rounded-2xl' style={{ boxShadow: "0px 12px 6px rgba(0, 0, 0, 0.25)" }}></div>
                    <div className='bg-black-first h-[50%] w-[48%] rounded-2xl' style={{ boxShadow: "0px 12px 6px rgba(0, 0, 0, 0.25)" }}></div>

                    <div className='bg-black-first h-[50%] w-[97%] rounded-2xl' style={{ boxShadow: "0px 12px 6px rgba(0, 0, 0, 0.25)" }}></div>
                </div> */}
                <div className='z-10 h-[400px] w-full flex flex-col items-center justify-center gap-4 mx-2'>
                    <div className=' h-full w-full flex gap-4'>
                        <div className='bg-black-first h-full w-[48%] rounded-2xl p-10 flex flex-col gap-4' style={{ boxShadow: "0px 12px 6px rgba(0, 0, 0, 0.25)" }}>
                        <span className='text-[20px] font-poppins-semibold text-white'>Lorem Ipsum</span>
                        <span className='text-[10px] font-poppins-regular text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</span>
                        </div>
                        <div className='bg-black-first h-full w-[48%] rounded-2xl p-10 flex flex-col gap-4' style={{ boxShadow: "0px 12px 6px rgba(0, 0, 0, 0.25)" }}>
                            <span className='text-[20px] font-poppins-semibold text-white'>Lorem Ipsum</span>
                            <span className='text-[10px] font-poppins-regular text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</span>
                        </div>
                    </div>
                    <div className='h-full w-full'>
                        <div className='bg-black-first h-full w-[97%] rounded-2xl p-10 flex flex-col gap-4 text-white' style={{ boxShadow: "0px 12px 6px rgba(0, 0, 0, 0.25)" }}>
                            <span className='text-[20px] font-poppins-semibold'>Lorem Ipsum</span>
                            <span className='text-[10px] font-poppins-regular'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <CustomFooter

        />
      
    </div>
  )
}

export default Home
