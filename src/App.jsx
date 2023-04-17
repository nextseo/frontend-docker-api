import React, { useEffect, useState } from 'react'

function App() {
  const [user, setUser]=useState([])

  const feathData = async()=>{
    const req = await fetch(`${import.meta.env.VITE_API}/users`)
    const res = await req.json()
    setUser(res)
 
  }

  useEffect(()=>{
    feathData()
  },[])


  return (
    <div>
      <h1>My User DATABASE</h1>

      <ul>
        {
          user.map((data, index)=>{
            return(
              <li key={index}>{`${data.fname}  ${data.lname}`}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App