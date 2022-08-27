import { Container, Grid } from "@mui/material";
import Images from "assets/images";
import React, { useState } from "react";
import TabFeature from "./components/TabFeature";
import "./FeatureDetail.scss";

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
              <img src={listTab[selectTab].imgFeature} alt="feature" />
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
    imgFeature: Images.FeatureDetail.feat1,
    thumbnail: Images.FeatureDetail.event,
  },
  {
    key: "store",
    label: "Cửa hàng",
    contents: ["+ Nâng cấp xe", "+ Thay đổi diện mạo"],
    imgFeature: Images.FeatureDetail.feat2,
    thumbnail: Images.FeatureDetail.store,
  },
  {
    key: "sale",
    label: "Khuyến mãi",
    contents: ["+ Ưu đãi tháng 8"],
    imgFeature: Images.FeatureDetail.feat3,
    thumbnail: Images.FeatureDetail.sale,
  },
  {
    key: "hot",
    label: "Tiêu điểm",
    contents: ["+ Thông tin nổi bật"],
    imgFeature: Images.FeatureDetail.feat4,
    thumbnail: Images.FeatureDetail.hot,
  },
];
