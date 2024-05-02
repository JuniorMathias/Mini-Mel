import "./../../styles/index.css"
import Header from "../../components/Header";
import Banner from "../../components/Banner"
import MessageList from "../../components/MessageList";
import RoupasDestaque from "../../components/RoupasDestaque";
import Modelos from "../../components/Modelos";
import Footer from "../../components/Footer";

function Home(){
  return(
    <>
        <Header />
        <Banner />
        <MessageList />
        <RoupasDestaque />
        <Modelos />
        <Footer />
    </>
  )
}


export default Home;