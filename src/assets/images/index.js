import logo from "./F17City.png";
import BgBanner from "./banner.jpg";
import HeroBanner from "./BannerHero.png";
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
  PaymentMethod: {
    Momo: Momo,
  },
  Features: [Feature2, Feature1, Feature3],
  Social: { TikTok, Discord, Facebook, Youtube },
};

export default Images;
