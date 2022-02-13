import React from 'react'
import { StyleProp, Text, ViewStyle } from 'react-native'

interface Props {
    title: string;
    style?: StyleProp<ViewStyle>;
}

const DisplayText = ({ style, title }: Props) => {
    return (
        <Text style={style}>{title}</Text>
    )
}

export default DisplayText;
