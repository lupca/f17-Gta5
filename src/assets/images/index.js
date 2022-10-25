import logo from "./F17City.png";
import BgBanner from "./banner.jpg";
import HeroBanner from "./BannerHero.png";
import TextHeroBanner from "./text.png";
import BgContent from "./BG.png";
import Vector from "./Vector.png";
import Men from "./men1.png";
import Women from "./girl.png";
import CallToAction from "./call-to-action.png";
import Momo from "./paymentMethods/momo.png";
//Feature
import Feature1 from "./features/feature1.png";
import Feature2 from "./features/feature2.png";
import Feature3 from "./features/feature3.png";
import gameController from "./features/game-controller.png";
import event from "./features/event.png";
import hot from "./features/hot.png";
import sale from "./features/sale.png";
import store from "./features/store.png";

//Hinhnen
import hinhnent07 from "./features/hinhnen/hinhnenthang07.png";
import hinhnent08 from "./features/hinhnen/hinhnenthang08.png";
import hinhnent09 from "./features/hinhnen/hinhnenthang09.png";
import hinhnent10 from "./features/hinhnen/hinhnenthang10.png";

//Slideshow thể thao
import bongda from "./featureDetail/bongda.jpg";
import bongro from "./featureDetail/bongro.jpg";
import bongchuyen from "./featureDetail/bongchuyen.jpg";
import boxing from "./featureDetail/boxing.jpg";
import sangolf from "./featureDetail/sangolf.jpg";
import minigolf from "./featureDetail/minigolf.jpg";
import khuvuichoi from "./featureDetail/khuvuichoi.jpg";
import nhama from "./featureDetail/nhama.jpg";
import plasmakart from "./featureDetail/plasmakart.jpg";



//Social icon
import TikTok from "./social/tiktok.png";
import Facebook from "./social/facebook.png";
import Discord from "./social/discord.png";
import Youtube from "./social/youtube.png";

const Images = {
  LOGO: logo,
  HeroBanner,
  BgContent,
  BgBanner,
  Men,
  Women,
  Vector,
  CallToAction,
  TextHeroBanner,
  PaymentMethod: {
    Momo: Momo,
  },
  FeatureDetail: {
    gameController,
    event,
    sale,
    hot,
    store,
    feat1,
    feat2,
    feat3,
    feat4,
    baba,
    baba2,
  },
  // Nội dung slideshow
  Features: [
    {
      image: hinhnent07,
      // Thay đổi text ở dòng dưới.
      content:
        "Hình nền tháng 07 - Thành phố nói không với pay2win.",
    },
    {
      image: hinhnent08,
      content:
        "Hình nền tháng 08 - Kiếm tiền ingame dễ dàng với 1 loạt nhiệm vụ hàng ngày.",
    },
    {
      image: hinhnent09,
      content:
        "Hình nền tháng 09 - Các nghề nghiệp được trau chuốt tỉ mỉ, có level.",
    },
    {
      image: hinhnent10,
      content:
        "Hình nền tháng 10 - Ngập tràn quà tặng với update tháng này.",
    },
  ],
  Social: { TikTok, Discord, Facebook, Youtube },
};

export default Images;
