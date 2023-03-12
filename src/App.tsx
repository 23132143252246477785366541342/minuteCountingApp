import "./styles/button.css";
import "./styles/app.css";

import { useState } from 'react';
import { AddButton } from './components/AddButton';
import { DateTime } from './components/DateTime';
import { sessionStore } from './store'

function App() {
  const [currTime, setTime] = useState(0);
  const day = sessionStore.use.day();
  const week = sessionStore.use.week();
  const total = sessionStore.use.total();

  const addTime = (amount: number) => {
    sessionStore.set.day(day + amount);
    sessionStore.set.week(week + amount);
    sessionStore.set.total(total + amount);
    setTime(amount + currTime);
  }

  return (
    <div className="app">
      <div className="grid-item">
        <DateTime/>
        <code style={{textAlign: "left"}}>{day}
          <code className="small"> minutes today</code>
        </code><br/>
        <code style={{textAlign: "left"}}>{week}
          <code className="small"> minutes this week</code>
        </code><br/>
        <code style={{textAlign: "left"}}>{total}
          <code className="small"> minutes in total</code>
        </code><br/>
      </div>
      <div className="buttons grid-item">
        <AddButton amount={1} addTime={addTime}/>
        <AddButton amount={3} addTime={addTime}/>
        <AddButton amount={5} addTime={addTime}/>
        <AddButton amount={7} addTime={addTime}/>
      </div>
    </div>
  );
}

export default App;
