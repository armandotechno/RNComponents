import { useRef } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native'

export default function Animation102Screen() {
  
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: pan.x, dy: pan.y },
    ], { 
      useNativeDriver: false 
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, 
        { toValue: { x: 0, y: 0}, useNativeDriver: false }, 
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    box: {
        backgroundColor: 'pink',
        width: 150,
        height: 150,
    }
});