import { useEffect, useState } from "react";
import imageRUB from "../../images/imageRUB.png";
import BalanceData from "../../components/balanceData/balanceData";
import { useTranslation } from "react-i18next";
export default function Balance() {
  const { t } = useTranslation();
  const [filterBalance, setFilterBalance] = useState(t("balanceForToday"));
  useEffect(() => {
    setFilterBalance(t("balanceForToday"));
  }, [t]);
  return (
    <div className="balance">
      <div className="container">
        <div className="balance__wrapper">
          <div className="balance__title">
            <h2>{t.balanceTitle}</h2>
          </div>
          <div className="balance__desc">
            <span>
              {t("balanceMoney")} <img src={imageRUB} alt="RUB" />
            </span>
            <button>{t("balanceBtn")}</button>
          </div>
        </div>
        <div className="balance__story">
          <div className="balance__story-title">
            <p>{t("balanceStory")}</p>
          </div>
          <div className="balance__story-desc">
            <button
              onClick={() => setFilterBalance(t("balanceForToday"))}
              className={filterBalance === t("balanceForToday") ? "active" : ""}
            >
              {t("balanceStoryBtn1")}
            </button>
            <button
              onClick={() => setFilterBalance(t("balancePerMonth"))}
              className={filterBalance === t("balancePerMonth") ? "active" : ""}
            >
              {t("balanceStoryBtn2")}
            </button>
            <button
              onClick={() => setFilterBalance(t("balanceInAll"))}
              className={filterBalance === t("balanceInAll") ? "active" : ""}
            >
              {t("balanceStoryBtn3")}
            </button>
          </div>
          <BalanceData filterBalance={filterBalance} />
        </div>
      </div>
    </div>
  );
}
