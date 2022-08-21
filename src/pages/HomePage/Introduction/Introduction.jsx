import Images from 'assets/images'
import React from 'react'
import YouTube from 'react-youtube'
import './Introduction.scss'

const Introduction = () => {
  return (
    <div className='video-intro-wrap'>
      <div className="video-intro">
        <img src={Images.Men} alt='' className='men-img' />
        <div className="title">
          Hướng dẫn vào game
        </div>
        <YouTube videoId="tzkmSXQQQaQ" opts={{width: '854', height: '480'}} />
      </div>


    </div>
  )
}

export default Introduction