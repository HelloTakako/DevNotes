import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import BackToTopLink from '../components/BackToTopLink';
import Footer from '../components/Footer';

const getCurrentTimeInTimeZone = (timeZone, date = new Date()) => {
  const options = {
    timeZone,
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  let parts = formatter.formatToParts(date);
  let timeString = parts
    .map(({ type, value }) => {
      switch (type) {
        case 'day':
          return `${value}${getOrdinalSuffix(value)}`;
        default:
          return value;
      }
    })
    .join('');

  return timeString;
};

const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const TimeDisplay = () => {
  const [japanTime, setJapanTime] = useState('');
  const [vancouverTime, setVancouverTime] = useState('');
  const [currentJapanTime, setCurrentJapanTime] = useState('');
  const [currentVancouverTime, setCurrentVancouverTime] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputTime, setInputTime] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setCurrentJapanTime(getCurrentTimeInTimeZone('Asia/Tokyo', now));
      setCurrentVancouverTime(
        getCurrentTimeInTimeZone('America/Vancouver', now)
      );
    };

    updateTimes();

    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCalculate = () => {
    if (inputDate && inputTime) {
      const date = new Date(`${inputDate}T${inputTime}`);
      setJapanTime(getCurrentTimeInTimeZone('Asia/Tokyo', date));
      setVancouverTime(getCurrentTimeInTimeZone('America/Vancouver', date));
    }
  };

  return (
    <div>
      <Header />
      <h1>Current Times</h1>

      <h3>Current</h3>
      <p>
        <strong>Japan (Tokyo):</strong> {currentJapanTime}
      </p>
      <p>
        <strong>Vancouver (Canada):</strong> {currentVancouverTime}
      </p>

      <br />
      <br />
      <br />

      <h3>Converted</h3>
      <p>
        <strong>Japan (Tokyo):</strong> {japanTime}
      </p>
      <p>
        <strong>Vancouver (Canada):</strong> {vancouverTime}
      </p>

      <h2>Calculate Times (Van to JP)</h2>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
          />
        </label>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <BackToTopLink />

      <Footer />
    </div>
  );
};

export default TimeDisplay;
