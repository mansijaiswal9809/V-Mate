import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Feed from './components/Feed';
import Video from './components/Video';
import { useState } from 'react';

function App() {
  const [data, setData] =useState([])
  return (
    <BrowserRouter>
    <div className="App">
      <Header setData={setData}/>
      <Routes>
        <Route exact path="/" element={<Feed data={data}/>}/>
        <Route exact path="/video/:id" element={<Video/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
