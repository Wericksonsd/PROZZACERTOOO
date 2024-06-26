import styles from "./page.module.css";
import Header from "./components/_Header/header";
import Chat from "./components/_Chat/chat";
import Footer from "./components/_Footer/footer";
import Message from "./components/_Message/[slug]/page";
import Config from "./components/_Config/config";
import ModalProfile from "./components/_ModalProfile/modalprofile";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <ModalProfile/>
      <div className={styles.main}>
        <Chat/>
        <Message/>
        <Config/>
      </div>
      <Footer/>
    </div>
  );
}
