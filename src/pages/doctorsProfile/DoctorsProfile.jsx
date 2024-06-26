import doctorProfileStyles from "./doctorProfile.module.css";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import priceImg from "../../images/price.png";
import calendarImg from "../../images/kalendar.png";
import educationImg from "../../images/education.png";
import specializesImg from "../../images/specializes.png";
import additionallyImg from "../../images/additionally.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { DoctorProfileSelectors } from "../../store/selectors";
import i18n from "../../services/i18n";
import { DoctorProfileActions } from "../../store/actions";

function stripHtmlTags(html) {
  return html?.replace(/<[^>]*>?/gm, "");
}
export default function DoctorsProfile() {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    DoctorProfileSelectors.doctorProfile
  );
  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(DoctorProfileActions.get(id));
  }, [dispatch]);

  if (error) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return (
      <div className="container">
        <div className={doctorProfileStyles.loading}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={doctorProfileStyles.doctor__profile}>
      <div className={doctorProfileStyles.doctor__profile__header__bc}>
        <div className="container">
          <div className={doctorProfileStyles.doctor__profile__block}>
            <div className={doctorProfileStyles.doctor__profil__block__menu}>
              <a href="#">{t("doctorsText")} &#62;</a>
              <a href="#">
                {i18n.language === "ru"
                  ? data?.user_categories?.[0]?.category.title.ru
                  : data?.user_categories?.[0]?.category.title.ro}
                &#62;
              </a>
              <a href="#">{t("physicianProfile")} &#62;</a>
            </div>
            <div className={doctorProfileStyles.doctor__profil__block__header}>
              <div className={doctorProfileStyles.profil__bl__header__img}>
                <img src={data?.profile_image} alt="Doctors img" />
              </div>
              <div className={doctorProfileStyles.profil__bl__header__name}>
                <h3>
                  {data?.first_name} {data?.last_name}
                </h3>
                <p>
                  {i18n.language === "ru"
                    ? data?.user_categories?.[0]?.category.description.ru
                    : data?.user_categories?.[0]?.category.description.ro}
                </p>
                <p>
                  {new Date().getFullYear() -
                    data?.doctor_details?.excperience_start_year}
                  {t("experience")}
                </p>
              </div>
              <div className={doctorProfileStyles.profil__bl__header__price}>
                <p>
                  {data?.doctor_details?.price}
                  <img src={priceImg} alt="RUB" /> {t("priceText")}
                </p>
                <p>
                  {data?.doctor_details?.consultation_duration}
                  {t("timeText")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={doctorProfileStyles.doctor__profil__block__desc}>
        <div className="container">
          <div className={doctorProfileStyles.doctor__profil__block__desc__bl}>
            <img src={calendarImg} alt="calendar" />
            <h3>{t("nextEntry")}</h3>
            <p>{data?.near_date}</p>
          </div>
          <div className={doctorProfileStyles.doctor__profil__block__desc__bl}>
            <img src={educationImg} alt="education" />
            <h3>{t("education")}</h3>
            <p>{stripHtmlTags(data?.doctor_details?.education)}</p>
          </div>
          <div className={doctorProfileStyles.doctor__profil__block__desc__bl}>
            <img src={specializesImg} alt="specializes" />
            <h3>{t("specializes")}</h3>
            <p>
              {i18n.language === "ru"
                ? stripHtmlTags(
                    data?.user_categories?.[0].category?.full_description.ru
                  )
                : stripHtmlTags(
                    data?.user_categories?.[0].category?.full_description.ro
                  )}
            </p>
          </div>
          <div className={doctorProfileStyles.doctor__profil__block__desc__bl}>
            <img src={additionallyImg} alt="" />
            <h3>{t("additionally")}</h3>
            <p>{data?.city}</p>
            <p>code:{data?.country_code?.code}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
