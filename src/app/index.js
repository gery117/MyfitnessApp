import {Link} from 'expo-router'
import {View, Text, FlatList, Button, StyleSheet, ActivityIndicator} from 'react-native'
import FoodLogListItem from '../components/FoodLogListItem'
import {gql, useQuery} from '@apollo/client'
import dayjs from'dayjs'

const query = gql`
query MyQuery($date: Date!, $user_id: String!) {
    foodlogsForDate(date: $date, user_id: $user_id) {
        label
        food_id
        created_at
        id
        kcal
        user_id
    }
}
`;

const foodItems = [
    {
        food: {label: 'Pizza', nutrients:{ENERC_KCAL: 100}, brand: 'Dominos'},
    },
];

export default function HomeScreen () {
    const user_id = 'alex';
    const {data, loading, error} =useQuery(query, {
        variables: {
            date: dayjs().format('YYYY-MM-DD'),
            user_id,
        },
    })

    if (loading) {
        return <ActivityIndicator/>;
    }

    if(error) {
        return <Text>Failed to fetch data</Text>;
    }

    console.log(data);

    return(
        <View style={styles.container}>
            <View style= {styles.headerRow}>
                <Text style={styles.subtitle}>
                    Calories
                </Text>
                <Text>
                    1770-360 = 1692
                </Text>
            </View> 
            <View style= {styles.headerRow}>
                <Text style={styles.subtitle}>
                    Today's food
                </Text>
                <Link href="/search" asChild>
                    <Button title="ADD FOOD"/>
                </Link>
            </View>    
            <FlatList
                data={data.foodlogsForDate}
                contentContainerStyle={{gap: 5}}
                renderItem={({item})=> <FoodLogListItem item = {item}/>}
            
            />
        </View>
    )}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white', 
        flex: 1, 
        padding: 10, 
        gap: 10 
    },

    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    subtitle:{
        fontSize: 18, 
        fontWeight: '500', 
        flex: 1, 
        color: 'dimgrey'
    }
})    