import React from 'react'
import './Timeline.css'
import { IMAGES } from './images'
import { timelineData } from './constant'
import Card from './Card'

const TimeLine = () => {
  return (
    <div className='timeline-container'>
        <img src={IMAGES.CIRCLE} alt="" className='circle-icon'/>
        <img src={IMAGES.CURVE} alt="" className='curve-img'/>
        <div className='cards-container'>
        {
            timelineData.map((item)=>(
                <Card {...item} />
            ))
        }
        </div>


    </div>
  )
}

export default TimeLine