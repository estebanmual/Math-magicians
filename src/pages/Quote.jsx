import { useState, useEffect } from 'react';
import style from '../styling/Quote.module.css';

const axios = require('axios');

function Quote() {
  const [quote, setQuote] = useState('');

  useEffect(async () => {
    await axios.get('https://random-math-quote-api.herokuapp.com/')
      .then((response) => setQuote(response.data));
  }, []);

  return (
    <div className={style.Quote}>
      <h2 className={style.Quote__quote}>{quote.quote}</h2>
      <h3 className={style.Quote__author}>{quote.author}</h3>
    </div>
  );
}

export default Quote;
