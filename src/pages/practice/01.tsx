import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useDisplayFeedBack } from '@/hooks/useDisplayFeedBack';

const Page: NextPage = () => {
  const { feedbackList, handleInputChange, handleSubmit, inputValue } = useDisplayFeedBack();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <textarea
            className="rounded-sm border px-3 py-2"
            placeholder="フィードバックを入力してください"
            value={inputValue}
            onChange={handleInputChange}
          ></textarea>
          <div className="mt-4 flex justify-center">
            <Button onClick={handleSubmit} label="送信する" variant="primary" />
          </div>
          <div className="mt-2">
            {feedbackList.map((feedback, index) => (
              <li key={index}>{feedback}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
