import {Container} from "@mui/material";
import React, {useState} from "react";
import CustomButton from "./CustomButton";
import {listTab} from "./data";
import "./ListVideo.scss";
import ListVideoContent from "./ListVideoContent/ListVideoContent";

const ListVideo = () => {
  const [selectTab, setSelectTab] = useState(0);
  return (
    <div className="list-video">
      <div className="group-tab">
        <Container maxWidth="xl">
          {listTab.map((item, index) => (
            <CustomButton
              key={item.key}
              className={selectTab === index ? "selected" : ""}
              onClick={() => setSelectTab(index)}
              size="large"
            >
              {item.label}
            </CustomButton>
          ))}
        </Container>
      </div>
      <Container maxWidth="xl">
        <ListVideoContent videoIds={listTab[selectTab].videoIds} />
      </Container>
    </div>
  );
};

export default ListVideo;
