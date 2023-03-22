import { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function TextInputScreen() {

    const { theme: { colors, dividerColor } } = useContext( ThemeContext );

    const { onChange, form, isSuscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false
    });
    

    return (
        <KeyboardAvoidingView
            behavior={ Platform.OS === "ios" ? "padding" : "height" }
        >
            <ScrollView>
                <View style={ styles.globalMargin }>
                    <HeaderTitle title="InputText" />

                    <TextInput 
                        style={{ 
                            ...stylesScreen.textInputStyle, 
                            borderColor: colors.text,
                            color: colors.text
                        }}    
                        placeholder="Ingrese su nombre"
                        placeholderTextColor={ dividerColor }     
                        autoCorrect={ false }  
                        autoCapitalize="words"
                        onChangeText={ (value) => onChange( value, 'name')}
                    />
                    
                    <TextInput 
                        style={{ 
                            ...stylesScreen.textInputStyle, 
                            borderColor: colors.text,
                            color: colors.text
                        }}    
                        placeholder="Ingrese su email"
                        placeholderTextColor={ dividerColor }  
                        autoCorrect={ false }  
                        autoCapitalize="none"
                        onChangeText={ (value) => onChange( value, 'email')}
                        keyboardType="email-address"
                    />

                    <TextInput 
                        style={{ 
                            ...stylesScreen.textInputStyle, 
                            borderColor: colors.text,
                            color: colors.text
                        }}    
                        placeholder="Ingrese su teléfono" 
                        placeholderTextColor={ dividerColor }    
                        onChangeText={ (value) => onChange( value, 'phone')}  
                        keyboardType="phone-pad"
                    />

                <View style={ stylesScreen.switchRow }>
                    <Text style={{ ...stylesScreen.switchText, color: colors.text }}>Suscribirse</Text>
                    <CustomSwitch isOn={ isSuscribed } onChange={ (value) => onChange( value, 'isSuscribed' )}/>
                </View>

                    <HeaderTitle title={ JSON.stringify( form, null, 3 ) } />
                </View>

                <View style={{ height: 100 }}/>
            </ScrollView>
        </KeyboardAvoidingView>
        
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
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
      },
      switchText: {
        fontSize: 25,
      },
});