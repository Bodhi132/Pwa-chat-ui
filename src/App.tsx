import { useState, useEffect } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { Menu, MenuButton, Button } from '@chakra-ui/react';
import { MenuList, MenuItem } from '@chakra-ui/react';
import profile from '../src/Profile.png'
import Chat_section from '../src/Components/Chat_section';
import MessageBox from './Components/MessageBox';
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tripFrom, setTripFrom] = useState('')
  const [tripTo, setTripTo] = useState('')
  const [tripNo, setTripNo] = useState(0)
  const [chatData, setChatData] = useState()

  useEffect(() => {
    axios.get('https://qa.corider.in/assignment/chat?page=0').then((res) => {
      console.log(res.data)
      setTripFrom(res.data.from)
      setTripTo(res.data.to)
      let tripnum = res.data.name
      tripnum = tripnum.substring(tripnum.length - 1)
      setTripNo(tripnum)
    })
  }, [])


  return (
    <div className=' bg-[#FAF9F4] hide-scrollbar h-screen font-mulish'>
      <div className='fixed border-b-[#E5E5E0] border-b-[1px] top-0 py-[1rem] h-[8.5rem] w-full bg-[#FAF9F4] z-20'>
        <div className='flex justify-between px-[1rem] items-center'>
          <div className='flex text-[1.5rem] items-center gap-3'>
            <IoMdArrowBack />
            <h1 className=' text-[1.5rem] font-bold'>Trip {tripNo}</h1>
          </div>
          <FaRegEdit className=' text-[1.5rem] font-mulish font-thin' />
        </div>
        <div className='flex justify-between px-[1rem] py-[1rem]'>
          <div className='flex items-center gap-4 h-[48px]'>
            <img src={profile} alt="" className='w-[48px] h-full' />
            <div>
              <h1 className='  font-bold'> <span className=' font-medium'>From</span> {tripFrom}</h1>
              <h1 className='  font-bold'> <span className='font-medium'>To</span> {tripTo}</h1>
            </div>
          </div>
          <Menu>
            <MenuButton as={Button} >
              <HiDotsVertical className=' text-[1.5rem]' />
            </MenuButton>
            <MenuList className='bg-white p-[1rem] space-y-5 rounded shadow-md'>
              <MenuItem className='flex space-x-3'>
                <MdPeopleAlt />
                <p>Members</p>
              </MenuItem>
              <MenuItem className='space-x-3'>
                <MdOutlineLocalPhone />
                <p>Share Number</p>
              </MenuItem>
              <MenuItem className='space-x-3'>
                <GoReport />
                <p>Report</p>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className='mt-[8rem] py-[1.5rem] h-[calc(90vh-8.5rem)] overflow-y-scroll hide-scrollbar px-[1rem]'>
        <Chat_section />
      </div>
      <MessageBox />
    </div>
  )
}

export default App
