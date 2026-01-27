import { useState } from 'react'
import './App.css'
import UserCard from './Components/UserCard'

function App() {

  return (
    <div className='container'>
      <UserCard name="Shivam Upadhyay"/>
      <UserCard name="Jyoti Yadav"/>
      <UserCard name="Abhinav Anand"/>
    </div>
  )
}

export default App
