import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const SearchBar = props => {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      w={490}
      radius="xl"
      size="xl"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          <IconSearch size="1.1rem" stroke={1.5} />
        </ActionIcon>
      }
      placeholder="질환명을 입력해 주세요."
      aria-label="질환 검색창"
      {...props}
    />
  );
};

export default SearchBar;
