import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import priceImg from "../../images/price.png";
import kalendarImg from "../../images/kalendar.png";
import educationImg from "../../images/education.png";
import specializesImg from "../../images/specializes.png";
import additionallyImg from "../../images/additionally.png";
import { useTranslation } from "react-i18next";
import doctorsProfilAPI from "../../services/api/DoctorsProfilAPI";
import { useDispatch, useSelector } from "react-redux";
import { UserSelector } from "../../store/selectors";
import { UserAction } from "../../store/actions";
import i18n from "../../services/i18n";

function stripHtmlTags(html) {
  return html?.replace(/<[^>]*>?/gm, "");
}
export default function DoctorsProfile() {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const { id } = useParams();
  const doctorsP = useSelector(UserSelector.doctorsProfilSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    doctorsProfilAPI
      .get(`/${id}/?role=doctor`)
      .then((res) => {
        dispatch(UserAction.setDoctorsProfile(res.data));
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      })
      .finally(() => setLoading(false));
  }, [id, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!loading && !doctorsP) {
    return <Navigate to={"/404"} />;
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="doctors__profile">
      <div className="doctor__profile-header-bc">
        <div className="container">
          <div className="doctors__profile-block">
            <div className="doctor__profil-block-menu">
              <a href="#">{t("doctorsText")} &#62;</a>
              <a href="#">
                {i18n.language === "ru"
                  ? doctorsP?.user_categories[0].category.title.ru
                  : doctorsP?.user_categories[0].category.title.ro}
                &#62;
              </a>
              <a href="#">{t("physicianProfile")} &#62;</a>
            </div>
            <div className="doctor__profil-block-header">
              <div className="profil__bl-header-img">
                <img src={doctorsP?.profile_image} alt="Doctors img" />
              </div>
              <div className="profil__bl-header-name">
                <h3>
                  {doctorsP?.first_name} {doctorsP?.last_name}
                </h3>
                <p>
                  {i18n.language === "ru"
                    ? doctorsP?.user_categories[0].category.description.ru
                    : doctorsP?.user_categories[0].category.description.ro}
                </p>
                <p>
                  {new Date().getFullYear() -
                    doctorsP?.doctor_details.excperience_start_year}
                  {t("experience")}
                </p>
              </div>
              <div className="profil__bl-header-price">
                <p>
                  {doctorsP?.doctor_details.price}
                  <img src={priceImg} alt="RUB" /> {t("priceText")}
                </p>
                <p>
                  {doctorsP?.doctor_details.consultation_duration}
                  {t("timeText")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="doctor__profil-block-desc">
        <div className="container">
          <div className="doctor__profil-block-desc-bl">
            <img src={kalendarImg} alt="" />
            <h3>{t("nextEntry")}</h3>
            <p>{doctorsP?.near_date}</p>
          </div>
          <div className="doctor__profil-block-desc-bl">
            <img src={educationImg} alt="" />
            <h3>{t("education")}</h3>
            <p>{stripHtmlTags(doctorsP?.doctor_details.education)}</p>
          </div>
          <div className="doctor__profil-block-desc-bl">
            <img src={specializesImg} alt="" />
            <h3>{t("specializes")}</h3>
            <p>
              {i18n.language === "ru"
                ? stripHtmlTags(
                    doctorsP?.user_categories[0].category.full_description.ru
                  )
                : doctorsP?.user_categories[0].category.full_description.ro}
            </p>
          </div>
          <div className="doctor__profil-block-desc-bl">
            <img src={additionallyImg} alt="" />
            <h3>{t("additionally")}</h3>
            <p>{doctorsP?.city}</p>
            <p>code:{doctorsP?.country_code.code}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
