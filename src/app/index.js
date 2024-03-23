import { StyleSheet, Text, View } from 'react-native';
import FoodListItem from '../components/FootListItem';



export default function App() {
  return (
    <View style={styles.container}>
      <FoodListItem item={{label: 'Pizza', cal: 75, brand: 'Dominos'}}/>
      <FoodListItem item={{label: 'Apple', cal: 45, brand: 'Farmer'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
    gap:5,
  },
});
