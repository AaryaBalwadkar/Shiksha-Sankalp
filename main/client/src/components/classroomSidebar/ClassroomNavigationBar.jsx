import { cn } from "@/lib/utils"
import { ActionTooltip } from "@/actions/TooltipAction"
import { useNavigate, useParams, useRoutes } from "react-router-dom"

export const ClassroomNavigationItem = ({id, className, imageUrl}) => {
    // const params = useParams()
    //const router = useRoutes()
    const navigate = useNavigate()

    const onClick = () => {
        //router.push(`/channels`)
        navigate(`${id}`)
        console.log(id)
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
                <div className={cn(
                    "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden bg-white"
                )}>
                    <img src={imageUrl} alt={className}></img>
                </div>
            </button>
        </ActionTooltip>
    )
}