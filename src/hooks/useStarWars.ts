import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

type useStarWars = () => {
  character: Character | null;
  setId: Dispatch<SetStateAction<number>>;
};

export const useStarWars: useStarWars = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${id}/`);
      const data = (await response.json()) as Character;
      setCharacter(data);
      return 0;
    };

    void fetchCharacter();
  }, [id]);

  return {
    character,
    setId,
  };
};
