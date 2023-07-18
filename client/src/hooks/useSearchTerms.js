import { useState } from 'react';
import getSearchTerms from '../apis/sick';

const cacheTime = 5 * 60 * 1000;
const cacheStore = new Map();

const useSearchTerms = () => {
  const [recommended, setRecommended] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateRecommended = async userParams => {
    if (cacheStore.has(userParams)) {
      const cache = cacheStore.get(userParams);
      if (cache.createAt - Date.now() < cacheTime) {
        setRecommended(cache.data);
        return;
      }
    }

    try {
      setIsLoading(true);

      const { data } = await getSearchTerms({ q: userParams });

      if (data.length !== 0) {
        cacheStore.set(userParams, { data, createAt: Date.now() });
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

  return { recommended, isLoading, error, updateRecommended };
};

export default useSearchTerms;
