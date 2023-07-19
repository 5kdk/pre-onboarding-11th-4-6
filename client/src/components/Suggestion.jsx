import { forwardRef, Fragment } from 'react';
import { Box, List, Loader, ScrollArea, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useRecommendedSearchTerms } from '../hooks';

const Wrapper = forwardRef(({ align, children }, ref) => (
  <Box
    ref={ref}
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
));

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
  const { recommendations, isLoading, error } = useRecommendedSearchTerms(searchTerm);

  if (isLoading) {
    return (
      <Wrapper ref={ref} align="center">
        <Loader />
      </Wrapper>
    );
  }

  if (error) {
    return <Wrapper ref={ref}>요청사항을 처리하는데 실패했습니다.</Wrapper>;
  }

  return (
    <Wrapper ref={ref}>
      <Text size="sm" mb="md">
        {recommendations.length !== 0 ? '추천 검색어' : '검색어 없음'}
      </Text>
      <ScrollArea h={300}>
        <List spacing="sm" sx={{ cursor: 'pointer' }} icon={<IconSearch size="1rem" color="lightgray" />}>
          {recommendations.map(({ sickCd, sickNm }) => (
            <List.Item key={sickCd} tabIndex="0">
              {HighlightSearchTerm({ sickNm, searchTerm })}
            </List.Item>
          ))}
        </List>
      </ScrollArea>
    </Wrapper>
  );
});

Suggestion.displayName = 'Suggestion';
Wrapper.displayName = 'Wrapper';

export default Suggestion;
