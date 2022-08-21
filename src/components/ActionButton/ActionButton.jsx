import Images from 'assets/images'
import React from 'react'
import './ActionButton.scss'

export const ActionButton = () => {
  return (
    <div className='action-button'>
      <img src={Images.CallToAction} alt='' className='men-img' />
      <p className='blinking'>Tham gia ngay</p>
    </div>
  )
}
