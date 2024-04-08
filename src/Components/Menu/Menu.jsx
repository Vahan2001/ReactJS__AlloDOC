import { useContext, useState } from "react";
import { TranslateContext } from "../../App";
import logoImg from "../../images/Logo.png";
import notificationsImg from "../../images/zang.png";
import arrowImg from "../../images/Vector.png";
import MenuItems from "../../components/menu/MenuItems";
import MenuProfilItems from "./MenuProfilItem";
import translateRu from "../../local/translateRu";
import translateEn from "../../local/translateEn";
import { Link } from "react-router-dom";

export default function Menu(props) {
  const t = useContext(TranslateContext);
  const [profilBlok, setprofilBlok] = useState(false);
  return (
    <div className="menu__wrapper">
      <div className="menu">
        <div className="container">
          <div className="translate__page">
            <p
              onClick={() => props.setLanguage(translateRu.ru)}
              className={t === translateRu.ru ? "langActive" : ""}
            >
              ru
            </p>
            <p
              onClick={() => props.setLanguage(translateEn.en)}
              className={t === translateEn.en ? "langActive" : ""}
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
              <span>{t.menuProfilName}</span>
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
