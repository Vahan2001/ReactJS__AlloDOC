import { useContext, useEffect, useState } from "react";
import { TranslateContext } from "../../pages/Home/Home";
import logoImg from "../../Images/Logo.png";
import notificationsImg from "../../Images/zang.png";
import arrowImg from "../../Images/Vector.png";
import MenuItems from "./MenuItems";
import MenuProfilItems from "./MenuProfilItem";

export default function Menu(props) {
  const t = useContext(TranslateContext);
  const [profilBlok, setprofilBlok] = useState(false);
  return (
    <div className="menu__wrapper">
      <div className="menu">
        <div className="container">
          <div className="translate__page">
            <p
              onClick={() => props.setLanguage(props.translate.ru)}
              className={
                props.language === props.translate.ru ? "langActive" : ""
              }
            >
              ru
            </p>
            <p
              onClick={() => props.setLanguage(props.translate.en)}
              className={
                props.language === props.translate.en ? "langActive" : ""
              }
            >
              en
            </p>
          </div>
          <div className="menu__block">
            <div className="menu__logo">
              <img src={logoImg} alt="AlloDoc_Logo" />
            </div>
            <MenuItems
              language={props.language}
              menuItemRu={props.translate.ru.menuItemRu}
              menuItemEn={props.translate.en.menuItemEn}
              translate={props.translate}
            />
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
            {profilBlok ? (
              <MenuProfilItems
                language={props.language}
                menuProfilItemsRu={props.translate.ru.menuProfilItemRu}
                menuProfilItemsEn={props.translate.en.menuProfilItemEn}
                translate={props.translate}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
