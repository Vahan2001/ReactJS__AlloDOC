import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function DoctorStatus(props) {
  const { t } = useTranslation();
  const status = useMemo(() => {
    if (props.status === t("scheduled")) {
      return <p>{props.status}</p>;
    }
    if (props.status === t("past")) {
      return (
        <p className="status__past">
          {props.status === "Past" ? "Held" : "Состоялась"}
        </p>
      );
    }
    if (props.status === t("canceled")) {
      return (
        <p className="status__canceled">
          {props.status === "Canceled" ? "Canceled" : "Отменена"}
        </p>
      );
    }
  }, [props.status, t]);
  return status;
}
