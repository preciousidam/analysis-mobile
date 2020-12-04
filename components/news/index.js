import React from 'react';
import {FlatList, View, StyleSheet,} from 'react-native';
import { news } from '../../constants';

import News from "./newsCard";



export const NewsList = _ => {
    
    function item({item}){
        return (
            <News {...item} onPress={_ => console.log(item.id)} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={news}
                renderItem={item}
                keyExtractor={item => item.id+item.title}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        
    }
})