import { useCallback, useEffect, useState } from 'react';

const initialCacheTime = 5 * 60 * 1000;
const cacheStore = new Map();

const useCacheQuery = ({ queryKey, queryFn, initialData, cacheTime = initialCacheTime, select }) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWithCache = useCallback(
    async (queryKey, queryFn, cacheTime) => {
      if (cacheStore.has(queryKey)) {
        const cache = cacheStore.get(queryKey);
        if (Date.now() - cache.createAt < cacheTime) {
          setData(cache.data);
          return;
        }
      }

      try {
        setIsLoading(true);
        const { data } = await queryFn();
        cacheStore.set(queryKey, { data, createAt: Date.now() });
        setData(select ? select(data) : data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [select],
  );

  useEffect(() => {
    fetchWithCache(queryKey, queryFn, cacheTime);
  }, [cacheTime, fetchWithCache, queryFn, queryKey]);

  return { data, isLoading, error };
};

export default useCacheQuery;
