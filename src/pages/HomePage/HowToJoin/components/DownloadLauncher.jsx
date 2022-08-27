import React from 'react'
import './Card.scss'
import PropTypes from "prop-types";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const DownloadLauncher = ({onClick, isSelected}) => {
  return (
    <div className={`card card2 ${isSelected}`} onClick={onClick}>
      <div className='download-launcher'>
        <div className="step-download">
          <p className="step">Bước 2</p>
          <p className="step-title">
            Tải laucher
          </p>
        </div>
        <div className="button-action" >
          <span>Tải xuống</span>  <ArrowDownwardIcon fontSize="large" />
        </div>
      </div>
    </div >
  )
}
DownloadLauncher.propTypes = {
  onClick: PropTypes.func,
  isSelected: PropTypes.string
};

export default DownloadLauncher