import React from "react";
import PropTypes from "prop-types";
import "./TabFeature.scss";

const TabFeature = ({tabItem, isSelected}) => {
  return (
    <div className={`${tabItem.key} tab-feature inner-border ${isSelected ? "selected" : ""}`}>
      <img src={tabItem.thumbnail} className="tab-thumbnail" alt="thumbnail" />

      <p className="label">{tabItem.label} </p>
      <div className="content">
        {tabItem.contents.map((content, index) => (
          <p className="tab-content" key={index}>
            {content}
          </p>
        ))}
      </div>
    </div>
  );
};

TabFeature.propTypes = {
  tabItem: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
};

export default TabFeature;
