import RoutesApp from "./routes";
import GlobalStyle from './styles/global'
import "./styles/index.css"

export default function App(){
  return(
    <>
      <GlobalStyle />
      <div className="App">
        <RoutesApp/>
      </div>
    </>
  );
}
