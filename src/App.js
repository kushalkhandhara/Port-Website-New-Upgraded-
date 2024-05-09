import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import Eduction from "./pages/Education/Eduction";
import About from "./pages/Home/About/About";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
// Scroll to Top
import ScrollToTop from "react-scroll-to-top";
// Animation
import Zoom from 'react-reveal/Zoom'
// Responsive Mobile Web View
import MobileNav from "./components/MobileNav/MobileNav";
// For Toast message 
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ScrollToTop smooth color="#007bff" />
    <ToastContainer />
    <MobileNav />
      <Layout/>  
      <div className="container">
        <About/>
        <Eduction/>
        <Techstack/>
        <Projects/>
        <WorkExp/>
        <Contact/>
      </div>
      <Zoom>
      <div className="footer mt-4 pt-4 pb-4" style={{backgroundColor:'lightgray'}}>
        <h4 className="text-center" style={{fontWeight:'bold'}}>Made By Kushal Nilang Khandhara &copy; 2023</h4>
      </div>
      </Zoom>
      <ScrollToTop smooth style={{backgroundColor:'orange'}} color="white"/>
    </>
  );
}

export default App;
