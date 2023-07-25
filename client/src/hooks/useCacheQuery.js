import { useCallback, useEffect, useState } from 'react';

const initialCacheTime = 5 * 60 * 1000;
const cacheStore = new Map();
const maxCacheSize = 100;

const useCacheQuery = ({ queryKey, queryFn, initialData, cacheTime = initialCacheTime, select }) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWithCache = useCallback(async () => {
    if (cacheStore.has(queryKey)) {
      const cache = cacheStore.get(queryKey);
      if (Date.now() - cache.createAt < cacheTime) {
        setData(cache.data);
        cacheStore.delete(queryKey);
        cacheStore.set(queryKey, cache);
        return;
      } else {
        cacheStore.delete(queryKey);
      }
    }

    try {
      setIsLoading(true);
      const { data } = await queryFn();
      cacheStore.set(queryKey, { data, createAt: Date.now() });

      if (cacheStore.size > maxCacheSize) {
        const oldestCacheKey = cacheStore.keys().next().value;
        cacheStore.delete(oldestCacheKey);
      }

      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [cacheTime, queryFn, queryKey]);

  useEffect(() => {
    fetchWithCache();
  }, [fetchWithCache]);

  return { data: select ? select(data) : data, isLoading, error };
};

export default useCacheQuery;
