import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function MenuItems() {
  const { t } = useTranslation();

  const renderItems = t("menuItem", { returnObjects: true }).map(
    (item, index) => (
      <li key={index}>
        <Link to={item.link}>{item.menuItem}</Link>
      </li>
    )
  );

  return (
    <div className="menu__item">
      <ul>{renderItems}</ul>
    </div>
  );
}
