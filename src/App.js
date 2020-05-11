import React, {useState, useEffect} from 'react';
import './App.css';
import getGif from './services/getGif';
import Gif from './components/Gif';

export default function App() {
  const [gif, setGif] = useState({})

  useEffect(function (){
   getGif('cat').then(gif => setGif(gif))
  },[])

  return (
    <div className="App">
      <section className="App-content">      
        <Gif id={gif.id} url={gif.url}/>    
      </section>
    </div>
  );
}

