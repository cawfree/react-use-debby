import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useDebby } from "react-use-debby";

export default function App() {
  const [count, setCount] = useState(0);
  const debbiedCount = useDebby()(count);
  return (
    <>
      <Text children={`The count is: ${count}.`} />
      <Text children={`The debbied count is: ${debbiedCount}.`} />
      <Button onPress={() => setCount(cnt => cnt + 1)} title="Increment" />
    </>
  );
}
