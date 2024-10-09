import React from 'react';
import { BsJustify, BsPersonCircle, BsSearch } from 'react-icons/bs';
import { BiMessageDots } from "react-icons/bi";
import { CiGift } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Divider from '@mui/material/Divider';
import { Avatar, Typography } from '@mui/material';
import User from '../../assets/user.webp'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-0 px-5 bg-[#EEEDEB] header'>
      <div className='hidden'>
          <BsJustify className='align-middle leading-1 text-xl mr-1.25'/>
      </div>


  <div className='flex justify-start w-[600px]'>
  <div className='relative w-full'>
    <input
      className='w-full border border-[#1f2121] py-2.5 px-10 pr-12 rounded-md outline-none border-none'
      placeholder='Search...'
    />
    <BsSearch className='absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-[#1e2020]' />
  </div>
</div>


      <div className='flex gap-5 header-right'>
      <IoIosNotificationsOutline className='align-middle leading-1 text-xl mr-1.25'/>
      <BiMessageDots className='align-middle leading-1 text-xl mr-1.25'/>
      <BsPersonCircle className='align-middle leading-1 text-xl mr-1.25'/>
      <CiGift className='align-middle leading-1 text-xl mr-1.25'/>
      <IoSettingsOutline className='align-middle leading-1 text-xl mr-1.25'/>
      </div>

      <div className='flex gap-5 items-center'>
      <Divider orientation="vertical" variant="middle" flexItem className='text-black'/>
      <Typography variant='h6'>Hello, Morgan</Typography>
      <Avatar src={User}/>
      </div>

    </div>
  )
}

export default Header
