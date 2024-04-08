import { createContext, useState } from "react";
import Menu from "../../Components/Menu/Menu";
import Header from "../../Components/Header/Header";
import userImg from "../../Images/user.png";
import creditCartImg from "../../Images/credit-card.png";
import helpImg from "../../Images/help.png";
import logoutImg from "../../Images/logout.png";
import SignUpDoctor from "../../Components/SignUpDoctor/SignUpDoctoe";
import MyNotes from "../../Components/Mynotes/MyNotes";
import videoCamImg from "../../Images/video-camera1.png";
import doctorImg from "../../Images/doctors.png";
import doctorImg2 from "../../Images/doctors2.png";
import doctorImg3 from "../../Images/doctors3.png";
import doctorImg4 from "../../Images/doctors4.jpg";
import doctorImg5 from "../../Images/doctors5.jpg";
import doctorImg6 from "../../Images/doctors6.png";
import doctorImg7 from "../../Images/doctors7.png";
import doctorImg8 from "../../Images/doctors8.png";
import doctorImg9 from "../../Images/doctors9.png";
import doctorImg10 from "../../Images/doctors10.png";
import doctorImg11 from "../../Images/doctors11.jpg";

import conversationImg from "../../Images/conversation.png";
import Footer from "../../Components/Footer/Footer";
const translate = {
  ru: {
    menuItemRu: [
      {
        menuItem: "Как пользоваться?",
      },
      {
        menuItem: "Мои записи",
      },
      {
        menuItem: "Записаться к врачу",
      },
    ],
    menuProfilName: "Артем Свиридов",
    menuProfilItemRu: [
      {
        menuProfilitem: "Мой профиль",
        img: userImg,
      },
      {
        menuProfilitem: "Пополнить баланс",
        img: creditCartImg,
      },
      {
        menuProfilitem: "FAQ",
        img: helpImg,
      },
      {
        menuProfilitem: "Выйти",
        img: logoutImg,
      },
    ],
    headerTitle1: `Онлайн консультации`,
    headerTitle2: "от врачей специалистов 24/7",
    headerSubTitle1: "Проконсультируйтесь       ",
    headerSubTitle2: "сейчас",
    headerSubTitle3: "или по",
    headerSubTitle4: "предварительной записи",
    headerSubTitle5:
      "со своего компьютера или c помощью нашего приложения, доступного в",
    headerSubTitle6: "App Store",
    headerSubTitle7: "и",
    headerSubTitle8: "Google Play",
    headerBtn1: "Записаться",
    headerBtn2: "Как это работает?",
    signUpTitle: "Записаться к врачу",
    signUpDesc: "Более 1500 врачей и более 50 разных специализаций",
    signUpList1: "Прием в удобное для вас время, без визита в клинику",
    signUpList2: "Врачи с опытом работы более 8 лет",
    signUpList3:
      "Понятно объясним причину недуга и дадим подробную рекомендацию",
    signUpBtn: "Записаться",
    myNotesTitle: "Мои записи",
    scheduled: "Запланировано",
    past: "Прошедшие",
    canceled: "Отмененные",
    doctorsRu: [
      {
        id: 1,
        status: "Запланировано",
        doctorsImg: doctorImg,
        name: "Ольга Никитина",
        profession: "Педиатр",
        experience: "Стаж 15 лет",
        day: "03 Марта 2021",
        hour: "16:00",
        connection: "Видео связь",
        connectionImg: videoCamImg,
        docBtn1: "Посмотреть запись",
        docBtn2: "Посмотреть постановление",
      },
      {
        id: 2,
        status: "Прошедшие",
        doctorsImg: doctorImg2,
        name: "Олимпия Герман",
        profession: "Пневмолог",
        experience: "Стаж 12 лет",
        day: "05 Марта 2021",
        hour: "15:00",
        connection: "Чат",
        connectionImg: conversationImg,
        docBtn1: "Посмотреть запись",
        docBtn2: "Посмотреть постановление",
      },
      {
        id: 3,
        status: "Отмененные",
        doctorsImg: doctorImg3,
        name: "Надежда Коробчан",
        profession: "Онколог",
        experience: "Стаж 14 лет",
        day: "25 Марта 2021",
        hour: "19:00",
        connection: "Видео связь",
        connectionImg: videoCamImg,
        docBtn1: "Посмотреть запись",
        docBtn2: "Посмотреть постановление",
      },
      {
        id: 4,
        status: "Запланировано",
        doctorsImg: doctorImg4,
        name: "Наталия Кодряну",
        profession: "Психолог и Психотерапевт",
        experience: "Стаж 18 лет",
        day: "03 Апреля 2021",
        hour: "11:00",
        connection: "Видео связь",
        connectionImg: videoCamImg,
        docBtn1: "Посмотреть запись",
        docBtn2: "Посмотреть постановление",
      },
      {
        id: 5,
        status: "Прошедшие",
        doctorsImg: doctorImg5,
        name: "Зинаида Сырбу",
        profession: "Акушер-гинеколог",
        experience: "Стаж 10 лет",
        day: "12 Апреля 2021",
        hour: "14:55",
        connection: "Чат",
        connectionImg: conversationImg,
        docBtn1: "Посмотреть запись",
        docBtn2: "Посмотреть постановление",
      },
      {
        id: 6,
        status: "Отмененные",
        doctorsImg: doctorImg6,
        name: "Ирина Трибой",
        profession: "Педиатр",
        experience: "Стаж 20 лет",
        day: "13 Сентября 2022",
        hour: "14:00",
        connection: "Видео связь",
        connectionImg: videoCamImg,
        docBtn1: "Посмотреть запись",
        docBtn2: "Посмотреть постановление",
      },
      {
        id: 7,
        status: "Запланировано",
        doctorsImg: doctorImg7,
        name: "Анжела Селиванова",
        profession: "Терапевт",
        experience: "Стаж 8 лет",
        day: "30 Октября 2022",
        hour: "12:30",
        connection: "Видео связь",
        connectionImg: videoCamImg,
        docBtn1: "Посмотреть запись",
        docBtn2: "Посмотреть постановление",
      },
      {
        id: 8,
        status: "Прошедшие",
        doctorsImg: doctorImg8,
        name: "Елена Васильева",
        profession: "Акушер-гинеколог",
        experience: "Стаж 7 лет",
        day: "05 Марта 2023",
        hour: "09:00",
        connection: "Видео связь",
        connectionImg: conversationImg,
        docBtn1: "Посмотреть запись",
        docBtn2: "Посмотреть постановление",
      },
      {
        id: 9,
        status: "Отмененные",
        doctorsImg: doctorImg9,
        name: "Лилия Сарагова",
        profession: "Кардиолог",
        experience: "Стаж 17 лет",
        day: "11 Августа 2021",
        hour: "11:00",
        connection: "Видео связь",
        connectionImg: videoCamImg,
        docBtn1: "Посмотреть запись",
        docBtn2: "Посмотреть постановление",
      },
      {
        id: 10,
        status: "Запланировано",
        doctorsImg: doctorImg10,
        name: "Людмила Сурацель",
        profession: "Офтальмолог",
        experience: "Стаж 10 лет",
        day: "23 Ноября 2023",
        hour: "23:00",
        connection: "Видео связь",
        connectionImg: videoCamImg,
        docBtn1: "Посмотреть запись",
        docBtn2: "Посмотреть постановление",
      },
      {
        id: 11,
        status: "Прошедшие",
        doctorsImg: doctorImg11,
        name: "Андриан Чириак",
        profession: "Эндокринолог",
        experience: "Стаж 21 лет",
        day: "07 Декабря 2023",
        hour: "15:00",
        connection: "Видео связь",
        connectionImg: conversationImg,
        docBtn1: "Посмотреть запись",
        docBtn2: "Посмотреть постановление",
      },
    ],
    footerDesc1:
      "Онлай- консульации специалистов врачей, то что предлагает данный.",
    footerDesc2:
      "В нашем веб и мобильном приложении вы найдете врачей экспертов, которые окажут вам персонализированную помощь онлайн 24/7",
    footerList1: "Как пользоваться",
    footerList2: "FAQ (ответы на вопросы)",
    footerList3: "Для врачей",
    footerList4: "О сервисе",
    footerList5: "Контакты",
    footerList6: "Пользовательское соглашение",
    footerfeedback1: "allodoc@mail.com",
    footerfeedback2: "г. Москва. ул, Ленина 54, офис 51",
    footerfeedback3: "Пн-Вс с 09:00 до 18:00",
    footerfeedback4: "8 800 555 35 35",
  },
  en: {
    menuItemEn: [
      {
        menuItem: "How to use?",
      },
      {
        menuItem: "My notes",
      },
      {
        menuItem: "To make an appointment with a doctor",
      },
    ],
    menuProfilName: "Artem Sviridov",
    menuProfilItemEn: [
      {
        menuProfilitem: "My Profile",
        img: userImg,
      },
      {
        menuProfilitem: "Top up balance",
        img: creditCartImg,
      },
      {
        menuProfilitem: "FAQ",
        img: helpImg,
      },
      {
        menuProfilitem: "Exit",
        img: logoutImg,
      },
    ],
    headerTitle1: "Online consultations ",
    headerTitle2: "from specialist doctors 24/7",
    headerSubTitle1: "Consult       ",
    headerSubTitle2: "now",
    headerSubTitle3: "or by",
    headerSubTitle4: "appointment",
    headerSubTitle5: "from your computer or through our app available on the",
    headerSubTitle6: "App Store",
    headerSubTitle7: "and",
    headerSubTitle8: "Google Play.",
    headerBtn1: "Sign up",
    headerBtn2: "How it works?",
    signUpTitle: "Make an appointment",
    signUpDesc:
      "More than 1500 doctors and more than 50 different specialties ",
    signUpList1:
      "Appointments at a time that is convenient for you, without coming to the clinic",
    signUpList2: "Doctors with more than 8 years of experience",
    signUpList3:
      "We will explain the cause of the ailment clearly and give a detailed recommendation",
    signUpBtn: "Sign up",
    myNotesTitle: "My notes",
    scheduled: "Scheduled",
    past: "Past",
    canceled: "Canceled",
    doctorsEn: [
      {
        id: 1,
        status: "Scheduled",
        doctorsImg: doctorImg,
        name: "Olga Nikitina",
        profession: "Pediatrician",
        experience: "15 years of experience",
        day: "March 03, 2021.",
        hour: "16:00",
        connection: "Video link",
        connectionImg: videoCamImg,
        docBtn1: "View entry",
        docBtn2: "View the resolution",
      },
      {
        id: 2,
        status: "Past",
        doctorsImg: doctorImg2,
        name: "Olimpia Gherman",
        profession: "Pneumologist",
        experience: "12 years of experience",
        day: "March 05, 2021.",
        hour: "15:00",
        connection: "Chat",
        connectionImg: conversationImg,
        docBtn1: "View entry",
        docBtn2: "View the resolution",
      },
      {
        id: 3,
        status: "Canceled",
        doctorsImg: doctorImg3,
        name: "Nadejda Corobcean",
        profession: "Oncologist",
        experience: "14 years of experience",
        day: "March 25, 2021.",
        hour: "19:00",
        connection: "Video link",
        connectionImg: videoCamImg,
        docBtn1: "View entry",
        docBtn2: "View the resolution",
      },
      {
        id: 4,
        status: "Scheduled",
        doctorsImg: doctorImg4,
        name: "Natalia Codreanu",
        profession: "Psychologist and Psychotherapist",
        experience: "18 years of experience",
        day: "April 03, 2021.",
        hour: "11:00",
        connection: "Video link",
        connectionImg: videoCamImg,
        docBtn1: "View entry",
        docBtn2: "View the resolution",
      },
      {
        id: 5,
        status: "Past",
        doctorsImg: doctorImg5,
        name: "Zinaida Sârbu",
        profession: "Obstetrician-gynecologis",
        experience: "10 years of experience",
        day: "April 12, 2021.",
        hour: "14:55",
        connection: "Chat",
        connectionImg: conversationImg,
        docBtn1: "View entry",
        docBtn2: "View the resolution",
      },
      {
        id: 6,
        status: "Canceled",
        doctorsImg: doctorImg6,
        name: "Irina Triboi",
        profession: "Pediatrician",
        experience: "20 years of experience",
        day: "September 13, 2022.",
        hour: "14:00",
        connection: "Video link",
        connectionImg: videoCamImg,
        docBtn1: "View entry",
        docBtn2: "View the resolution",
      },
      {
        id: 7,
        status: "Scheduled",
        doctorsImg: doctorImg7,
        name: "Angela Selivanov",
        profession: "Therapist",
        experience: "8 years of experience",
        day: "October 30, 2022.",
        hour: "12:30",
        connection: "Video link",
        connectionImg: videoCamImg,
        docBtn1: "View entry",
        docBtn2: "View the resolution",
      },
      {
        id: 8,
        status: "Past",
        doctorsImg: doctorImg8,
        name: "Elena Vasilieva",
        profession: "Obstetrician-gynecologis",
        experience: "7 years of experience",
        day: "March 05, 2023.",
        hour: "09:00",
        connection: "Video link",
        connectionImg: conversationImg,
        docBtn1: "View entry",
        docBtn2: "View the resolution",
      },
      {
        id: 9,
        status: "Canceled",
        doctorsImg: doctorImg9,
        name: "Lilia Șaragov",
        profession: "Cardiologist",
        experience: "17 years of experience",
        day: "Аugust 11, 2021.",
        hour: "11:00",
        connection: "Video link",
        connectionImg: videoCamImg,
        docBtn1: "View entry",
        docBtn2: "View the resolution",
      },
      {
        id: 10,
        status: "Scheduled",
        doctorsImg: doctorImg10,
        name: "Ludmila Surățel",
        profession: "Ophthalmologist",
        experience: "10 years of experience",
        day: "November 23, 2023.",
        hour: "23:00",
        connection: "Video link",
        connectionImg: videoCamImg,
        docBtn1: "View entry",
        docBtn2: "View the resolution",
      },
      {
        id: 11,
        status: "Past",
        doctorsImg: doctorImg11,
        name: "Andrian Chiriac",
        profession: "Endocrinologist",
        experience: "21 years of experience",
        day: "December 07, 2023.",
        hour: "15:00",
        connection: "Video link",
        connectionImg: conversationImg,
        docBtn1: "View entry",
        docBtn2: "View the resolution",
      },
    ],
    footerDesc1:
      "Online consultations with specialist doctors, what this one offers.",
    footerDesc2:
      "In our web and mobile app, you'll find expert doctors who will provide you with personalized help online 24/7",
    footerList1: "How to use",
    footerList2: "FAQ (answers to questions)",
    footerList3: "For doctors",
    footerList4: "About the service",
    footerList5: "Contacts",
    footerList6: "User Agreement",
    footerfeedback1: "allodoc@mail.com",
    footerfeedback2: "54, Lenina St., Moscow, office 51",
    footerfeedback3: "Mon-Fri from 09:00 to 18:00",
    footerfeedback4: "8 800 555 35 35",
  },
};

export const TranslateContext = createContext();

export default function Home() {
  const [language, setLanguage] = useState(translate.ru);
  return (
    <TranslateContext.Provider value={language}>
      <Menu
        setLanguage={setLanguage}
        language={language}
        translate={translate}
      />
      <Header setLanguage={setLanguage} />
      <SignUpDoctor />
      <MyNotes
        translate={translate}
        setLanguage={setLanguage}
        language={language}
      />
      <Footer setLanguage={setLanguage} />
    </TranslateContext.Provider>
  );
}
