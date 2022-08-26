import React from "react";
import PropTypes from "prop-types";
import "./TabFeature.scss";

const TabFeature = ({ tabItem, isSelected }) => {
  return (
    <div className={`tab-feature inner-border ${isSelected ? "selected" : ""}`}>
      <p className="label">{tabItem.label} </p>
      <div className="content">
        {tabItem.contents.map((content, index) => (
          <p className="tab-content" key={index}>
            {content}
          </p>
        ))}
      </div>
      <img src={tabItem.thumbnail} className="tab-thumbnail" alt="thumbnail" />
    </div>
  );
};

TabFeature.propTypes = {
  tabItem: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
};

export default TabFeature;
