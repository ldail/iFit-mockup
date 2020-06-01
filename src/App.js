//Dependencies
import React, { useRef, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

//Styling
import './reset.css';
import './App.css';

function App() {
  const topHeaderRef = useRef(null);
  const subHeaderRef = useRef(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  return (
    <div className="App">
      <Header isHeaderVisible={isHeaderVisible} topHeaderRef={topHeaderRef} subHeaderRef={subHeaderRef} />
      <Main isHeaderVisible={isHeaderVisible} setIsHeaderVisible={setIsHeaderVisible} topHeaderRef={topHeaderRef} subHeaderRef={subHeaderRef} />
      <Footer />
    </div>
  );
}

export default App;
