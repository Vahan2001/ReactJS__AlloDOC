import menuStyles from "./menu.module.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function MenuItems() {
  const { t } = useTranslation();

  return (
    <div className={menuStyles.menu__item}>
      <ul>
        <li>
          <Link to={t("menuItems.link1")}>{t("menuItems.menuItem1")}</Link>
        </li>
        <li>
          <Link to={t("menuItems.link2")}>{t("menuItems.menuItem2")}</Link>
        </li>
        <li>
          <Link to={t("menuItems.link3")}>{t("menuItems.menuItem3")}</Link>
        </li>
      </ul>
    </div>
  );
}
