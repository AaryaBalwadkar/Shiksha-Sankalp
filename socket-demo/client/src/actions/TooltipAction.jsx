import { useAuthStore } from "@/store/AuthStore";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

export const ActionTooltip = ({ label, children, side, align }) => {
  const { user } = useAuthStore()
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          {(user?.status === "institute") && (

            <p className="font-semibold text-sm capitalize bg-pink-200 p-1 pl-3 pr-3 rounded-[15px]">
              {label.toLowerCase()}
            </p>
          )}
          {(user?.status === "educator") && (

            <p className="font-semibold text-sm capitalize bg-green-200 p-1 pl-3 pr-3 rounded-[15px]">
              {label.toLowerCase()}
            </p>
          )}
          {(user?.status === "student") && (

            <p className="font-semibold text-sm capitalize bg-orange-200 p-1 pl-3 pr-3 rounded-[15px]">
              {label.toLowerCase()}
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
