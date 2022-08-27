import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Register = ({onClick, isSelected}) => {
  return (
    <div className={`card card1 ${isSelected}`} onClick={onClick}>
      <div className="register">
        <div className="step-register">
          <p className="step">Bước 1</p>
          <p className="step-title">Đăng ký tài khoản</p>
        </div>
        <div className="action-register">
          <div className="button-action">+ Đăng ký ngay</div>
          <p className="step-content">
            bạn cần có bản quyền Grand theft auto v
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
