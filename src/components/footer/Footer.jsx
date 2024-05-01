import footerStyles from "./footer.module.css";
import { useTranslation } from "react-i18next";
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

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container">
        <div className={footerStyles.footer__blocks}>
          <div className={footerStyles.footer__logo__block}>
            <div className={footerStyles.footer__logo}>
              <img src={footerLogo} alt="AlloDoc" />
            </div>
            <div className={footerStyles.footer__desc}>
              <p>
                {t("footerDesc1")}
                <br />
                <br />
                {t("footerDesc2")}
              </p>
            </div>
            <div className={footerStyles.footer__items}>
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
            <div className={footerStyles.footer__store}>
              <a href="#">
                <img src={appStore} alt="AppStore" />
              </a>
              <a href="#">
                <img src={googlePlayImg} alt="GooglePlay" />
              </a>
            </div>
          </div>
          <div className={footerStyles.footer__list}>
            <ul>
              <li>
                <a href="#">{t("footerList1")}</a>
              </li>
              <li>
                <a href="#">{t("footerList2")}</a>
              </li>
              <li>
                <a href="#">{t("footerList3")}</a>
              </li>
              <li>
                <a href="#">{t("footerList4")}</a>
              </li>
              <li>
                <a href="#">{t("footerList5")}</a>
              </li>
              <li>
                <a href="#">{t("footerList6")}</a>
              </li>
            </ul>
          </div>
          <div className={footerStyles.footer__feedback}>
            <div className={footerStyles.feedback__block}>
              <img src={emailImg} alt="email" />
              <a href="#">{t("footerfeedback1")}</a>
            </div>
            <div className={footerStyles.feedback__block}>
              <img src={placeImg} alt="place" />
              <a href="#">{t("footerfeedback2")}</a>
            </div>
            <div className={footerStyles.feedback__block}>
              <img src={clockFooterImg} alt="clock" />
              <a href="#">{t("footerfeedback3")}</a>
            </div>
            <div className={footerStyles.feedback__block}>
              <img src={phoneImg} alt="phone" />
              <a href="#">{t("footerfeedback4")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
