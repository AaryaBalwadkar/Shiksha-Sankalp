import React from "react";
import './Channel.css'
import Settings from "./Settings.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ChannelNavigationItem from "./ChannelNavigationItem";
import ChannelHeader from "./ChannelHeader";

const Channel = () => {
  const { id } = useParams(); // Get classroom ID from route params
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/classroom/${id}`
        );
        setChannels(res.data);
      } catch (error) {
        console.log("Something went wrong:", error.message);
      }
    };

    getChannels();
  }, [id]);
  
  return (
    <div>
      <div className="channel-side-bar">
      <Settings />
      <ChannelHeader />

      {channels.map((channel) => (
        <div key={channel._id} >
          <ChannelNavigationItem classroomId={id} channelId={channel._id} channelName={channel.channelName} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Channel;
