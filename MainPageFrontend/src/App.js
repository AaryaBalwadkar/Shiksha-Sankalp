import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './components/Navb';
import Features from './components/Features';
import AppDescription from './components/AppDescription';
import FooterComponent from './components/FooterComponent';
import ContactPage from './components/ContactPage';
import PrivacyPage from './components/PrivacyPage';
import Feedback from './components/Feedback';
import BlogPage from './components/BlogPage';
import AboutUsPage from './components/AboutUsPage';


function App() {
  return (
    <div style={{ backgroundColor: "#1E1E1E"}}>
    <Navb/>
    <AppDescription/>
    <Features/>
    <FooterComponent/>
    </div>
  );
}

export default App;
