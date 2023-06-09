import { useState, useContext } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();
    const { theme: { colors, dividerColor } } = useContext( ThemeContext );

    const [ refreshing, setRefreshing ] = useState(false);
    const [ data, setData ] = useState<string>('')

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola Mundo')
        }, 1500)
    }

    return (
        <ScrollView
            style={{ marginTop: refreshing ? top : 0 }}
            refreshControl={
                <RefreshControl 
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }   
                    progressViewOffset={ 10 }
                    progressBackgroundColor={ dividerColor }
                    colors={[ colors.text ]}
                />
            }
        >
            <View style={ styles.globalMargin }>
                <HeaderTitle title='Pull to refresh'/>
                {
                    data && <HeaderTitle title={ data }/> 
                }
                
            </View>          
        </ScrollView>
    )
}
