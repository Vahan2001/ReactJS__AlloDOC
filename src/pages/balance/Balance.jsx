import balanceStyles from "./balance.module.css";
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
    <div className={balanceStyles.balance}>
      <div className="container">
        <div className={balanceStyles.balance__wrapper}>
          <div className={balanceStyles.balance__title}>
            <h2>{t.balanceTitle}</h2>
          </div>
          <div className={balanceStyles.balance__desc}>
            <span>
              {t("balanceMoney")} <img src={imageRUB} alt="RUB" />
            </span>
            <button>{t("balanceBtn")}</button>
          </div>
        </div>
        <div className={balanceStyles.balance__story}>
          <div className={balanceStyles.balance__story__title}>
            <p>{t("balanceStory")}</p>
          </div>
          <div className={balanceStyles.balance__story__desc}>
            <button
              onClick={() => setFilterBalance(t("balanceForToday"))}
              className={
                filterBalance === t("balanceForToday")
                  ? balanceStyles.active
                  : ""
              }
            >
              {t("balanceStoryBtn1")}
            </button>
            <button
              onClick={() => setFilterBalance(t("balancePerMonth"))}
              className={
                filterBalance === t("balancePerMonth")
                  ? balanceStyles.active
                  : ""
              }
            >
              {t("balanceStoryBtn2")}
            </button>
            <button
              onClick={() => setFilterBalance(t("balanceInAll"))}
              className={
                filterBalance === t("balanceInAll") ? balanceStyles.active : ""
              }
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
