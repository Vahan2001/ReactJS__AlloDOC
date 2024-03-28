import calendarImg from "../../../Images/calendar.png";
import clockImg from "../../../Images/clock.png";
import Doctor from "./Doctor/Doctor";
import { useCallback, useMemo } from "react";
import DoctorStatus from "./Doctor/DoctorStatus/DoctorStatus";
export default function DoctorsList(props) {
  const filterDoctors = useMemo(() => {
    if (props.language === props.translate.ru) {
      return props.translate.ru.doctorsRu.filter(
        (doctor) => doctor.status === props.filter
      );
    } else {
      return props.translate.en.doctorsEn.filter(
        (doctor) => doctor.status === props.filter
      );
    }
  }, [props.language, props.translate, props.filter]);
  const renderItems = useCallback(() => {
    if (props.language === props.translate.ru) {
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
            <Doctor
              index={index}
              filterDoctors={filterDoctors}
              language={props.language}
            />
          </div>
        );
      });
    } else {
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
            <Doctor
              index={index}
              filterDoctors={filterDoctors}
              language={props.language}
            />
          </div>
        );
      });
    }
  }, [
    props.language,
    props.translate.ru,
    props.menuItemRu,
    props.menuItemEn,
    filterDoctors,
    props.setLanguage,
  ]);

  return renderItems();
}
