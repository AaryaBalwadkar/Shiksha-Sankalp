import { useAuthStore } from "@/store/AuthStore";
import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";

export const SocketContext = createContext()

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
    const [s,setS] = useState()
    const [onlineUsers,setOnlineUsers] = useState([])
    const { user } = useAuthStore()

    useEffect(() => {
        if(user){
            const socket = io("http://localhost:5000", {
                query: {
                    userId: user?._id,
                },
            })

            setS(socket)

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close()
        } else{
            if(s){
                socket.close()
                setS(null)
            }
        }
    },[user])

	return <SocketContext.Provider value={{s,onlineUsers}}>{children}</SocketContext.Provider>
};