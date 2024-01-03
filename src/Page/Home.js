import React from 'react'
import { Link } from 'react-router-dom'
import sample from "../assets/bg.mp4"
import "../styles/Home.css"
function Home() {
    return (
      <div className='headerCont'>
        <div className="video">
            
      <video className='videoTag' autoPlay loop muted >
      <source src={sample} type='video/mp4' />
  </video>
        </div>
    <div className='home'>
        <div>
            
        <h1>Enspire</h1>
        </div>
        <div>
            
        <p>Igniting Entrepreneurial Excellence</p>
        </div>
        <Link to="/event">
        <div>

        <button>REGISTER NOW</button>
        </div>
        </Link>
      </div>
  </div>
    )
}
export default Home
