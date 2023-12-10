import React, { useContext } from 'react'
import { ModNineContext } from '../Components/Module9';

export const Start = () => {
  const {userName} = useContext(ModNineContext); 
  return (
    <div>
      <h2>Home Page</h2>
      <p>Home page for: {userName}</p>
    </div>
  )
}
