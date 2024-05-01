import menuStyles from "./menu.module.css";
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
    <div className={menuStyles.menu__wrapper}>
      <div className={menuStyles.menu}>
        <div className="container">
          <div className={menuStyles.translate__page}>
            <p
              onClick={() => i18n.changeLanguage("ru")}
              className={i18n.language === "ru" ? menuStyles.langActive : ""}
            >
              ru
            </p>
            <p
              onClick={() => i18n.changeLanguage("en")}
              className={i18n.language === "en" ? menuStyles.langActive : ""}
            >
              en
            </p>
          </div>
          <div className={menuStyles.menu__block}>
            <div className={menuStyles.menu__logo}>
              <Link to={"/"}>
                <img src={logoImg} alt="AlloDoc_Logo" />
              </Link>
            </div>
            <MenuItems />
            <div className={menuStyles.menu__user__icon}>
              <img src={notificationsImg} alt="notifications" />
            </div>
            <div className={menuStyles.menu__user}>
              <p>A</p>
              <span>{t("menuProfilName")}</span>
              <div className={menuStyles.menu__user__img}>
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
