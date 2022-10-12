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
import feat1 from "./featureDetail/1.png";
import feat2 from "./featureDetail/2.png";
import feat3 from "./featureDetail/3.png";
import feat4 from "./featureDetail/4.png";
import caydongho from "./featureDetail/f17-caydongho.png";
import haithaomoc from "./featureDetail/f17-haithaomoc.png";
import ruatien from "./featureDetail/f17-ruatien.png";

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
    caydongho,
    haithaomoc,
    ruatien,
  },
  // Nội dung slideshow
  Features: [
    {
      image: Feature2,
      // Thay đổi text ở dòng dưới.
      content:
        "Each round, you and 15 other contestants compete toescape a deadly island filled with monsters. Each round, you and 15 other contestants compete toescape a deadly island filled with monsters.",
    },
    {
      image: Feature1,
      content:
        "You and 15 other contestants compete toescape a deadly island filled with monsters.",
    },
    {
      image: Feature3,
      content:
        "15 other contestants compete toescape a deadly island filled with monsters.",
    },
    {
      image: Feature3,
      content:
        "144 other contestants compete toescape a deadly island filled with monsters.",
    },
  ],
  Social: { TikTok, Discord, Facebook, Youtube },
};

export default Images;
