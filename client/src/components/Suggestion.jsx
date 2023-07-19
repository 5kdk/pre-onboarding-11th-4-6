import { forwardRef, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Box, List, Loader, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useRecommendedSearchTerms } from '../hooks';

const Wrapper = ({ align, children }) => (
  <Box
    pos="absolute"
    w={490}
    mt="md"
    p="lg"
    bg="#fff"
    sx={theme => ({
      textAlign: align || 'left',
      borderRadius: theme.radius.lg,
      boxShadow: theme.shadows.md,
    })}>
    {children}
  </Box>
);

const HighlightSearchTerm = ({ searchTerm, sickNm }) => {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = sickNm.split(regex);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part.toLowerCase() === searchTerm.toLowerCase() ? <strong>{part}</strong> : part}
        </Fragment>
      ))}
    </>
  );
};

const Suggestion = forwardRef(({ searchTerm }, ref) => {
  const { recommendations, isLoading, error } = useRecommendedSearchTerms(searchTerm, 15);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const listItemRefs = useRef([]);

  const handleKeyDown = e => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prevIndex => (prevIndex >= 0 ? prevIndex - 1 : prevIndex));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prevIndex => (prevIndex < recommendations.length - 1 ? prevIndex + 1 : prevIndex));
    }
  };

  const updateScroll = useCallback(() => {
    if (listItemRefs.current[selectedIndex]) {
      listItemRefs.current[selectedIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    updateScroll();
  }, [selectedIndex, updateScroll]);

  if (isLoading) {
    return (
      <Wrapper align="center">
        <Loader />
      </Wrapper>
    );
  }

  if (error) {
    return <Wrapper>요청사항을 처리하는데 실패했습니다.</Wrapper>;
  }

  return (
    <Wrapper>
      <Text size="sm" mb="md">
        {recommendations.length !== 0 ? '추천 검색어' : '검색어 없음'}
      </Text>
      <Box ref={ref} onKeyDown={handleKeyDown} mah={240} sx={() => ({ overflow: 'auto' })} tabIndex={0}>
        <List sx={{ cursor: 'pointer' }} icon={<IconSearch size="1rem" color="lightgray" />}>
          {recommendations.map(({ sickCd, sickNm }, i) => (
            <List.Item
              key={sickCd}
              ref={el => (listItemRefs.current[i] = el)}
              bg={selectedIndex === i && '#CAE9FF'}
              tabIndex={0}
              p={7}
              sx={() => ({ ':hover': { backgroundColor: '#CAE9FF' } })}>
              {HighlightSearchTerm({ sickNm, searchTerm })}
            </List.Item>
          ))}
        </List>
      </Box>
    </Wrapper>
  );
});

Suggestion.displayName = 'Suggestion';
Wrapper.displayName = 'Wrapper';

export default Suggestion;
