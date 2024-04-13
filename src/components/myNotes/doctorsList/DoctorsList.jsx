import calendarImg from "../../../images/calendar.png";
import clockImg from "../../../images/clock.png";
import Doctor from "./doctor/Doctor";
import { useMemo } from "react";
import DoctorStatus from "./doctor/doctorStatus/DoctorStatus";
import { useTranslation } from "react-i18next";
export default function DoctorsList(props) {
  const { t } = useTranslation();

  const filterDoctors = t("doctors", { returnObjects: true }).filter(
    (doctor) => doctor.status === props.filter
  );

  const renderItems = useMemo(() => {
    return filterDoctors.map((item, index) => {
      return (
        <div className="doctors" key={index}>
          <div className="doctors__time">
            <div className="doctors__time-flex">
              <img src={calendarImg} alt="" />
              <p>{item.day} </p>
            </div>
            <div className="doctors__time-flex">
              <img src={clockImg} alt="" />
              <p>{item.hour}</p>
            </div>
            <div className="doctors__time-flex">
              <img src={item.connectionImg} alt="" />
              <p>{item.connection}</p>
            </div>
            <div className="doctors__time-status">
              <DoctorStatus status={item.status} />
            </div>
          </div>
          <Doctor item={item} />
        </div>
      );
    });
  }, [filterDoctors]);

  return renderItems;
}
