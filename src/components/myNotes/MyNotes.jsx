import MyNotesStatus from "./myNotesStatus/MyNotesStatus";
import { useTranslation } from "react-i18next";
export default function MyNotes() {
  const { t } = useTranslation();
  return (
    <div className="my__notes">
      <div className="container">
        <div className="my__notes-title">
          <h2>{t("myNotesTitle")}</h2>
        </div>
        <MyNotesStatus />
      </div>
    </div>
  );
}
