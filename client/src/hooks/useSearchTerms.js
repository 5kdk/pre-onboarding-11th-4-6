import { useEffect, useState } from 'react';
import getSearchTerms from '../apis/sick';

const cacheTime = 1 * 60 * 1000;
const cacheStore = new Map();

const useSearchTerms = input => {
  const [recommended, setRecommended] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const trimedInput = input.trim();

  const updateRecommended = async input => {
    if (!input) return;

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

      cacheStore.set(input, { data, createAt: Date.now() });

      setRecommended(data);
      console.log('cacheStore', cacheStore);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updateRecommended(trimedInput);
  }, [trimedInput]);

  return { recommended, isLoading, error };
};

export default useSearchTerms;
