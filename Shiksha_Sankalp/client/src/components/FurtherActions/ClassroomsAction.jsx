import React from 'react'
import { ActionTooltip } from '@/actions/TooltipAction'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/AuthStore'

const ClassroomsAction = () => {
  const navigate = useNavigate()
  const { user } = useAuthStore()

  const handlePlusAddClassroom = () => {
    navigate(`/home/addClassroom`);
  }
  const handlePlusJoinClassroom = () => {
    navigate(`/home/joinClassroom`);
  }
  
  return (
    <div>
      {(user?.status === "institute") && (
        <ActionTooltip side="right" align="center" label="Add new classroom">
          <button 
            className="group flex items-center mt-3"
            onClick={handlePlusAddClassroom}>
            <div className="flex mx-3 h-[45px] w-[45px] rounded-[22.5px] group-hover:rounded-[16px]  transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-pink-500">
              <Plus
                className="group-hover:text-white transition text-pink-500"
                size={25}
              />
            </div>
          </button>
        </ActionTooltip>
      )}
      {(user?.status === "educator") && (
        <ActionTooltip side="right" align="center" label="Join Classroom">
          <button className="group flex items-center mt-3">
            <div 
              className="flex mx-3 h-[45px] w-[45px] rounded-[22.5px] group-hover:rounded-[16px]  transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-green-500"
              onClick={handlePlusJoinClassroom}>
              <Plus
                className="group-hover:text-white transition text-green-500"
                size={25}
              />
            </div>
          </button>
        </ActionTooltip>
      )}
      {(user?.status === "student") && (
        <ActionTooltip side="right" align="center" label="Join Classroom">
          <button className="group flex items-center mt-3">
            <div 
              className="flex mx-3 h-[45px] w-[45px] rounded-[22.5px] group-hover:rounded-[16px]  transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-orange-500"
              onClick={handlePlusJoinClassroom}>
              <Plus
                className="group-hover:text-white transition text-orange-500"
                size={25}
              />
            </div>
          </button>
        </ActionTooltip>
      )}
    </div>
  )
}

export default ClassroomsAction
