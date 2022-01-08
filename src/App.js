import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Nav>
      <main>
        {currentCategory === categories[0] && <About></About>}
        {currentCategory === categories[1] && <Portfolio></Portfolio>}
        {currentCategory === categories[2] && <ContactForm></ContactForm>}
        {currentCategory === categories[3] && <Resume></Resume>}
      </main>
    </>
  );
}

export default App;
