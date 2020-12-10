import React from 'react';
import {FlatList, View, StyleSheet,} from 'react-native';
import { useSelector } from 'react-redux';

import News from "./newsCard";



export const NewsList = _ => {
    const news = useSelector(state => state.news);
    
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