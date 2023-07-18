import { useEffect, useState } from 'react';
import getSearchTerms from '../apis/sick';

const cacheTime = 5 * 60 * 1000;
const cacheStore = new Map();

const useSearchTerms = userInput => {
  const [recommended, setRecommended] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateRecommended = async input => {
    if (cacheStore.has(input)) {
      const cache = cacheStore.get(input);
      if (cache.createAt - Date.now() < cacheTime) {
        setRecommended(cache.data);
        return;
      }
    }

    try {
      setIsLoading(true);

      const { data } = await getSearchTerms({ q: input });

      if (data.length !== 0) {
        cacheStore.set(input, { data, createAt: Date.now() });
        setRecommended(data);
      } else {
        setRecommended([]);
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updateRecommended(userInput);
  }, [userInput]);

  return { recommended, isLoading, error };
};

export default useSearchTerms;
