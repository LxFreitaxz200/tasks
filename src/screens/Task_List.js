import React, {Component} from "react"
import {StyleSheet, View, Text, ImageBackground} from "react-native"

import moment from "moment"
import 'moment/locale/pt-br'

import today_image from "../../assets/imgs/today.jpg"

import Task from "../components/Task"

export default  class TaskList extends Component{
    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return(
            <View style={styles.container}>
                <ImageBackground source={today_image}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.tasklist}>
                    <Task/>
                    {/* queijo */}
                </View>               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background:{
        flex: 3
    },
    tasklist:{
        flex: 7
    },
    titleBar:{
        flex:1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: 'arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 30
    }
})