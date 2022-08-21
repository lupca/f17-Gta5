import {Container} from '@mui/material'
import Images from 'assets/images'
import {ActionButton} from 'components'
import React from 'react'
import DownloadLauncher from './DownloadLauncher'
import './HowToJoin.scss'
import Register from './Register'

const HowToJoin = () => {
  return (
    <div className='how-to-join'>
      <Container>
        <img src={Images.Women} alt='' className='women-img' />
        <Register />
        <DownloadLauncher />
        <ActionButton />
      </Container>
    </div>

  )
}

export default HowToJoin