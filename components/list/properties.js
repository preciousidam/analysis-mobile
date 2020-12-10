import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontiso from 'react-native-vector-icons/Fontisto';
import { useSelector } from 'react-redux';

const M = 1000000;
export const PropertiesList = ({area}) => {
    const {colors} = useTheme();
    const data = useSelector(state => state.properties.filter(x => x.area === area));
    const backColors = [colors.info, colors.success, colors.warning, colors['primary-400']];
    
    const {navigate} = useNavigation();
    
    const renderItems = ({item, index}) => (
        <Activity
            {...item}
            color={backColors[index%backColors.length]}
            onPress={_ => navigate('Overview', {id: item.id})}
        />);

    return(
        <View style={styles.container}>
            {data.length <= 0 && <ActivityIndicator color={colors.info} size='large' />}
           <FlatList 
                data={data}
                keyExtractor={(item,i) => item.name+i}
                renderItem={renderItems}
                contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 10, paddingBottom: 50,}}
            />
        </View>
    )
}

export default PropertiesList;

export const Activity = ({ id, name, color, bedrooms, rents, type }) => {
    const {colors} = useTheme();
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={_ => navigation.navigate('SinglePropertyView', {id})} activeOpacity={.7}>
            <View style={styles.item}>
                
                <Text style={[styles.icon, {backgroundColor: color}]}>{name[0]}</Text>
                
                <View style={styles.nameCont}>
                    <Text  style={styles.bold}>{name}</Text>
                    <Text style={styles.subText}>{bedrooms} Bedroom {type}</Text>
                </View>
                <Text style={styles.price}>{`${'\u20A6'} ${rents[rents?.length -1]?.amount/M}M`}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        flex: 1,
    },
    item:{
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 6,
    },
    bold: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 16,
    },
    icon: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        textAlign: "center",
        textAlignVertical: "center",
        color: '#fff',
        marginRight: 15,
        flex: 1.5
    },
    nameCont: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(100,100,100, .3)',
        padding: 15,
        width: '100%',
        flex: 8.5,
    }, 
    subText: {
        color: '#858585',
        fontFamily: 'OpenSans_400Regular'
    },
    price: {
        fontFamily: 'OpenSans_700Bold',
        position: "absolute",
        right: 10,
    }
});