import React from 'react'
import { useEffect, useState, useCallback, useRef } from 'react'
import axios from 'axios'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Image } from '@chakra-ui/react'
import Time_divider from './Time_divider';
import '../App.css'

interface chatType {
  id: number,
  message: string,
  sender: {
    image: string,
    name: string,
    is_kyc_verified: boolean
  }
}

const Chat_section = () => {

  const [page, setPage] = useState<number>(0)
  const [chatData, setChatData] = useState<chatType[]>([])
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    axios.get(`https://qa.corider.in/assignment/chat?page=${page}`).then((res) => {
      console.log(res.data.chats)
      setChatData((prevChatData) => [...prevChatData, ...res.data.chats]);
    })
  }, [page])

  const lastChatElementCallback = useCallback((node: HTMLDivElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log(entries);

        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <div className='bg-[#FAF9F4] space-y-5 font-mulish'>
      <Time_divider />
      {
        
        chatData && chatData.map((chat, ind) => {
          return (
            <div key={chat.id}
              className='flex gap-1'
              ref={ind === chatData.length - 1 ? lastChatElementCallback : null}
            >
              {/* <img src={chat.sender.image} alt="" /> */}
              <div className='relative w-[40px] h-[40px] z-10'>
                <Image
                  src={chat.sender.image}
                  alt="Profile Image"
                  className={'w-full h-full object-cover rounded-full'}
                />
                <RiVerifiedBadgeFill className={`absolute bottom-0 right-0 text-blue-500 ${chat.sender.is_kyc_verified?'':'hidden'}`} />
              </div>
              <div className='w-[287px] ml-[0.6rem] bg-white shadow p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl'>
                <p className=' text-[#606060]'>{chat.message}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Chat_section