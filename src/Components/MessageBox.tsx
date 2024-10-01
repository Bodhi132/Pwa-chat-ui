import React from 'react'
import { Input } from '@chakra-ui/react'
import { InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const MessageBox = () => {
  return (
    <div className='px-[1rem] py-[1rem]'>
            <InputGroup size='md'>
            <Input placeholder='Basic usage' width={'100%'} />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm'>
          Show
        </Button>
      </InputRightElement>
    </InputGroup>
        {/* </div> */}
    </div>
  )
}

export default MessageBox