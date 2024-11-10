import React from "react";
import './Channel.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ChannelNavigationItem from "./ChannelNavigationItem";
import ChannelHeader from "./ChannelHeader";
import ChannelsAction from "../FurtherActions/ChannelsAction";
import { ScrollArea } from "../ui/scroll-area";
import { useClassroomAndChannelStore } from "@/store/ClassroomStore";

const Channel = () => {
  const { id } = useParams(); // Get classroom ID from route params
  const [channels, setChannels] = useState([]);
  const [classroomCode, setClassroomCode] = useState([])

  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/classroom/${id}`
        );
        setChannels(res.data[0]);
        setClassroomCode(res.data[1]);
      } catch (error) {
        console.log("Something went wrong:", error.message);
      }
    };

    getChannels();
  }, [id]);

  return (
    <div>
      <div className="channel-side-bar">
        {!id && (
          <div className="flex flex-col h-[100vh] items-center justify-center">Select any classroom</div>
        )}
        {id && (
          <>
            <ChannelHeader classroomId={id} code={classroomCode}/>
          </>
        )}
        <ScrollArea className="h-[80vh]">
        {channels.map((channel, index) => (
          <div key={index}>
            <ChannelNavigationItem classroomId={id} channelId={channel._id} channelName={channel.channelName} lock={channel.lock}/>
          </div>
        ))}
        {id && <ChannelsAction classroomId={id} />}
        </ScrollArea>
      </div>
    </div>
  );
};

export default Channel;
