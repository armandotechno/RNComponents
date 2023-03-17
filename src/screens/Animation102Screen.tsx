import { View, StyleSheet } from 'react-native'

export default function Animation102Screen() {
  return (
    <View style={{ flex: 1 }}>
      
        <View style={ styles.purpleBox }/>

    </View>
  )
}

const styles = StyleSheet.create({
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    }
});