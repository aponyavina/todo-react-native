import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import { AppCard } from '../components/ui/AppCard'
import {THEME} from '../theme'


export const TodoScreen = ({goBack, todo, onRemove}) => {
    return (
        <View>
            <AppCard style={styles.card}>
            <Text style={styles.title}>{todo.title}</Text>
            <Button title='Ред.'></Button>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                <Button title='Назад' color={THEME.GREY_COLOR} onPress={goBack}></Button>
                </View>
                <View style={styles.button}>
                <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card : {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: '40%'
    },
    title : {
        fontSize: 20
    }
})