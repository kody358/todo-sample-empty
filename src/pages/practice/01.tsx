import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { usePokemon } from '@/hooks/usePokemon';

const Page: NextPage = () => {
  const { error, fetchPokemon, handleSetQuery, pokemon } = usePokemon();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center gap-x-2">
        <div>
          {/* 入力フォーム */}
          <div>
            <input
              type="text"
              className="rounded-md border px-3 py-2 outline-none"
              placeholder="ポケモンの名前を入力"
              onChange={handleSetQuery}
            />
            <p className="mt-2 text-base text-red-500">
              {error && <p className="mt-2 text-base text-red-500">{error}</p>}
            </p>
          </div>

          {/* ポケモンの情報 */}
          {pokemon && (
            <div className="mt-4 text-center text-base">
              <h3>{pokemon.name}</h3>
              <div className="flex justify-center">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <p>タイプ: {pokemon.types.map((pokemonType) => pokemonType.type.name).join(', ')}</p>
              <p>身長: {pokemon.height}</p>
              <p>重さ: {pokemon.weight}</p>
            </div>
          )}

          {/* 検索ボタン */}
          <div className="flex justify-center">
            <Button onClick={fetchPokemon} label="検索" variant="primary" className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
