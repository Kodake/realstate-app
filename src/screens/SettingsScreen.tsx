import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SettingsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    }
});

export default SettingsScreen;
