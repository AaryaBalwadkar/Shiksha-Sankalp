import React from "react";
import "./Channel.css";
import ChannelHeader from "./ChannelHeader.jsx";
import Channels from "./Channels";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Channel = () => {
  const [channels, setChannels] = useState([]);
  const { id } = useParams(); // Get the classroomId from the URL
  console.log(id)

  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/classroom/${id}` // Fetch channels by classroomId
        );
        setChannels(res.data);
        console.log(channels)
      } catch (error) {
        console.log("Something went wrong: ", error.message);
      }
    };

    getChannels();
  }, [id]); // Re-fetch when classroomId changes

  console.log(channels)
  return (
    <div className="channel-side-bar">
      <ChannelHeader />
      {channels.map((channel) => (
        <div key={channel._id} className="mb-4">
          <Channels channel={channel.channelName} />
        </div>
      ))}
    </div>
  );
};

export default Channel;
