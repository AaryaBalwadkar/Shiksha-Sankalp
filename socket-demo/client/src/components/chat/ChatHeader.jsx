import React from 'react'
import { Hash } from 'lucide-react'

const ChatHeader = ({name}) => {
  return (
    <div>
      <div className="flex items-center bg-blue-200/30 h-[6vh] w-[100vw-320px] relative ml-[320px] pl-2 z-10 shadow-bottom-only">
        <Hash className='flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400'/>
        <div className='pl-2'>
          {`${name}`}
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
