import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FoodListItem = ({item})=>{
        return(
        <View 
            style={styles.container}
            >
            <View style={{flex: 1 ,gap: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.label}</Text>
                <Text style={{color: 'dimgrey'}}>{item.cal} cal, {item.brand}</Text>
            </View>  
            <AntDesign name="pluscircleo" size={24} color="royalblue" />
            </View>  
        )
    }

const styles= StyleSheet.create({
    container: {
        backgroundColor: '#f6f6f8', 
        padding: 10, 
        borderRadius: 5,    
        flexDirection: 'row',
        ustifyContent: 'space-between',
        alignItems: 'center',
    }
})    

export default FoodListItem;    