import React from 'react'
import { ActionTooltip } from '@/actions/TooltipAction'
import { Plus } from 'lucide-react'

const ClassroomsAction = () => {
  
  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add new classroom">
        <button className="group flex items-center mt-3">
          <div className="flex mx-3 h-[45px] w-[45px] rounded-[22.5px] group-hover:rounded-[16px]  transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-pink-500">
            <Plus
              className="group-hover:text-white transition text-pink-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  )
}

export default ClassroomsAction
