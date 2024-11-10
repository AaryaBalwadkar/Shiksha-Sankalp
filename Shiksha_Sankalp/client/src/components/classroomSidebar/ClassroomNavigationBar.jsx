import { cn } from "@/lib/utils"
import { ActionTooltip } from "@/actions/TooltipAction"
import { useNavigate, useParams, useRoutes } from "react-router-dom"
import { useClassroom } from "@/store/ClassroomStore"
import { useState } from "react"

export const ClassroomNavigationItem = ({id, className, imageUrl}) => {
    // const {selectedClassroom, setSelectedClassroom} = useClassroom()
    const [selectedClassroom, setSelectedClassroom] = useState()
    const isSelectedClassroom = selectedClassroom === id
    const navigate = useNavigate()

    const onClick = () => {
        //router.push(`/channels`)
        setSelectedClassroom(id)
        navigate(`/home/${id}`);
    }

    return (
        <ActionTooltip
            side="right"
            align="center"
            label={className}
        >
            <button 
                onClick={onClick}
                className="group relative flex items-center"
            >
                <div className={cn(
                    "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]"
                )} />
                <div className={
                    `relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden bg-white
                    ${isSelectedClassroom ? "rounded-[16px]" : ""}
                `}>
                    <img src={imageUrl} alt={className}></img>
                </div>
            </button>
        </ActionTooltip>
    )
}