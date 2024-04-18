import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function DoctorStatus(props) {
  console.log(props);
  const { t } = useTranslation();
  const status = useMemo(() => {
    if (props.status === 786) {
      return <p>{t("scheduled")}</p>;
    }
    if (props.status === 785) {
      return <p className="status__past">{t("past")}</p>;
    }
    if (props.status === 855 || props.status === 788) {
      return <p className="status__canceled">{t("canceled")}</p>;
    }
  }, [props.status, t]);
  return status;
}
