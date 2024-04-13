import signUpDocImg from "../../images/signUpDoc.png";
import { useTranslation } from "react-i18next";
export default function SignUpDoctor() {
  const { t } = useTranslation();
  return (
    <section className="signup">
      <div className="container">
        <div className="signup__wrapper">
          <div className="signup__image">
            <img src={signUpDocImg} alt="doctor" />
          </div>
          <div className="signup__text">
            <div className="signup__title">
              <h2>{t("signUpTitle")}</h2>
            </div>
            <div className="signup__desc">
              <p>{t("signUpDesc")}</p>
              <ul>
                <li>{t("signUpList1")}</li>
                <li>{t("signUpList2")}</li>
                <li>{t("signUpList3")}</li>
              </ul>
            </div>
            <div className="signup__btn">
              <a href="#">{t("signUpBtn")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
