import React from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';



const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }


    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                keyExtractor={(result)=>result.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                renderItem={({item})=>{
                    return (
                    <TouchableOpacity 
                        onPress={()=> navigation.navigate('ResultShow',{id:item.id})}>
                    <ResultsDetail result={item}/>
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        marginBottom:10,
    },
    titleStyle:{
        fontSize:25,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,
    },
    listStyle:{

    }

});
export default withNavigation(ResultsList);