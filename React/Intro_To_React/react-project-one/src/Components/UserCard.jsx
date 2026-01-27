import React from 'react'
import myPic from '../assets/MyPic.jpg'
import './UserCard.css'
const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={myPic} alt="" />
      <p id='user-desc'>THis is My Descritption</p>
    </div>
  )
}

export default UserCard
