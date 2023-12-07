import React from 'react'

export const Planet = ({planets}) => {
  return (
    <>
        {
            planets.map((planet,key)=>{
                return(
                    <>
                        <h3 key={key}>{planet.name}</h3>
                        {planet.isGasPlanet?<p style={{color:'blue'}}>A gas planet</p>:<p style={{color:'green'}}>Not a gas planet</p>}
                    </>
                );
            })
        }
    </>
  )
}