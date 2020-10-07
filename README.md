# react-use-debby
Optimize successive updates to a particular value. It's like a time filter you can apply inline to received values, and it's useful for debouncing rapid changes to a value without writing a dedicated debouncing function.

## 🚀 Getting Started

Using [**Yarn**](https://yarnpkg.com):

```bash
yarn add react-use-debby
```

## ✍️ Usage

```javascript
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useDebby } from "react-use-debby";

export default function App() {
  const [count, setCount] = useState(0);
  const debbiedCount = useDebby()(count);
  // Matches lodash.debounce.
  // const debbiedCount = useDebby(1000, {leading: true})(count);
  return (
    <>
      <Text children={`The count is: ${count}.`} />
      <Text children={`The debbied count is: ${debbiedCount}.`} />
      <Button onPress={() => setCount(cnt => cnt + 1)} title="Increment" />
    </>
  );
}
```

## ✌️ License
[**MIT**](./LICENSE)
