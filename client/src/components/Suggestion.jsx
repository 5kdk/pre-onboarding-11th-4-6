import { Box, List, ScrollArea, Text } from '@mantine/core';
import useSearchTerms from '../hooks/useSearchTerms';
import { IconSearch } from '@tabler/icons-react';
import { forwardRef, memo } from 'react';

const Suggestion = memo(
  forwardRef(({ searchTerm }, ref) => {
    const { recommended, isLoading, error } = useSearchTerms(searchTerm);

    if (isLoading) {
      <div>Loading...</div>;
    }

    if (error) {
      <div>{error}</div>;
    }

    return (
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
        <Text size="sm" mb="md">
          추천 검색어
        </Text>
        {recommended.length === 0 ? (
          <Text>검색어 없음</Text>
        ) : (
          <ScrollArea h={300}>
            <List spacing="sm" sx={{ cursor: 'pointer' }} icon={<IconSearch size="1rem" color="lightgray" />}>
              {recommended.map(({ sickCd, sickNm }) => (
                <List.Item key={sickCd} tabIndex="0">
                  {sickNm}
                </List.Item>
              ))}
            </List>
          </ScrollArea>
        )}
      </Box>
    );
  }),
);

Suggestion.displayName = 'Suggestion';

export default Suggestion;
