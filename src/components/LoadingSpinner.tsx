import React from 'react'
import { ActivityIndicator } from 'react-native'

const LoadingSpinner = () => {
    return (
        <ActivityIndicator
            color='#8d99ae'
            size='large'
            animating={true}
        />
    )
}

export default LoadingSpinner;