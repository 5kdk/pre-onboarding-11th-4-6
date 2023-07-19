import { Box, Flex, Title } from '@mantine/core';
import { SearchBar } from '.';

const Banner = () => {
  return (
    <Box bg="#CAE9FF">
      <Flex direction="column" align="center" justify="center" ta="center" maw={1040} m="auto" pt={80} pb={160}>
        <Title order={2} fz={36} mb={40}>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </Title>
        <SearchBar />
      </Flex>
    </Box>
  );
};

export default Banner;
