import { Flex, Footer as MantineFooter, Text } from '@mantine/core';

const Footer = () => {
  return (
    <MantineFooter py={40} bg="#2d3d50">
      <Flex direction="column" maw={1040} m="auto" c="#A7AFB7">
        <Text mb={16}>원티드 프리온보딩 인턴십</Text>
        <Text fz={14}>4주차 기업 과제</Text>
        <Text fz={14}>검색창 구현, 검색어 추천 기능 구현, 캐싱 기능 구현하기</Text>
      </Flex>
    </MantineFooter>
  );
};

export default Footer;
