import Header from "./Components/Header";
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import FreeTraining from "./Pages/FreeTraining";


function App() {
  return (
    <div className="App bg-pink-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="free-training" element={<FreeTraining/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
