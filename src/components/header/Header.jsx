import headerImg from "../../images/header.jpg";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <div className="header__container">
        <div className="header__block">
          <div className="header__title">
            <h1>
              <b>{t("headerTitle1")}</b> {t("headerTitle2")}
            </h1>
            <p>
              {t("headerSubTitle1")} <b>{t("headerSubTitle2")}</b>
              {t("headerSubTitle3")}
              <b> {t("headerSubTitle4")}</b>
              {t("headerSubTitle5")}
              <a href="#"> {t("headerSubTitle6")}</a> {t("headerSubTitle7")}
              <a href="#"> {t("headerSubTitle8")}</a>
            </p>
            <div className="header__title-btn">
              <a href="#">{t("headerBtn1")}</a>
              <a href="#">{t("headerBtn2")}</a>
            </div>
          </div>
          <div className="header__image">
            <img src={headerImg} alt="HeaderImage" />
          </div>
        </div>
      </div>
    </header>
  );
}
