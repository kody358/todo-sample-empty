import { useEffect, useState } from 'react';

type useDigitalClock = () => {
  currentTime: Date;
};

export const useDigitalClock: useDigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return {
    currentTime,
  };
};
