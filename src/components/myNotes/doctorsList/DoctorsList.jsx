import calendarImg from "../../../images/calendar.png";
import clockImg from "../../../images/clock.png";
import connectionImg from "../../../images/conversation.png";
import Doctor from "./doctor/Doctor";
import { useMemo } from "react";
import DoctorStatus from "./doctor/doctorStatus/DoctorStatus";
import { useTranslation } from "react-i18next";
export default function DoctorsList(props) {
  const { t } = useTranslation();

  const renderItems = useMemo(() => {
    return props.doctors.map((item, index) => {
      console.log(item);
      return (
        <div className="doctors" key={index}>
          <div className="doctors__time">
            <div className="doctors__time-flex">
              <img src={calendarImg} alt="calendar_img" />
              <p>{item.date_of_birth} </p>
            </div>
            <div className="doctors__time-flex">
              <img src={clockImg} alt="clock_img" />
              <p>{t("hour")}</p>
            </div>
            <div className="doctors__time-flex">
              <img src={connectionImg} alt="connection_img" />
              <p>{t("connection")}</p>
            </div>
            <div className="doctors__time-status">
              <DoctorStatus status={item.id} />
            </div>
          </div>
          <Doctor item={item} />
        </div>
      );
    });
  }, [props]);

  return renderItems;
}
