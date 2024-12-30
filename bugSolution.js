```javascript
import React, { useState, useEffect } from 'react';
import { Dimensions, View, StyleSheet, Text } from 'react-native';

const App = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={[styles.container, { width: dimensions.width, height: dimensions.height }]}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
```