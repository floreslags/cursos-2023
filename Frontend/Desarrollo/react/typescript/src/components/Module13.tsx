import React from 'react'
import { Person,Country } from './Person'

export const Module13 = () => {
  return (
    <div>
        <h2>Module 13 - TypeScript / Type Safety</h2>
        <Person 
            name='Sergio'
            email='sergio@mail.com'
            age={30}
            isMarried={false}
            friends={['Bruno','Brenda','Billy']}
            country={Country.Mexico}
        />
    </div>
  )
}
