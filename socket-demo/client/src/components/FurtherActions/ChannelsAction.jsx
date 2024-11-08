import React from 'react'
import { ActionTooltip } from '@/actions/TooltipAction'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/AuthStore'

const ChannelsAction = ({ classroomId }) => {
  const navigate = useNavigate()
  const { user } = useAuthStore()

  const handlePlus = () => {
    navigate(`/home/addChannel`, { state: { classroomId } });
  }
  
  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add New Channel">
        <button 
          className="group flex items-center mt-3 w-[100%]"
          onClick={handlePlus}
        >
          {(user?.status === "institute") && (

            <div className="group-hover:text-white group px-5 flex items-center gap-x-2 h-10 w-full transition mb-1 mx-3 group-hover:rounded-md overflow-hidden justify-center bg-background dark:bg-neutral-700 group-hover:bg-pink-500">
              <Plus
                className="group-hover:text-white transition text-pink-500"
                size={25}
              />
              Add Channel
            </div>
          )}
          {(user?.status === "educator") && (

            <div className="group px-5 flex items-center gap-x-2 h-10 w-full transition mb-1 mx-3 group-hover:rounded-md overflow-hidden justify-center bg-background dark:bg-neutral-700 group-hover:bg-green-500">
              <Plus
                className="group-hover:text-white transition text-green-500"
                size={25}
              />
            </div>
          )}
        </button>
      </ActionTooltip>
    </div>
  )
}

export default ChannelsAction