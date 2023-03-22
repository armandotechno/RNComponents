import { useContext } from 'react';
import { Text, SectionList, View } from "react-native"

import { ThemeContext } from "../context/themeContext/ThemeContext";

import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from "../components/ItemSeparator";
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Flash", "Arrow", "Supergirl", "Cyborg", "Shazam", "Batgirl" ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Iron Man", "Captain America", "Hulk", "Black Widow", "Daredevil", "The Avengers" ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Naruto", "Asuna", "David", "Isagi", "Nagi", "Kageyama", "Kaguya", "Thorfinn" ]
    },
    {
        casa: "Nombres",
        data: ["Armando", "José", "Felipe", "Dylan", "Pandy", "Juanito", "Sachita", "Pedro", "Zoey" ]
      }
];

export const SectionListScreen = () => {

  const { theme: { colors } } = useContext( ThemeContext );

  return (
    <View style={{ ...styles.globalMargin }}>
        <SectionList 
            sections={ casas } // aquí se pasa la data
            keyExtractor={ (item, index) => item + index }

            ListHeaderComponent={ () => <HeaderTitle title="List Section"/> }
            ListFooterComponent={ () => <HeaderTitle title={`Total de casas: ${ casas.length }`} /> }

            renderItem={ ({ item }) => <Text style={{ color: colors.text }}>{ item }</Text> }
            stickySectionHeadersEnabled

            renderSectionHeader={ ({ section: { casa } }) => (
                <View style={{ backgroundColor: colors.card, alignItems: 'center' }}>
                    <HeaderTitle title={ casa } />
                </View>
            )}
            renderSectionFooter={ ({ section }) => (
              <HeaderTitle title={`Total: ${ section.data.length }`} />
            )}

            SectionSeparatorComponent={ () => <ItemSeparator /> }
            showsVerticalScrollIndicator={ false }
        />
    </View>
  )
}
