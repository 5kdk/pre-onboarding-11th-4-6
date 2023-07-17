import { Flex, Header, Image, Text } from '@mantine/core';
import logo from '../assets/logo.svg';

const GlobalNavBar = () => (
  <Header withBorder={false}>
    <Flex maw={1040} h={56} m="auto" px={20} align="center" justify="space-between">
      <Image src={logo} maw={126} />
      <Flex fw={500}>
        <Text px="xl">소개</Text>
        <Text px="xl">질문과 답변</Text>
        <Text px="xl">소식받기</Text>
        <Text px="xl">제휴/문의</Text>
      </Flex>
    </Flex>
  </Header>
);
export default GlobalNavBar;
