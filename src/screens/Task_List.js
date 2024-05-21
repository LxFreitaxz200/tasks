import React, {Component} from "react"
import {StyleSheet, View, Text, ImageBackground} from "react-native"

import today_image from "../../assets/imgs/today.jpg"

export default  class TaskList extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={today_image}>
                    
                </ImageBackground>
                <View style={styles.tasklist}>

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
    }
})