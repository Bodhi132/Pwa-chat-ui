import React from 'react'
import { Input } from '@chakra-ui/react'
import { InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { GoPaperclip } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
import { MdOutlineCameraAlt } from "react-icons/md";
import { Tooltip } from '@chakra-ui/react'
import { BsCameraVideo } from "react-icons/bs";
import { HiDocumentArrowDown } from "react-icons/hi2";

const MessageBox = () => {
  return (
    <div className='px-[3rem] py-[2rem] font-mulish fixed h-[12rem] bg-[#FAF9F4] w-full'>
      <InputGroup size='md' className='rounded-md z-30'>
        <Input placeholder='Reply to @Rohit Yadav' width={'100%'} className='py-3 px-3 rounded'/>
        <InputRightElement width='4.5rem' className='gap-3' padding={'0.75rem'}>
          <Tooltip hasArrow={true} label={
            <div className='flex gap-5 rounded-full bg-[#008000] p-4 text-[1.5rem] text-white'>
              <Button>
              <MdOutlineCameraAlt />
              </Button>
              <Button>
              <BsCameraVideo />
              </Button>
              <Button>
                <HiDocumentArrowDown />
              </Button>
            </div>
          } 
          placement='top'>
            <Button>
              <GoPaperclip className=' text-[14.98px]' />
            </Button>
          </Tooltip>
            <Button>
              <VscSend className=' text-[14.98px]' />
            </Button>
        </InputRightElement>
      </InputGroup>
      {/* </div> */}
    </div>
  )
}

export default MessageBox