import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoadingSpinner from '../components/LoadingSpinner';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <LoadingSpinner />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
    }
});

export default SettingsScreen;
