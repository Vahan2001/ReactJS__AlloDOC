import signUpDoctorStyles from "./signUpDoctor.module.css";
import signUpDocImg from "../../images/signUpDoc.png";
import { useTranslation } from "react-i18next";
export default function SignUpDoctor() {
  const { t } = useTranslation();
  return (
    <section className={signUpDoctorStyles.signup}>
      <div className="container">
        <div className={signUpDoctorStyles.signup__wrapper}>
          <div className={signUpDoctorStyles.signup__img}>
            <img src={signUpDocImg} alt="doctor" />
          </div>
          <div className={signUpDoctorStyles.signup__text}>
            <div className={signUpDoctorStyles.signup__title}>
              <h2>{t("signUpTitle")}</h2>
            </div>
            <div className={signUpDoctorStyles.signup__desc}>
              <p>{t("signUpDesc")}</p>
              <ul>
                <li>{t("signUpList1")}</li>
                <li>{t("signUpList2")}</li>
                <li>{t("signUpList3")}</li>
              </ul>
            </div>
            <div className={signUpDoctorStyles.signup__btn}>
              <a href="#">{t("signUpBtn")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
