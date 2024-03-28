import { useContext } from "react";
import { TranslateContext } from "../../pages/Home/Home";
import signUpDocImg from "../../Images/signUpDoc.png";
export default function SignUpDoctor() {
  const t = useContext(TranslateContext);
  return (
    <section className="signup">
      <div className="container">
        <div className="signup__wrapper">
          <div className="signup__image">
            <img src={signUpDocImg} alt="doctor" />
          </div>
          <div className="signup__text">
            <div className="signup__title">
              <h2>{t.signUpTitle}</h2>
            </div>
            <div className="signup__desc">
              <p>{t.signUpDesc}</p>
              <ul>
                <li>{t.signUpList1}</li>
                <li>{t.signUpList2}</li>
                <li>{t.signUpList3}</li>
              </ul>
            </div>
            <div className="signup__btn">
              <a href="#">{t.signUpBtn}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
