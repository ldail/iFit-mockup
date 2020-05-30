import React, { useRef } from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const topHeaderRef = useRef(null);
  const subHeaderRef = useRef(null);
  return (
    <div className="App">
      <Header topHeaderRef={topHeaderRef} subHeaderRef={subHeaderRef} />
      <Main topHeaderRef={topHeaderRef} subHeaderRef={subHeaderRef} />
      <Footer />
    </div>
  );
}

export default App;
