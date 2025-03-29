import { ChangeEvent, useState } from 'react';

type useRealTimeText = () => {
  text: string;
  handleChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const useRealTimeText: useRealTimeText = () => {
  const [text, setText] = useState('');

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return { text, handleChangeText };
};
