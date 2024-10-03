import React from 'react'
import MyChats from '../../../components/myChats/MyChats.jsx'
import Channels from '../../../components/channels/Channels.jsx'

const HomePage = () => {
  return (
    <div>
      <Channels></Channels>
      <MyChats></MyChats>
    </div>
  )
}

export default HomePage
