import "./../../styles/index.css"
import Header from "../../components/Header";
import Banner from "../../components/Banner"
import MessageList from "../../components/MessageList";
import RoupasDestaque from "../../components/RoupasDestaque";

function Home(){
  return(
    <>
        <Header />
        <Banner />
        <MessageList />
        <RoupasDestaque />
    </>
  )
}


export default Home;