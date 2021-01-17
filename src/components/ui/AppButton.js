import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {AppTextBold} from '../ui/AppTextBold'

export const AppButtom = ({children, onPress}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <AppTextBold>{children}</AppTextBold>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})