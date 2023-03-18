import { View, Text, TextInput, StyleSheet } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export default function TextInputScreen() {
    return (
      <View style={ styles.globalMargin }>
        <HeaderTitle title='InputText' />

        <TextInput 
            style={ stylesScreen.textInputStyle }           
        />

      </View>
    )
}

const stylesScreen = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
});