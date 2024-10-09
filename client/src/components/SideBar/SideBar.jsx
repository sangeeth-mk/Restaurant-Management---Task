import React from 'react';
import { BsFillArchiveFill, BsGrid1X2Fill } from 'react-icons/bs';
import Logo from '../../assets/logo.jpg';
import {NavLink} from 'react-router-dom'

const SideBar = () => {
  return (
    <div id='sidebar'>

    <div className='flex justify-between items-center p-[15px 30px 0px 30px] sidebar-title'>
      <div className='text-xl font-black sidebar-brand'>
        <img src={Logo} alt="" className='mt-0 h-20 w-40' />
      </div>
    <span className='align-middle leading-1 text-xl'>X</span>
    </div>

    
    <ul className='p-0 list-none flex flex-col items-start sidebar-list ml-6 mt-3'>
      <NavLink to='/'>
      <li className='py-5 px-5 text-lg sidebar-list-item'>
        <a href="" className='flex items-center gap-3'>
          <BsGrid1X2Fill className='align-middle leading-1 text-xl mr-1.25'/>Dashboard
        </a>
      </li></NavLink>
      
      <NavLink to='/create'>
      <li className='py-5 px-5 text-lg sidebar-list-item'>
      <a href="" className='flex items-center gap-3'>
          <BsFillArchiveFill className='align-middle leading-1 text-xl mr-1.25'/>Order List
        </a>
      </li>
      </NavLink>

    </ul>
    
    </div>
  )
}

export default SideBar
