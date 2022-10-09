import './Event.scss'
import React from "react";
import {Container} from "@mui/material";

const EventComponent = () => {
    return (
      <Container>
        <div className="MuiContainer-root MuiContainer-maxWidthXl how-to-start-wrap css-1ekb41w">
          <div className="how-to-start-header">
            <p className="text-1">Không biết ?</p>
            <p className="text-2">
              <span>Cách</span> tham gia máy chủ
            </p>
            <p className="text-3">Chỉ với 2 bước</p>
          </div>
          <a className="btn--link-to-event" href="https://www.youtube.com/watch?v=5-WNjBfF4_o" target="_blank">
            <p>Cách tham gia<br/>trong 1 phút</p>
            <span className="MuiTouchRipple-root css-w0pj6f"></span>
          </a>
          </div>
      </Container>
    )
}

export default EventComponent