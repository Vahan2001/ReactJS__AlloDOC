import { useContext } from "react";
import footerLogo from "../../images/footerLogo.png";
import instImg from "../../images/instagram.png";
import fbImg from "../../images/facebook.png";
import youtubeImg from "../../images/youtube.png";
import appStore from "../../images/appstore.png";
import googlePlayImg from "../../images/google-play.png";
import emailImg from "../../images/email.png";
import placeImg from "../../images/place.png";
import clockFooterImg from "../../images/clockfooter.png";
import phoneImg from "../../images/phone-call.png";
import { TranslateContext } from "../../App";
export default function Footer() {
  const t = useContext(TranslateContext);
  return (
    <footer>
      <div className="container">
        <div className="footer__blocks">
          <div className="footer__logo-block">
            <div className="footer__logo">
              <img src={footerLogo} alt="" />
            </div>
            <div className="footer__desc">
              <p>
                {t.footerDesc1}
                <br />
                <br />
                {t.footerDesc2}
              </p>
            </div>
            <div className="footer__items">
              <a href="#">
                <img src={instImg} alt="Instagram" />
              </a>
              <a href="#">
                <img src={fbImg} alt="Facebook" />
              </a>
              <a href="#">
                <img src={youtubeImg} alt="Youtube" />
              </a>
            </div>
            <div className="footer__store">
              <a href="#">
                <img src={appStore} alt="AppStore" />
              </a>
              <a href="#">
                <img src={googlePlayImg} alt="GooglePlay" />
              </a>
            </div>
          </div>
          <div className="footer__list">
            <ul>
              <li>
                <a href="#">{t.footerList1}</a>
              </li>
              <li>
                <a href="#">{t.footerList2}</a>
              </li>
              <li>
                <a href="#">{t.footerList3}</a>
              </li>
              <li>
                <a href="#">{t.footerList4}</a>
              </li>
              <li>
                <a href="#">{t.footerList5}</a>
              </li>
              <li>
                <a href="#">{t.footerList6}</a>
              </li>
            </ul>
          </div>
          <div className="footer__feedback">
            <div className="feedback__block">
              <img src={emailImg} alt="" />
              <a href="#">{t.footerfeedback1}</a>
            </div>
            <div className="feedback__block">
              <img src={placeImg} alt="" />
              <a href="#">{t.footerfeedback2}</a>
            </div>
            <div className="feedback__block">
              <img src={clockFooterImg} alt="" />
              <a href="#">{t.footerfeedback3}</a>
            </div>
            <div className="feedback__block">
              <img src={phoneImg} alt="" />
              <a href="#">{t.footerfeedback4}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
