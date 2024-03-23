import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
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
      <TextInput placeholder='Search...' style={styles.input}/>
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
    gap: 10,
  },

  input:{
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
  }
});
