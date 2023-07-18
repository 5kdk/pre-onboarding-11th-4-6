import { TextInput, ActionIcon, useMantineTheme, Box } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import Suggestion from './Suggestion';
import { useState } from 'react';

const SearchBar = props => {
  const theme = useMantineTheme();
  const [userInput, setUserInput] = useState('');

  const handleUserInput = e => {
    setUserInput(e.target.value);
  };

  return (
    <Box w={490} pos="relative">
      <TextInput
        value={userInput}
        onChange={handleUserInput}
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
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
      {userInput && <Suggestion userInput={userInput} />}
    </Box>
  );
};

export default SearchBar;
