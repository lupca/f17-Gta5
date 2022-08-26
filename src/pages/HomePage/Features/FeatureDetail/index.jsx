import { Container, Grid } from "@mui/material";
import Images from "assets/images";
import React, { useState } from "react";
import TabFeature from "./components/TabFeature";

const FeatureDetail = () => {
  const [selectTab, setSelectTab] = useState(0);
  return (
    <Container maxWidth="xl">
      <div>
        FeatureDetail
        <Grid container spacing={2}>
          <Grid item sm={3}>
            <div className="feature-thumbnails ">
              {listTab.map((tab, index) => (
                <div key={tab.key} onClick={() => setSelectTab(index)}>
                  <TabFeature tabItem={tab} isSelected={selectTab === index} />
                </div>
              ))}
            </div>
          </Grid>
          <Grid item sm={9}>
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
    imgFeature: Images.FeatureDetail.feat1,
    thumbnail: Images.FeatureDetail.store,
  },
  {
    key: "sale",
    label: "Khuyến mãi",
    contents: ["+ Ưu đãi tháng 8"],
    imgFeature: Images.FeatureDetail.feat1,
    thumbnail: Images.FeatureDetail.sale,
  },
  {
    key: "hot",
    label: "Tiêu điểm",
    contents: ["+ Thông tin nổi bật"],
    imgFeature: Images.FeatureDetail.feat1,
    thumbnail: Images.FeatureDetail.hot,
  },
];
