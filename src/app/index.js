import { StyleSheet, Text, View, FlatList } from 'react-native';
import FoodListItem from '../components/FootListItem';

const foodItems = [
  {label: 'Pizza', cal: 75, brand: 'Dominos'},
  {label: 'Apple', cal: 45, brand: 'Farmer'},
  {label: 'Coffee', cal: 40, brand: 'Americano'},
  {label: 'Beer', cal: 120, brand: 'Snow'}
];


export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={foodItems}
        renderItem ={({item}) => <FoodListItem item={item}/>}
        contentContainerStyle={{gap: 5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
