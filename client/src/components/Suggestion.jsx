import { forwardRef } from 'react';
import { Box, List, Loader, ScrollArea, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useRecommendedSearchTerms } from '../hooks';

const Wrapper = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    pos="absolute"
    w={490}
    mt="md"
    p="lg"
    bg="#fff"
    sx={theme => ({
      textAlign: 'left',
      borderRadius: theme.radius.lg,
      boxShadow: theme.shadows.md,
    })}>
    {children}
  </Box>
));

const Suggestion = forwardRef(({ searchTerm }, ref) => {
  const { recommendations, isLoading, error } = useRecommendedSearchTerms(searchTerm);

  if (isLoading) {
    <Wrapper ref={ref}>
      <Loader />
    </Wrapper>;
  }

  if (error) {
    <Wrapper ref={ref}>요청사항을 처리하는데 실패했습니다.</Wrapper>;
  }

  return (
    <Wrapper ref={ref}>
      <Text size="sm" mb="md">
        추천 검색어
      </Text>
      {recommendations.length === 0 ? (
        <Text>검색어 없음</Text>
      ) : (
        <ScrollArea h={300}>
          <List spacing="sm" sx={{ cursor: 'pointer' }} icon={<IconSearch size="1rem" color="lightgray" />}>
            {recommendations.map(({ sickCd, sickNm }) => (
              <List.Item key={sickCd} tabIndex="0">
                {sickNm}
              </List.Item>
            ))}
          </List>
        </ScrollArea>
      )}
    </Wrapper>
  );
});

Suggestion.displayName = 'Suggestion';
Wrapper.displayName = 'Popup';

export default Suggestion;
