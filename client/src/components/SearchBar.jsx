import { useCallback, useRef, useState } from 'react';
import { TextInput, ActionIcon, useMantineTheme, Box } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useClickOutside, useDebounceValue } from '../hooks';
import textProcessing from '../utils/textProcessing';
import { Suggestion } from '.';

const SearchBar = () => {
  const theme = useMantineTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [opened, setOpened] = useState(false);
  const deferred = useDebounceValue(textProcessing(searchTerm));
  const ref = useClickOutside(useCallback(() => setOpened(false), []));
  const focusRef = useRef();

  const focusSuggestion = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusRef.current?.focus();
    }
  };

  const handleUserInput = e => {
    setSearchTerm(e.target.value);
    if (!opened) setOpened(true);
  };

  return (
    <Box w={490} pos="relative" ref={ref}>
      <TextInput
        value={searchTerm}
        onKeyDown={focusSuggestion}
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
      />
      {deferred && opened && <Suggestion searchTerm={deferred} ref={focusRef} />}
    </Box>
  );
};

export default SearchBar;
