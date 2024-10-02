import React from 'react'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { AbsoluteCenter } from '@chakra-ui/react'
import { useEffect } from 'react'

const Time_divider = () => {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        setCurrentDate(formattedDate);
    }, [])

    return (
        <Box position='relative' padding='10'>
            <hr className=' bg-[#B7B7B7]'/>
            <AbsoluteCenter px='8' className='bg-[#FAF9F4]'>
            {currentDate}
            </AbsoluteCenter>
        </Box>
    )
}

export default Time_divider