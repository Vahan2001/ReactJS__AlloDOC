import myNotesStyles from "../myNotes.module.css";
import calendarImg from "../../../images/calendar.png";
import clockImg from "../../../images/clock.png";
import connectionImg from "../../../images/conversation.png";
import Doctor from "./doctor/Doctor";
import { useMemo } from "react";
import DoctorStatus from "./doctor/doctorStatus/DoctorStatus";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { DoctorsListSelectors } from "../../../store/selectors";

export default function DoctorsList() {
  const { t } = useTranslation();
  const { list, loading, error } = useSelector(
    DoctorsListSelectors.doctorsList
  );

  const renderItems = useMemo(() => {
    return list.map((item, index) => {
      return (
        <div className={myNotesStyles.doctors} key={index}>
          <div className={myNotesStyles.doctors__time}>
            <div className={myNotesStyles.doctors__time__flex}>
              <img src={calendarImg} alt="calendar_img" />
              <p>{item.date_of_birth} </p>
            </div>
            <div className={myNotesStyles.doctors__time__flex}>
              <img src={clockImg} alt="clock_img" />
              <p>{t("hour")}</p>
            </div>
            <div className={myNotesStyles.doctors__time__flex}>
              <img src={connectionImg} alt="connection_img" />
              <p>{t("connection")}</p>
            </div>
            <div className={myNotesStyles.doctors__time__status}>
              <DoctorStatus status={item.id} />
            </div>
          </div>
          <Doctor item={item} />
        </div>
      );
    });
  }, [list]);
  if (loading) {
    return (
      <div className="container">
        <div className={myNotesStyles.loading}>
          <p>Loading...</p>
        </div>
      </div>
    );
  } else {
    return renderItems;
  }
}
