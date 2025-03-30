import { NextPage } from 'next';

import { useCelsiusToFahrenheit } from '@/hooks/useCelsiusToFahrenheit';
const Page: NextPage = () => {
  const { celsius, handleChange, convertFromCelsiusToFahrenheit } = useCelsiusToFahrenheit();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <div className="mb-2 flex items-center gap-x-2">
            <label htmlFor="celsius">摂氏温度：</label>
            <input
              className="rounded-md border p-2 outline-none"
              type="number"
              id="celsius"
              onChange={handleChange}
            />
          </div>
          <p>華氏温度：{convertFromCelsiusToFahrenheit(celsius)}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
