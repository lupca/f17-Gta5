import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Register = ({onClick, isSelected}) => {
  const registerHandle = () => {
    window.open("https://store.steampowered.com/agecheck/app/271590/")
  }
  return (
    <div className={`card card1 ${isSelected}`} onClick={onClick}>
      <div className="register">
        <div className="step-register">
          <p className="step">Bước 1</p>
          <p className="step-title">Game bản quyền</p>
        </div>
        <div className="action-register" onClick={registerHandle}>
          <div className="button-action">+ Mua game</div>
          <p className="step-content">
            Bạn cần phải mua game trên steam hoặc epicgames
          </p>
        </div>

      </div>
    </div>
  );
};
Register.propTypes = {
  onClick: PropTypes.func,
  isSelected: PropTypes.string
};

export default Register;
