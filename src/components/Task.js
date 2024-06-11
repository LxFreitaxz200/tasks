import React, {Component} from "react"
import {StyleSheet, View, Text, ImageBackground} from "react-native"

import moment from "moment"
import 'moment/locale/pt-br'

export default props => {
    return(
        <View style={StyleSheet.container}>
            <Text style={Style.desc}>Descrição da tarefa</Text>
            <Text style={Style.date}>Data estimada conclusão</Text>
            <Text style={Style.date}>Data conclusão</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    desc: {
        fontFamily: 'arial',
        fontSize: 20
    },
    date: {
        fontFamily: 'arial'
    }

})