import Header from "../../components/header/Header";
import SignUpDoctor from "../../components/signUpDoctor/SignUpDoctor";
import MyNotes from "../../components/myNotes/MyNotes";

export default function Home() {
  return (
    <div>
      <Header />
      <SignUpDoctor />
      <MyNotes />
    </div>
  );
}
