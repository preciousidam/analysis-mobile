import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontiso from 'react-native-vector-icons/Fontisto';
import { useSelector } from 'react-redux';


export const PropertiesList = ({area}) => {
    const {colors} = useTheme();
    const data = useSelector(state => state.properties.filter(x => x.area === area));
    const backColors = [colors.info, colors.success, colors.warning, colors['primary-400']];
    
    const {navigate} = useNavigation();

    useEffect(() => {
        console.log(data)
    }, [data]);
    
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

export const Activity = ({ name, color }) => {
    const {colors} = useTheme();
    
    return (
        <TouchableOpacity onPress={_ => console.log('property')} activeOpacity={.7}>
            <View style={styles.item}>
                
                <Text style={[styles.icon, {backgroundColor: color}]}>{name[0]}</Text>
                
                <View style={styles.nameCont}>
                    <Text  style={styles.bold}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        marginVertical: 20,
        marginTop: 10,
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
});