import { useAuthStore } from "@/store/AuthStore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ActionTooltip } from "@/actions/TooltipAction";
import Select from "react-select";
import { LogOut, LucideLogOut } from "lucide-react";

const Logout = () => {
  const navigate = useNavigate();

  const { logout, error } = useAuthStore();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <ActionTooltip side="right" align="center" label="Logout">
          <button 
            className="group flex items-end justify-end mt-3"
            onClick={handleLogout}>
            <div className="flex items-center justify-center mx-3 h-[45px] w-[45px] rounded-[22.5px] group-hover:rounded-[16px]  transition-all overflow-hidden bg-background dark:bg-neutral-700 group-hover:bg-red-600">
              <LogOut
                className="group-hover:text-white transition text-black-500"
                size={25}
              />
            </div>
          </button>
        </ActionTooltip>
    </div>
  );
};

export default Logout;
