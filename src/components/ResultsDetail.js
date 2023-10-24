import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const ResultsDetail =({result})=>{
    return(
        <View style={styles.viewStyle}>
            <Image 
                style={styles.imageStyle}
                source={{uri:result.image_url}}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating}Stars, {result.review_count} Reviews</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    viewStyle:{
        marginLeft:15,
    },
    imageStyle:{
        width:150,
        height:150,
        borderRadius:10,
        marginBottom:5,
    },
    nameStyle:{
        fontWeight:'bold',
    },
});


export default ResultsDetail;