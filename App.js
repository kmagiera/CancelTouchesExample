import React from 'react';
import {View, StyleSheet, Text, Animated, Button} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const App = () => {
  return (
    <View style={styles.container}>
      <Swipeable
        renderLeftActions={() => (
          <View style={styles.action}>
            <Text>Action</Text>
          </View>
        )}>
        <Animated.View style={styles.swipeable}>
          <Button title="Press me" onPress={() => alert('hey!')} />
        </Animated.View>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: 'red',
  },
  swipeable: {
    width: '100%',
    height: 130,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    width: 150,
    backgroundColor: 'green',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
