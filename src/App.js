import { useState } from 'react';
import Button from './Button';
import Board from './Board'

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
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory} />
        <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
      </div>
    </div>
  );
}

export default App;