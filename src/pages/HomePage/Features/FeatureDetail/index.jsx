import { Container, Grid } from "@mui/material";
import Images from "assets/images";
import React, { useState } from "react";
import TabFeature from "./components/TabFeature";
import "./FeatureDetail.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const FeatureDetail = () => {
  const [selectTab, setSelectTab] = useState(0);
  return (
    <Container maxWidth="lg">
      <div className="feature-detail">
        <Grid container columnSpacing={{ xs: 0, sm: 3, md: 4 }}>
          <Grid item xs={12} sm={4}>
            <div className="feature-thumbnails ">
              {listTab.map((tab, index) => (
                <div key={tab.key} onClick={() => setSelectTab(index)}>
                  <TabFeature tabItem={tab} isSelected={selectTab === index} />
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={0} sm={8}>
            <div className="feature-image">
              <Carousel interval={true} showThumbs={true} emulateTouch={true}>
                {listTab[selectTab].imgFeatures.map((img, index) => (
                  <div className="feature-image__imgs" key={index}>
                    <img src={img}/>
                  </div>
                ))}
            </Carousel>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default FeatureDetail;
const listTab = [
  {
    key: "event",
    label: "Sự kiện",
    contents: ["+ Hàng loạt sự kiện mới lạ diễn ra theo từng khung giờ."],
    imgFeatures: [
      Images.FeatureDetail.baba2,
      Images.FeatureDetail.baba,
      Images.FeatureDetail.feat3,
      Images.FeatureDetail.feat4,
    ],
    thumbnail: Images.FeatureDetail.event,
  },
  {
    key: "store",
    label: "Nghề nghiệp",
    contents: ["+ Các nghề đa dạng, chuyên sâu, có cấp độ."],
    imgFeatures: [
      Images.FeatureDetail.feat3,
      Images.FeatureDetail.feat4,
    ],
    thumbnail: Images.FeatureDetail.store,
  },
  {
    key: "sale",
    label: "Nghề bẩn",
    contents: ["+ Hồi hộp, kịch tính, thưởng to xứng đáng với công sức."],
    imgFeatures: [
      Images.FeatureDetail.baba2,
      Images.FeatureDetail.feat1,
      Images.FeatureDetail.feat2
    ],
    thumbnail: Images.FeatureDetail.sale,
  },
  {
    key: "hot",
    label: "Hoạt động vui chơi",
    contents: ["+ Nơi giao lưu, xả stress sau những phi vụ."],
    imgFeatures: [
      Images.FeatureDetail.bongda,
      Images.FeatureDetail.bongro,
      Images.FeatureDetail.bongchuyen,
      Images.FeatureDetail.boxing,
      Images.FeatureDetail.sangolf,
      Images.FeatureDetail.minigolf,
      Images.FeatureDetail.khuvuichoi,
      Images.FeatureDetail.nhama,
      Images.FeatureDetail.plasmakart
    ],
    thumbnail: Images.FeatureDetail.hot,
  },
  {
    key: "activity",
    label: "Địa điểm thành phố",
    contents: ["+ Được trau truốt nhiều khu vực."],
    imgFeatures: [
      Images.FeatureDetail.feat1,
      Images.FeatureDetail.feat2
    ],
    thumbnail: Images.FeatureDetail.gameController,
  },
];
