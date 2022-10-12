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
    contents: ["+ 30 sự kiện mới"],
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
    label: "Cửa hàng",
    contents: ["+ Nâng cấp xe", "+ Thay đổi diện mạo"],
    imgFeatures: [
      Images.FeatureDetail.feat3,
      Images.FeatureDetail.feat4,
    ],
    thumbnail: Images.FeatureDetail.store,
  },
  {
    key: "sale",
    label: "Khuyến mãi",
    contents: ["+ Ưu đãi tháng 8"],
    imgFeatures: [
      Images.FeatureDetail.baba2,
      Images.FeatureDetail.feat1,
      Images.FeatureDetail.feat2
    ],
    thumbnail: Images.FeatureDetail.sale,
  },
  {
    key: "hot",
    label: "Tiêu điểm",
    contents: ["+ Thông tin nổi bật"],
    imgFeatures: [
      Images.FeatureDetail.feat3,
      Images.FeatureDetail.feat4
    ],
    thumbnail: Images.FeatureDetail.hot,
  },
  {
    key: "activity",
    label: "Hoạt động",
    contents: ["+ Hoạt động thành phố"],
    imgFeatures: [
      Images.FeatureDetail.feat1,
      Images.FeatureDetail.feat2
    ],
    thumbnail: Images.FeatureDetail.gameController,
  },
];
