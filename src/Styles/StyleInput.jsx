import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Ipt:{
        padding: 10,
        width: '100%',
        paddingStart: 0,
        
    },

    error:{
        borderWidth: 1,
        borderColor: 'red'
    }
})

const StyleInput = ({ style = {}, error, ...props }) => {
    const inputStyle = [
        styles.Ipt,
        style,
        error && styles.error
    ]

    return <TextInput style={inputStyle} {...props}/>
}

export default StyleInput