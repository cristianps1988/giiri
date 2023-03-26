import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import HowSection from "./components/HowSection";
import WhySection from "./components/WhySection";
import JointSection from "./components/JointSection";
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header  />
      <Hero />
      <Main />
      <HowSection />
      <WhySection />
      <JointSection />
      <Footer/>
    </div>
    
  )
}

export default App;
