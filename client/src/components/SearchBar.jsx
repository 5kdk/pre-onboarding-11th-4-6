import { TextInput, ActionIcon, useMantineTheme, Box } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import Suggestion from './Suggestion';
import { useCallback, useDeferredValue, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';

const SearchBar = props => {
  const theme = useMantineTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [opened, setOpened] = useState(false);
  const deferred = useDeferredValue(searchTerm);

  const ref = useClickOutside(useCallback(() => setOpened(false), []));

  const handleUserInput = e => {
    setSearchTerm(e.target.value);
    if (!opened) setOpened(true);
  };

  return (
    <Box w={490} pos="relative">
      <TextInput
        value={searchTerm}
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
        spellCheck="false"
        {...props}
      />
      {searchTerm && opened && <Suggestion searchTerm={deferred} ref={ref} />}
    </Box>
  );
};

export default SearchBar;
