import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function MenuProfilItems() {
  const { t } = useTranslation();

  const renderItems = t("menuProfilItems", { returnObjects: true }).map(
    (item, index) => (
      <li key={index}>
        <div className="profil__item">
          <img
            src={require(`../../images/${item.img}`)}
            alt="menuProfilImage"
          />
          <Link to={item.link}>{item.menuProfilitem}</Link>
        </div>
      </li>
    )
  );

  return (
    <div className="menu__user-profile">
      <ul>{renderItems}</ul>
    </div>
  );
}
