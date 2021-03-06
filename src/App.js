import { useState } from 'react';
import Button from './Button';
import Board from './Board'
import './App.css'
import logo from './assets/logo.png'

function random(n) {
  return Math.ceil(Math.random() * n)
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);

  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };


  return (
    <div className='App'>
      <div className='App logo'>
        <div className='logo-img'><img src={logo} alt='logo' width='90px' height='55px'></img></div>
        <div className='App-title'>주사위 게임</div>
      </div>
      <div>
        <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
      </div>
      <div className='board'>
        <Board name="나" color="blue"  gameHistory={myHistory} />
        </div>
        <div className='board'>
        <Board name="상대" color="red"  gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;