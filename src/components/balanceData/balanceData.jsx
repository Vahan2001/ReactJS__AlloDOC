import { useMemo } from "react";
import { useTranslation } from "react-i18next";
export default function BalanceData(props) {
  const { t } = useTranslation();

  const filterBalanceData = t("balanceData", { returnObjects: true }).filter(
    (doctorsItem) => {
      return doctorsItem.status === props.filterBalance
        ? doctorsItem
        : props.filterBalance === "За все время" ||
          props.filterBalance === "In all that time"
        ? t("balanceData")
        : null;
    }
  );

  const renderBalanceData = useMemo(() => {
    return filterBalanceData.map((item, index) => {
      return (
        <div className="balance__data" key={index}>
          <div className="balance__data-img">
            <img src={require(`../../images/${item.img}`)} alt="cart" />
          </div>
          <div className="balance__data-time">
            <p>{item.time}</p>
          </div>
          <div className="balance__data-title">
            <p>{item.title}</p>
          </div>
          <div className="balance__data-price">
            <p
              style={
                item.title === "Пополнение" || item.title === "Replenishment"
                  ? { color: "rgb(33, 150, 83)" }
                  : { color: "rgb(235, 87, 87)" }
              }
            >
              {item.price} ₽
            </p>
          </div>
        </div>
      );
    });
  }, [filterBalanceData]);

  return renderBalanceData;
}
