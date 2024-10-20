import React from 'react'
import './Home.css'
import Classrooms from '../../components/classroomSidebar/Classrooms.jsx'
import Channel from '@/components/channelSidebar/Channel.jsx'
import { useParams } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Classrooms />
      <Channel />
    </div>
  )
}

export default Home
