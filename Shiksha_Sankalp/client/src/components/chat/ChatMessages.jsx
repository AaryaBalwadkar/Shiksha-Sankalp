import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';

const ChatMessages = ({ message, senderId, timestamp, isImage }) => {
  const [userDetails, setUserDetails] = useState();
  
  // const isImage = 
  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.post(`http://localhost:5000/api/user/details`, {senderId})
        setUserDetails(res.data)
      } catch (error) {
        console.log("Something went wrong:", error.message);
      }
    }

    setUserDetails([])
    getDetails()
  },[senderId])

  return (
    <div className='relative group flex items-center hover:bg-blue-400/10 p-4 transition w-full'>
      <div className='group flex gap-x-2 items-start w-full'>
        <div className='cursor-pointer hover:drop-shadow-md transition'>
          <Avatar>
            <AvatarImage src={userDetails?.imageUrl}/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex flex-col w-full'>
          <div className='flex items-center gap-x-2'>
            <div className='flex items-center'>
              <p className='font-semibold text-sm hover:underline cursor-pointer'>
                {userDetails?.name}
              </p>
            </div>
            <span className='text-xs text-zinc-500 dark:text-zinc-400'>
              {timestamp}
            </span>
          </div>
          {isImage && (
            <a
              href=''
              target='_blank'
              rel="noopener noreferrer"
              className='relative aspect-square rounded-md mt-2 overflow-hidden flex items-center bg-secondary h-48 w-48'
            >

            </a>
          )}
          <p className='text-sm text-zinc-600'>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;

