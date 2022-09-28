import './App.css';

import AboutMe from './components/About';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
