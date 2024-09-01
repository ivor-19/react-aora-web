import React from 'react'
import { Icon } from '@iconify/react';
import FormField from './FormField';
import CustomButton from './CustomButton';

function ModalToDoList({ isOpen, isClose, handleChangeText, onClick, value }) {
    if(!isOpen) return null;

    return (
        <div className='min-h-screen fixed inset-0 bg-primary bg-opacity-55 flex items-center justify-center'>
            <div className='bg-black-first p-10 min-h-10 w-[700px] rounded-[40px] flex flex-col gap-10'>
                <div onClick={isClose} className='w-full flex justify-end'>
                    <Icon icon={'ep:close-bold'} color='white' className='h-10 w-10 cursor-pointer hover:opacity-60'></Icon>
                </div>
                <div>
                    <FormField
                        customPlaceHolder={'enter your task...'}
                        customInputStyle={'text-[28px]'}
                        handleChangeText={handleChangeText}
                        value={value}
                    />
                </div>
                <div className='w-full'>
                    <CustomButton
                        title={'Add Task'}
                        customStyle={'h-28 hover:opacity-80 active:opacity-60'}
                        customTitleStyle={'text-[24px]'}
                        customIcon={'ic:round-add'}
                        customIconStyle={'h-8 w-8'}
                        customIconColor={'black'}
                        showIcon={true}
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default ModalToDoList
