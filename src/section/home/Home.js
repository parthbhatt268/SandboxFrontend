import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleHomeClick = ()=>{
        navigate("sandbox");
    }
  return (
    <div>
        
        Home

        <button onClick={handleHomeClick}>
            go to sandbox
        </button>


    </div>
  )
}

export default Home