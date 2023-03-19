import { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();

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
                    progressBackgroundColor="purple"
                    colors={["white", "orange", "red", "blue"]}
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
