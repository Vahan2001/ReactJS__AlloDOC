import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../services/i18n";
import logoImg from "../../images/Logo.png";
import notificationsImg from "../../images/zang.png";
import arrowImg from "../../images/Vector.png";
import MenuItems from "./MenuItems";
import MenuProfilItems from "./MenuProfilItem";

export default function Menu() {
  const { t } = useTranslation();
  const [profilBlok, setprofilBlok] = useState(false);
  return (
    <div className="menu__wrapper">
      <div className="menu">
        <div className="container">
          <div className="translate__page">
            <p
              onClick={() => i18n.changeLanguage("ru")}
              className={i18n.language === "ru" ? "langActive" : ""}
            >
              ru
            </p>
            <p
              onClick={() => i18n.changeLanguage("en")}
              className={i18n.language === "en" ? "langActive" : ""}
            >
              en
            </p>
          </div>
          <div className="menu__block">
            <div className="menu__logo">
              <Link to={"/"}>
                <img src={logoImg} alt="AlloDoc_Logo" />
              </Link>
            </div>
            <MenuItems />
            <div className="menu__user-icon">
              <img src={notificationsImg} alt="notifications" />
            </div>
            <div className="menu__user">
              <p>A</p>
              <span>{t("menuProfilName")}</span>
              <div className="menu__user-img">
                <button
                  onClick={() =>
                    setprofilBlok((setprofilBlok) => !setprofilBlok)
                  }
                >
                  <img src={arrowImg} alt="arrow" />
                </button>
              </div>
            </div>
            {profilBlok && <MenuProfilItems />}
          </div>
        </div>
      </div>
    </div>
  );
}
