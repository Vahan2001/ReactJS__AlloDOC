import { useEffect, useState } from "react";
import DoctorsList from "../DoctorsList/DoctorsList";

export default function MyNotesStatus(props) {
  const [filter, setFilter] = useState("Запланировано");
  useEffect(() => {
    setFilter(
      props.language === props.translate.ru ? "Запланировано" : "Scheduled"
    );
  }, [props.language, props.translate.ru]);
  if (props.language === props.translate.ru) {
    return (
      <div className="my__notes-status">
        <div className="my__status-btns">
          <button
            onClick={() => setFilter("Запланировано")}
            className={filter === "Запланировано" ? "active" : ""}
          >
            {props.translate.ru.scheduled}
          </button>
          <button
            onClick={() => setFilter("Прошедшие")}
            className={filter === "Прошедшие" ? "active" : ""}
          >
            {props.translate.ru.past}
          </button>
          <button
            onClick={() => setFilter("Отмененные")}
            className={filter === "Отмененные" ? "active" : ""}
          >
            {props.translate.ru.canceled}
          </button>
        </div>
        <DoctorsList
          translate={props.translate}
          setLanguage={props.setLanguage}
          language={props.language}
          filter={filter}
        />
      </div>
    );
  } else {
    return (
      <div className="my__notes-status">
        <div className="my__status-btns">
          <button
            onClick={() => setFilter("Scheduled")}
            className={filter === "Scheduled" ? "active" : ""}
          >
            {props.translate.en.scheduled}
          </button>
          <button
            onClick={() => setFilter("Past")}
            className={filter === "Past" ? "active" : ""}
          >
            {props.translate.en.past}
          </button>
          <button
            onClick={() => setFilter("Canceled")}
            className={filter === "Canceled" ? "active" : ""}
          >
            {props.translate.en.canceled}
          </button>
        </div>
        <DoctorsList
          translate={props.translate}
          setLanguage={props.setLanguage}
          language={props.language}
          filter={filter}
        />
      </div>
    );
  }
}
