import React from 'react'
import { cn } from '@/lib/utils'
import { Trash, Code } from 'lucide-react'
import { Presentation } from 'lucide-react'
import { useAuthStore } from '@/store/AuthStore'
import { useNavigate, useParams } from 'react-router-dom'
import { useClassroomAndChannelStore } from '@/store/ClassroomStore'
import { ActionTooltip } from '@/actions/TooltipAction'

const ChannelHeader = ({ classroomId }) => {
  const { user } = useAuthStore()
  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      navigate("/home/confirmdeletion", { state: { id: classroomId } })
    } catch (error) {
      console.log("Error in handling delete classroom")
    }
  }

  const handleRemove = async () => {
    try {
      navigate("/home/confirmremove", { state: { classroomId } })
    } catch (error) {
      console.log("Error in handling delete classroom")
    }
  }

  return (
    <div>

      {(user?.status === "institute") ? (
        <div className='flex items-center bg-blue-200/30 h-[6vh] pl-2 z-10 shadow-bottom-only'>
          <ActionTooltip side="right" align="center" label="Code">
            <div className='flex h-[100%] w-[33%] items-center justify-center border-r-blue-200 border-r-2'>
              <Code />
            </div>
          </ActionTooltip>
          <ActionTooltip side="right" align="center" label="Delete Classroom">
            <div className='flex h-[100%] w-[33%] items-center justify-center border-r-blue-200 border-r-2' onClick={handleDelete}>
              <Trash />
            </div>
          </ActionTooltip>
          <ActionTooltip side="right" align="center" label="Whiteboard">
            <div className='flex w-[33%] justify-center' onClick={handleDelete}>
              <Presentation />
            </div>
          </ActionTooltip>
        </div>
      ) : (
        <div className='flex items-center bg-blue-200/30 h-[6vh] pl-2 z-10 shadow-bottom-only'>
          <div className='flex w-[60%]'>
            Channels
          </div>
          <div className='flex w-[40%] items-center justify-end'>
            <ActionTooltip side="right" align="center" label="Unsubscribe Classroom">
              <div className='flex h-[100%] items-center justify-end border-l-blue-200 border-l-2 mr-3 pl-3' onClick={handleRemove}>
                <Trash />
              </div>
            </ActionTooltip>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChannelHeader
