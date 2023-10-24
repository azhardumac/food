import React, {useState,useEffect}from 'react';
import { View,Text,StyleSheet,Image,FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation})=>{
    const [result,setResult]= useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(()=>{
        getResult(id);
    },[]);

    if(!result){
        return null;
    }
    return(
        <View>
            <Text style={styles.titleStyle}>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item})=>{
                    return <Image 
                                source={{uri:item}}
                                style={styles.imageStyle }
                            />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle:{
        height:200,
        width:300,
        marginBottom:5,
        alignContent:'center',
        alignSelf:'center'
    },
    titleStyle:{
        fontSize:'20',
        fontWeight:'bold',
        alignSelf:'center',
    }

});


export default ResultShowScreen; 