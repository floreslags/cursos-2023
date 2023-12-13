import React from 'react'

interface Props {
    name:string,
    email:string,
    age:number,
    isMarried:boolean,
    friends:string[],
    country:Country
}

export enum Country{
    USA = 'United States',
    Canada = 'Canada',
    Mexico = 'Mexico'
}

export const Person = ({name,email,age,isMarried,friends,country}:Props) => {
  return (
    <div>
        <h3>Name: {name}</h3>
        <h4>Email: {email}</h4>
        <h4>Age: {age}</h4>
        <p>This person {isMarried?'is':'is not'} Married</p>
        {friends.map((friend:string,key:number)=><p key={key}>{friend}</p>)}
        <p>Country: {country}</p>
    </div>
  )
}
