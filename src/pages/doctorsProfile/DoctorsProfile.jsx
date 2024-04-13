import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import priceImg from "../../images/price.png";
import kalendarImg from "../../images/kalendar.png";
import educationImg from "../../images/education.png";
import specializesImg from "../../images/specializes.png";
import additionallyImg from "../../images/additionally.png";
import { useTranslation } from "react-i18next";

export default function DoctorsProfile() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const filterDoctorsId = t("doctors", { returnObjects: true }).find(
    (doctor) => doctor.id === +id
  );

  if (!filterDoctorsId) {
    return <Navigate to={"/404"} />;
  }

  return (
    <div className="doctors__profile">
      <div className="doctor__profile-header-bc">
        <div className="container">
          <div className="doctors__profile-block">
            <div className="doctor__profil-block-menu">
              <a href="#">{t("doctorsText")} &#62;</a>
              <a href="#">{filterDoctorsId.profession} &#62;</a>
              <a href="#">{t("physicianProfile")} &#62;</a>
            </div>
            <div className="doctor__profil-block-header">
              <div className="profil__bl-header-img">
                <img
                  src={require(`../../images/${filterDoctorsId.doctorsImg}`)}
                  alt="Doctors img"
                />
              </div>
              <div className="profil__bl-header-name">
                <h3>{filterDoctorsId.name}</h3>
                <p>{filterDoctorsId.profession}</p>
                <p>{filterDoctorsId.experience}</p>
              </div>
              <div className="profil__bl-header-price">
                <p>
                  {filterDoctorsId.price1} <img src={priceImg} alt="RUB" />
                  {filterDoctorsId.price2}
                </p>
                <p>{filterDoctorsId.time}</p>
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
            <p>{filterDoctorsId.day}</p>
          </div>
          <div className="doctor__profil-block-desc-bl">
            <img src={educationImg} alt="" />
            <h3>{t("education")}</h3>
            <p>{filterDoctorsId.education1}</p>
            <p>{filterDoctorsId.education2}</p>
          </div>
          <div className="doctor__profil-block-desc-bl">
            <img src={specializesImg} alt="" />
            <h3>{t("specializes")}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              aliquam esse fugiat vero dignissimos id, dolorum quasi nisi
              impedit adipisci? Veritatis saepe rerum cum eos quia ducimus nemo
              voluptas aspernatur. Aperiam aliquid veritatis tempore, sint
              quidem rem velit vitae vel aut corporis soluta itaque voluptate
              iure consectetur non necessitatibus totam.
            </p>
          </div>
          <div className="doctor__profil-block-desc-bl">
            <img src={additionallyImg} alt="" />
            <h3>{t("additionally")}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              aliquam esse fugiat vero dignissimos id, dolorum quasi nisi
              impedit adipisci? Veritatis saepe rerum cum eos quia ducimus nemo
              voluptas aspernatur. Aperiam aliquid veritatis tempore, sint
              quidem rem velit vitae vel aut corporis soluta itaque voluptate
              iure consectetur non necessitatibus totam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
