//import React from 'react'
import './Home.css'
import Classrooms from '../../components/classroomSidebar/Classrooms.jsx'
import Channel from '@/components/channelSidebar/Channel.jsx'
import Chat from '@/components/chat/Chat'

const Home = () => {
  return (
    <div>
      <div className='top-bar'/>
      <Classrooms />
      <Channel />
      <Chat />
    </div>
  )
}

export default Home
