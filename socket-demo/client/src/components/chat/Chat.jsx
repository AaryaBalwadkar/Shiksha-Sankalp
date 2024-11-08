import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChatInput from "./ChatInput.jsx";
import ChatHeader from "./ChatHeader.jsx";
import ChatMessages from "./ChatMessages";
import ChatWelcome from "./ChatWelcome";
import { format } from "date-fns";
import { ScrollArea } from "../ui/scroll-area";
import { io } from "socket.io-client";

const socket = io('http://localhost:5000')

const DATE_FORMAT = "dd/MM/yyyy HH:mm";

const Chat = () => {
  const { id, channelid, channelName } = useParams();
  const [chats, setChats] = useState([]);
  const [userDetails, setUserDetails] = useState();
  console.log(channelid)

  useEffect(() => {
    const getChats = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/messages/${channelid}`
        );
        setChats(res.data);
      } catch (error) {
        console.log("Something went wrong:", error.message);
      }
    };

    setChats([]);
    getChats();

    // socket.emit('join_channel', {channelId: channelid})

    // socket.on('newMessage', (message) => {
    //   console.log("Hello : ", message)
    //   //setChats((preChats) => [...preChats, message])
    // })
    // let isListenerAttached = true
    // while(isListenerAttached){
    //   socket.on('newMessage', (message) => {
    //     console.log('New message received: ', message)
    //     setChats((prevChats) => [...prevChats, message])
    //     isListenerAttached = false
    //   })
    // }

  }, [channelid]);

  console.log(chats)
  return (
    <div>
      {channelid && <ChatHeader name={channelName} />}
      {!channelid && (
        <div className="flex flex-col bg-blue-200/30 ml-[320px] h-[100vh] items-center justify-center">
          Hello
        </div>
      )}
      {channelid && (
        <div className="chat-section flex flex-col justify-end mb-0 pb-0 h-[94vh] bg-blue-200/30">
          <ScrollArea className="flex-col justify-end w-full overflow-auto h-[100vh]">
            <ChatWelcome name={channelName} />
            {chats.map((chat) => (
              <ChatMessages
                key={chat._id} // Assuming each message has a unique `_id`
                message={chat.message}
                senderId={chat.senderId}
                timestamp={format(new Date(chat.createdAt), DATE_FORMAT)}
              />
            ))}
          </ScrollArea>
          <ChatInput name={channelName} channelid={channelid}/>
        </div>
      )}
    </div>
  );
};

export default Chat;


// import React, { useEffect, useState } from "react";
// import "./Chat.css";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import ChatInput from "./ChatInput.jsx";
// import ChatHeader from "./ChatHeader.jsx";

// const Chat = () => {
//   const { id, channelid, channelName } = useParams(); // Get classroom ID from route params
//   const [chats, setChats] = useState([]);

//   useEffect(() => {
//     const getChats = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/messages/${channelid}`
//         );
//         setChats(res.data);
//       } catch (error) {
//         console.log("Something went wrong:", error.message);
//       }
//     };

//     // Clear previous chats when channelid changes
//     setChats([]); // Clear chats to avoid showing old messages
//     getChats();
//   }, [channelid]);

//   return (
//     <div className="justify-end flex flex-col">
//       {channelid && (
//         <ChatHeader name={channelName}/>
//       )}
//       <div className="chat-section flex flex-col justify-end mb-0 pb-0 h-[94vh] bg-blue-200/30">
//         {chats.map((chat) => (
//           <div key={chat._id}>{chat.message}</div>
//         ))}
//         {!channelid && (
//           <div className="items-center justify-center flex h-full text-center">
//             Hello
//           </div>
//         )}
//         {channelid && <ChatInput name={channelName} channelid={channelid} />}
//       </div>
//     </div>
//   );
// };

// export default Chat;
