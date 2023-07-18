import { Box, List, Text } from '@mantine/core';
import useSearchTerms from '../hooks/useSearchTerms';
import { IconSearch } from '@tabler/icons-react';

const Suggestion = ({ userInput }) => {
  const { recommended, isLoading, error } = useSearchTerms(userInput);

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>{error}</div>;
  }

  return (
    <Box
      pos="absolute"
      w={490}
      mt={10}
      p="lg"
      bg="#fff"
      sx={theme => ({ textAlign: 'left', borderRadius: theme.radius.lg, boxShadow: theme.shadows.md })}>
      <Text size="sm" mb="md">
        추천 검색어
      </Text>
      {recommended.length === 0 ? (
        <Text>검색어 없음</Text>
      ) : (
        <List spacing="sm" icon={<IconSearch size="1rem" color="lightgray" />}>
          {recommended.map(({ sickCd, sickNm }) => (
            <List.Item key={sickCd} tabIndex="0">
              {sickNm}
            </List.Item>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Suggestion;
