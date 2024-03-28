import React, { useCallback } from "react";

export default function MenuProfilItems(props) {
  const renderItems = useCallback(() => {
    if (props.language === props.translate.ru) {
      return props.menuProfilItemsRu.map((item, index) => (
        <li key={index}>
          <div className="profil__item">
            <img src={item.img} alt="" />
            <a href="#">{item.menuProfilitem}</a>
          </div>
        </li>
      ));
    } else {
      return props.menuProfilItemsEn.map((item, index) => (
        <li key={index}>
          <div className="profil__item">
            <img src={item.img} alt="" />
            <a href="#">{item.menuProfilitem}</a>
          </div>
        </li>
      ));
    }
  }, [
    props.language,
    props.translate.ru,
    props.menuProfilItemsRu,
    props.menuProfilItemsEn,
  ]);

  return (
    <div className="menu__user-profile">
      <ul>{renderItems()}</ul>
    </div>
  );
}
