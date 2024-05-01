import myNotesStyles from "./myNotes.module.css";
import MyNotesStatus from "./myNotesStatus/MyNotesStatus";
import { useTranslation } from "react-i18next";
export default function MyNotes() {
  const { t } = useTranslation();
  return (
    <div className={myNotesStyles.my__notes}>
      <div className="container">
        <div className={myNotesStyles.my__notes__title}>
          <h2>{t("myNotesTitle")}</h2>
        </div>
        <MyNotesStatus />
      </div>
    </div>
  );
}
