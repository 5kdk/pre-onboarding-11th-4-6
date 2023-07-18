import { useEffect, useState } from 'react';
import getSearchTerms from '../apis/sick';
import textProcessing from '../utils/textProcessing';

const cacheTime = 1 * 60 * 1000;
const cacheStore = new Map();

const useSearchTerms = input => {
  const [recommended, setRecommended] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const processed = textProcessing(input);

  const updateRecommended = async input => {
    if (!input) return;

    const queryKey = `@Suggestion ${input}`;

    if (cacheStore.has(queryKey)) {
      const cache = cacheStore.get(queryKey);
      if (cache.createAt - Date.now() < cacheTime) {
        setRecommended(cache.data);
        return;
      }
    }

    try {
      setIsLoading(true);

      const { data } = await getSearchTerms({ q: input });

      cacheStore.set(queryKey, { data, createAt: Date.now() });

      setRecommended(data);
      console.log('cacheStore', cacheStore);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updateRecommended(processed);
  }, [processed]);

  return { recommended, isLoading, error };
};

export default useSearchTerms;
