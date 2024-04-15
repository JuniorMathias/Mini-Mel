import "./../../styles/index.css"
import Header from "../../components/Header";
import Banner from "../../components/Banner"
import MessageList from "../../components/MessageList";

function Home(){
  return(
    <>
        <Header />
        <Banner />
        <MessageList />
    </>
  )
}


export default Home;