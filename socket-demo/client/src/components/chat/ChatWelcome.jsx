import { Hash } from 'lucide-react'
import React from 'react'

const ChatWelcome = ({name}) => {
  return (
    <div>
      <div className='space-y-2 px-4 mb-4'>
        <div className='h-[75px] w-[75px] rounded-full bg-blue-200/50 dark:bg-blue-400 flex items-center justify-center'>
            <Hash className='h-12 w-12 text-zinc-500'/>
        </div>
        <p className='text-xt md:text-3xl font-bold'>
            {`Welcome to #${name}!`}
        </p>
        <p className='text-zinc-600 text-sm'>
            {`This is the start of #${name}`}
        </p>
      </div>
    </div>
  )
}

export default ChatWelcome
