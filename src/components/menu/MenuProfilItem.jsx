import React, { useContext, useMemo } from "react";
import { TranslateContext } from "../../App";
import { Link } from "react-router-dom";
export default function MenuProfilItems() {
  const t = useContext(TranslateContext);
  const renderItems = useMemo(() => {
    return t.menuProfilItems.map((item, index) => (
      <li key={index}>
        <div className="profil__item">
          <img src={item.img} alt="" />
          {item.menuProfilitem === t.menuProfilItems[0].menuProfilitem ? (
            <Link to={"/mynotes"}>{item.menuProfilitem}</Link>
          ) : item.menuProfilitem === t.menuProfilItems[1].menuProfilitem ? (
            <Link to={"/balance"}>{item.menuProfilitem}</Link>
          ) : (
            <a href="#">{item.menuProfilitem}</a>
          )}
        </div>
      </li>
    ));
  }, [t]);

  return (
    <div className="menu__user-profile">
      <ul>{renderItems}</ul>
    </div>
  );
}
