import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
    const username = useSelector((state:any)=>state.user.value.username)
  return (
    <div>
        <h2>Home Page</h2>
        <h3>{username}</h3>
    </div>
  )
}
