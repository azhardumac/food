import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather 
                name="search" 
                style={styles.iconStyle}/>
            <TextInput 
                placeholder='Search' 
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={()=> onTermSubmit()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:15,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10,
    },
    inputStyle:{
        flex:1,
        fontSize:18,

    },
    iconStyle:{
        fontSize: 30,
        alignSelf:'center',
        marginHorizontal:15,
        color:"black" 

    },

});

export default SearchBar;