import myNotesStyles from "../../myNotes.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../../../services/i18n";
export default function Doctor(props) {
  const { t } = useTranslation();
  return (
    <div className={myNotesStyles.doctor__item}>
      <div className={myNotesStyles.doctor__desc}>
        <div className={myNotesStyles.doctor__img}>
          <img src={props.item.profile_image} alt="" />
        </div>
        <div className={myNotesStyles.doctor__name}>
          <h3>
            {props.item.first_name} {props.item.last_name}
          </h3>
          <p>
            {i18n.language === "ru"
              ? props.item.user_categories[0].category.title.ru
              : props.item.user_categories[0].category.title.ro}
          </p>
          <b>
            {new Date().getFullYear() - props.item.excperience_start_year}
            {t("experience")}
          </b>
        </div>
        <div className={myNotesStyles.doctor__btn}>
          <Link
            to={`/mynotes/doctorsprofile/${props.item.id}`}
            className={myNotesStyles.link__btn}
          >
            {t("docBtn1")}
          </Link>
          <button>{t("docBtn2")}</button>
        </div>
      </div>
    </div>
  );
}
