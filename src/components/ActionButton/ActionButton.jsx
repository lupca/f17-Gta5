import Images from 'assets/images'
import React from 'react'
import './ActionButton.scss'

export const ActionButton = () => {
    const handleActionButton = () => {
        window.open("https://www.youtube.com/watch?time_continue=1&v=tzkmSXQQQaQ");
    };

  return (
    <div className='action-button' onClick={handleActionButton}>
      <img src={Images.CallToAction} alt='' className='men-img' />
      <p className='blinking'>Tham gia ngay</p>
    </div>
  )
}
