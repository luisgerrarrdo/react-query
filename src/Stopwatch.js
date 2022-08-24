import { useRef } from "react";
import { Text } from "@mantine/core";
import { useQuery } from "react-query";

// functor
function createStopwatch() {
  const startTime = Date.now();

  return () => {
    return Math.round((Date.now() - startTime) / 1000);
  };
}

function Stopwatch() {
  const timerRef = useRef(createStopwatch());
  const { data: time } = useQuery("time", timerRef.current, {
    refetchInterval: 200,
  });

  return <Text>Time {time}</Text>;
}

export default Stopwatch;
