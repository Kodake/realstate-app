import React from 'react'
import { FlatList, StatusBar, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DisplayText from '../components/DisplayText';

const DATA = [
    {
        id: 'bd7acbea',
        title: 'First Item',
    },
    {
        id: '3ac68afc',
        title: 'Second Item',
    },
    {
        id: '58694a0f',
        title: 'Third Item',
    },
];

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity
                            style={styles.itemTouchable}
                            activeOpacity={0.65}
                            onPress={() => console.log(item.title, item.id)}
                            onLongPress={() => console.log(item.title, item.id)}
                        >
                            <View style={styles.itemContainer}>
                                <DisplayText style={styles.itemTitle} title={item.id} />
                                <DisplayText style={styles.itemTitle} title={item.title} />
                            </View>
                        </TouchableOpacity>
                    </>
                )}

                ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: StatusBar.currentHeight! - 35 || 0,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemTouchable: {
        backgroundColor: '#3a86ff',
    },
    itemTitle: {
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: '#ffffff'
    },
    itemSeparator: {
        marginVertical: 5
    }
});

export default HomeScreen;
