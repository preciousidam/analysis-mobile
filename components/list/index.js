import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, FlatList, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-elements';

import {useTheme} from '@react-navigation/native';


export default function List({data, onPress}){

    const {colors} = useTheme();
    
    const renderItems = ({item, index}) => (
        <ListItem {...item} onPress={_ => onPress(item.id)} />
    );

    return(
        <View style={styles.container}>
            <FlatList
                key={1}
                data={data}
                keyExtractor={({title}, index) => title+index}
                renderItem={renderItems}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={_ => <View style={{ width: '100%', height: 1, backgroundColor: colors.seperator}} />}
            />
        </View>
    )
}

export function ListItem({name, onPress}){
    const {colors} = useTheme();
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.7}>
            <View style={styles.item}>
                <View>
                    <Text>{name[0]}</Text>
                </View>
                <View>
                    <Text>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
    item: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
});