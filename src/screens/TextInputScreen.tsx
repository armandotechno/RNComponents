import { View, Text, TextInput, StyleSheet } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export default function TextInputScreen() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const onChange = ( value: string, field: string ) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    return (
      <View style={ styles.globalMargin }>
        <HeaderTitle title="InputText" />

        <TextInput 
            style={ stylesScreen.textInputStyle }    
            placeholder="Ingrese su nombre"     
            autoCorrect={ false }  
            autoCapitalize="words"
            onChangeText={ (value) => onChange( value, 'name')}
        />
        
        <TextInput 
            style={ stylesScreen.textInputStyle }
            placeholder="Ingrese su email"  
            autoCorrect={ false }  
            autoCapitalize="none"
            onChangeText={ (value) => onChange( value, 'email')}
            keyboardType="email-address"
        />

        <TextInput 
            style={ stylesScreen.textInputStyle }   
            placeholder="Ingrese su teléfono"     
            onChangeText={ (value) => onChange( value, 'phone')}  
            keyboardType="phone-pad"
        />

        <HeaderTitle title={ JSON.stringify( form, null, 3 ) } />
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
        marginVertical: 10,
    },
});