import { ChangeEvent, useState } from 'react';

type PokemonType = {
  type: {
    name: string;
  };
};

type PokemonSprites = {
  front_default: string;
};

type Pokemon = {
  sprites: PokemonSprites;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
};

type UsePokemon = () => {
  error: string;
  fetchPokemon: () => Promise<void>;
  handleSetQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  pokemon: Pokemon | null;
};

export const usePokemon: UsePokemon = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleSetQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      const data = (await response.json()) as Pokemon;
      setPokemon(data);
    } catch (error) {
      setError('ポケモンが見つかりません');
    }
  };

  return {
    error,
    fetchPokemon,
    handleSetQuery,
    pokemon,
  };
};
