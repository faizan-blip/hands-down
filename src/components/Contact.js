import React from 'react'
import profile from './IMAGES/profile.png'
import ceo from './IMAGES/sid profile.png'
import baraka from './IMAGES/Baraka.jpg'
export default function Contact() {
  return (
    <>
      <div className="bar">
        <span className="bar_content">
          <h2> <span>HANDS-DOWN </span> ◯ LETS WORK TOGETHER ◯  <span>HANDS-DOWN </span> ◯ LETS WORK TOGETHER ◯  <span>HANDS-DOWN </span></h2>
        </span>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-front">
            <img src={ceo} alt="" />
          </div>
          <div className="card-back">
          <h2>Sidharth Ganguly</h2>
            <h3>Chief Executive Officer</h3>
          </div>
        </div>
        <div className="card">
          <div className="card-front">
          <img src={baraka} alt="" />
          </div>
          <div className="card-back">
          
            <h2>Baraka Mohammed</h2>
            <h3>Chief Financial Officer</h3>
          </div>
        </div>
        <div className="card">
          <div className="card-front">
          <img src={profile} alt="" />
          </div>
          <div className="card-back">
          <h2>Hai Rai Lim</h2>
            <h3>Chief Marketting Officer</h3>
          </div>
        </div>
        <div className="card">
          <div className="card-front">
          <img src={profile} alt="" />
          </div>
          <div className="card-back">
            <h2>Ujjwal Dahiya</h2>
            <h3>Marketing Executive</h3>
          </div>
        </div>
      </div>
    </>
  )
}