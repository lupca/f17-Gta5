import {Button, ButtonGroup, Container, Grid, styled} from '@mui/material'
import React from 'react'
import YouTube from 'react-youtube';
import './ListVideo.scss'
const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '6px 12px',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: 0,

  '&:hover': {
    backgroundColor: '#8574D7',
    color: '#fff'
  },
  '&:active': {
    backgroundColor: '#8574D7',
    color: '#fff'
  },
  '&.selected': {
    backgroundColor: '#8574D7',
    color: '#fff'
  },
  '&:focus': {
    // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
const ListVideo = () => {
  return (
    <div className='list-video'>ListVideo
      <div className="group-tab">
        <Container>
          <CustomButton className='selected' >One</CustomButton>
          <CustomButton>Two</CustomButton>
          <CustomButton>Three</CustomButton>
        </Container>
      </div>
      <div className="videos">
        <Grid container spacing={2}>
          <Grid item xs={8} sm={4}>
            list thumbnail
          </Grid>
          <Grid item xs={4} sm={8}>
            <YouTube videoId="tzkmSXQQQaQ" />

          </Grid>

        </Grid>


      </div>
    </div>
  )
}

export default ListVideo