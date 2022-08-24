import { Stack, Text } from '@mantine/core';
import { useQuery } from 'react-query';

// functor
function subscribeToLog() {
  let log = [];
  let logIndex = 0;

  setInterval(() => {
    log.push(`${logIndex}: ${Date.now()}`);
    logIndex++;
    log = log.slice(-3);
  }, 100);

  return () => log;
}

const logListener = subscribeToLog();

function Logger() {
  const { data: log } = useQuery('log', logListener, {
    refetchInterval: 1000
  });

  return (
      <Stack>
        {log?.map((entry, index) => (
          <Text key={index}>{entry}</Text>
        ))}
      </Stack>
  );
}

export default Logger;
