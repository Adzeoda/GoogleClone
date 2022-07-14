import React from 'react';
import "./Home.css";
import { Link} from "react-router-dom";

function Home() {
  return (
    <div className="home">       
      <div className='home_header'>
        <div className='home_headerLeft'>
        <Link to='/about'>about</Link>
        <Link to='/store'>store</Link>
      </div>
      <div className='home_headerRight'>
        <Link to='/gmail'>gmail</Link>
        <Link to='/images'>Images</Link>
        {/* Icon */}
        {/* Avatar */}
        </div>
      </div>

      <div className="home_body">

      </div>

    </div>
  )
}

export default Home