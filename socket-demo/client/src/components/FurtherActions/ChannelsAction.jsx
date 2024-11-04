import React from 'react'
import { ActionTooltip } from '@/actions/TooltipAction'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ChannelsAction = ({classroomId}) => {
  const navigate = useNavigate()
  //console.log(classroomId)
  const handlePlus = () => {
    
    navigate(`/home/addChannel`, { state: {classroomId} });
  }
  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add new classroom">
        <button className="group flex items-center mt-3 w-[100%]">
          <div className="group px-5 rounded-md flex items-center gap-x-2 h-10 w-full transition mb-1 mx-3 group-hover:rounded-[16px] overflow-hidden justify-center bg-background dark:bg-neutral-700 group-hover:bg-pink-500">
            <Plus
              className="group-hover:text-white transition text-pink-500"
              size={25}
              onClick={handlePlus}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  )
}

export default ChannelsAction