import "./../../styles/index.css"
import Header from "../../components/Header";
import Banner from "../../components/Banner"
import MessageList from "../../components/MessageList";
import RoupasDestaque from "../../components/RoupasDestaque";
import Modelos from "../../components/Modelos";

function Home(){
  return(
    <>
        <Header />
        <Banner />
        <MessageList />
        <RoupasDestaque />
        <Modelos />
    </>
  )
}


export default Home;