import './App.css'
import {Header} from "./site/components/header/Header.tsx";
import {Body} from "./site/components/body/Body.tsx";
import {Footer} from "./site/components/footer/Footer.tsx";

function App() {


    return (
        <div className={"App"}>
            <Header title={"Header_Props"}/>
            <Body titleForBody={"Body_Props"}/>
            <Footer titleForFooter={"Footer_Props"}/>
        </div>
    )
}

export default App
