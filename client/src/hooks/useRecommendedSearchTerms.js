import { useCacheQuery } from '.';
import getSearchTerms from '../apis/sick';
import textProcessing from '../utils/textProcessing';

const useRecommendedSearchTerms = input => {
  const processedInput = textProcessing(input);

  const {
    data: recommendations,
    isLoading,
    error,
  } = useCacheQuery({
    queryKey: `@Suggestion ${processedInput}`,
    queryFn: () => getSearchTerms({ q: processedInput }),
    initialData: [],
    cacheTime: 2 * 60 * 1000,
  });

  return { recommendations, isLoading, error };
};

export default useRecommendedSearchTerms;
