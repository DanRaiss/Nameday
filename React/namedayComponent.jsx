import React, { useState, useEffect } from 'react';
import NamedayAPI from '../services/namedayAPI';

const namedayAPI = new NamedayAPI('https://your-api-url.com');

function App() {
  const [todayNameday, setTodayNameday] = useState('');

  useEffect(() => {
    async function fetchData() {
      const nameday = await namedayAPI.today('CZ');
      setTodayNameday(nameday);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Today's nameday: {todayNameday}</h1>
    </div>
  );
}

export default App;
