import React from 'react'
import '../App.css'
const Hero = () => {
  return (
    <div >
        <div className='hero-container'>
        <div className='left-sec'>
            <h1>Bring Your Stage to Every Screen</h1>
            <div>Turn lessons, performances, and creative sessions into captivating digital shows—without the tech drama. Start hosting in minutes and earn from a truly global audience.</div>
                <br />
            <div>Build your brand, grow your community, and sell replays—all from a single, seamless dashboard.</div>
    <br />
<div>Whether you're a solo artist or a full studio, TheStageRoom scales with your spotlight.</div>
        </div>
       <div className="right-sec">
   
     <img className="hero-img-1"src="src/assets/ring.jpg" alt="dance" />
     
</div>
</div>
<div style={{padding:'32px'}}>
    <h1>PROBLEM & PROMISE</h1>
    <div>Creators weren’t meant to juggle five different apps just to put on a great show. TheStageRoom bundles the essentials—live streaming, ticketing, replays, scheduling, community, and payouts—into one smooth spotlight.

    </div>
</div>
    <div className='bg-ond'><h2>HOW IT WORKS</h2>

    <ol>
      <li>
        Create a Showroom ― Name your event, set the price, pick a date.
      </li>
      <li>
Add Magic ― Upload slides, cue music, or drop polls right into the timeline.

      </li>
      <li>
Go Live ― Hit “Start Broadcast”; we handle transcoding, chat, and recording.

      </li>
      
      <li>
Cash In ― Earnings land in your bank within 48 hours—tax-ready statements included.

      </li>
      </ol>

</div> 
    </div>

    
  )
}

export default Hero
