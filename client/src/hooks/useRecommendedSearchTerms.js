import { useCallback } from 'react';
import { useCacheQuery } from '.';
import getSearchTerms from '../apis/sick';

const useRecommendedSearchTerms = input => {
  const {
    data: recommendations,
    isLoading,
    error,
  } = useCacheQuery({
    queryKey: `@Suggestion ${input}`,
    queryFn: useCallback(() => getSearchTerms(input), [input]),
    initialData: [],
    cacheTime: 2 * 60 * 1000,
  });

  return { recommendations, isLoading, error };
};

export default useRecommendedSearchTerms;
