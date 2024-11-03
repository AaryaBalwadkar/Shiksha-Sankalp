import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hash } from 'lucide-react';
import useConversation from '@/store/ConversationsStore';

const ChannelNavigationItem = ({ classroomId, channelId, channelName }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation === channelId;

    const navigate = useNavigate();

    const handleOnClick = () => {
        setSelectedConversation(channelId);
        navigate(`/home/${classroomId}/${channelName}/${channelId}`);
    };

    useEffect(() => {
        // Reset the selected conversation when the classroomId changes
        setSelectedConversation(null); // or setSelectedConversation("") to reset
    }, [classroomId, setSelectedConversation]);

    return (
        <div>
            <button 
                onClick={handleOnClick}
                className={`group px-5 rounded-md flex items-center gap-x-2 h-10 w-full hover:bg-blue-200 dark:hover:bg-zinc-700/50 transition mb-1
                ${isSelected ? "bg-blue-200" : ""}
            `}
            >
                <Hash className='flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400'/>
                {channelName}
            </button>
        </div>
    );
};

export default ChannelNavigationItem;

