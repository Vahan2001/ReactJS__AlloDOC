import React, { useContext, useMemo } from "react";
import { TranslateContext } from "../../App";
export default function MenuItems() {
  const t = useContext(TranslateContext);
  const renderItems = useMemo(() => {
    return t.menuItem.map((item, index) => (
      <li key={index}>
        <a href="#">{item.menuItem}</a>
      </li>
    ));
  }, [t]);

  return (
    <div className="menu__item">
      <ul>{renderItems}</ul>
    </div>
  );
}
