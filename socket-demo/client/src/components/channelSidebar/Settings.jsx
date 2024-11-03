import { useAuthStore } from "@/store/AuthStore";
import React from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const Settings = () => {
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
      <button className="h-5 bg-yellow-300" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Settings;
