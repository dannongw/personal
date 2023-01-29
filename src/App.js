import './App.css';
import Nav from './components/nav.js';
import Intro from "./components/intro";
import Work from "./components/work";
import Footer from "./components/footer";

function App() {
    return (
        <>
            <Nav/>

            <div className="md:mx-12 mx-4 min-[2000px]:mx-36">
                <Intro/>
                <Work/>


            </div>
        </>

    );
}

export default App;
