import {Grid} from '@mui/material'
import React from 'react'
import './Card.scss'

const Register = () => {
  return (
    <div className="card">

      <div className='register'>
        <p className="step">Bước 1</p>
        <p className="step-title">
          Đăng ký tài khoản
        </p>
        <Grid container spacing={3} direction="row"
          style={{marginTop: 70}}
          justifyContent="space-between"
          alignItems="center">
          <Grid item xs="auto">
            <div className="button-action">
              + Đăng ký ngay
            </div>
          </Grid>
          <Grid item xs={7}>
            <p className="step-content">
              bạn cần có bản quyền
              Grand theft auto v
            </p>
          </Grid>

        </Grid>



      </div>
    </div >
  )
}

export default Register