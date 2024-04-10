import React, { useContext, useMemo } from "react";
import { TranslateContext } from "../../App";
import { Link } from "react-router-dom";
export default function MenuItems() {
  const t = useContext(TranslateContext);
  const renderItems = useMemo(() => {
    return t.menuItem.map((item, index) => (
      <li key={index}>
        {item.menuItem === t.menuItem[0].menuItem ? (
          <Link to={"/json"}>{item.menuItem}</Link>
        ) : (
          <a href="#">{item.menuItem}</a>
        )}
      </li>
    ));
  }, [t]);

  return (
    <div className="menu__item">
      <ul>{renderItems}</ul>
    </div>
  );
}
