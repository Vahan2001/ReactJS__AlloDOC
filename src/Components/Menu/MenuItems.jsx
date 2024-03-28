import React, { useCallback } from "react";

export default function MenuItems(props) {
  const renderItems = useCallback(() => {
    if (props.language === props.translate.ru) {
      return props.menuItemRu.map((item, index) => (
        <li key={index}>
          <a href="#">{item.menuItem}</a>
        </li>
      ));
    } else {
      return props.menuItemEn.map((item, index) => (
        <li key={index}>
          <a href="#">{item.menuItem}</a>
        </li>
      ));
    }
  }, [props.language, props.translate.ru, props.menuItemRu, props.menuItemEn]);

  return (
    <div className="menu__item">
      <ul>{renderItems()}</ul>
    </div>
  );
}
