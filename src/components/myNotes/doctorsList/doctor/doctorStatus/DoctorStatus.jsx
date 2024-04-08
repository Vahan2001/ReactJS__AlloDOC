import React, { useMemo } from "react";
export default function DoctorStatus(props) {
  const status = useMemo(() => {
    if (props.status === "Запланировано" || props.status === "Scheduled") {
      return <p>{props.status}</p>;
    }
    if (props.status === "Прошедшие" || props.status === "Past") {
      return (
        <p className="status__past">
          {props.status === "Past" ? "Held" : "Состоялась"}
        </p>
      );
    }
    if (props.status === "Отмененные" || props.status === "Canceled") {
      return (
        <p className="status__canceled">
          {props.status === "Canceled" ? "Canceled" : "Отменена"}
        </p>
      );
    }
  });
  return status;
}
