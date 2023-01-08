import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import format from 'date-fns/format';
import Colors from '../constants/Colors';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: Colors.screen.text, fontSize: 20}}>Bu sayfalar yapım aşamasındadır.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.screen.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
