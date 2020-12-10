import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';


export  const News = ({id, featuredImage, description, title, publishedAt, style}) => {
    const {colors, dark} = useTheme();
    const navigation = useNavigation()
    return(
        <TouchableOpacity activeOpacity={0.7} style={[styles.card, style]}  onPress={() => navigation.navigate('SingleNewsView', {id})}>
            <View style={styles.card}>
                <Image style={styles.mealImage} source={featuredImage} />
               <View style={styles.detail}>
                    <Text style={styles.header}>{title}</Text>
                    <Text style={styles.desc}>{description}</Text>
               </View>
               
                <Text style={styles.eta}>{publishedAt}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default News


const styles = StyleSheet.create({
    card: {
        position: "relative",
        marginBottom: 20,
    },
    mealImage: {
        width: '100%',
        height: 250,
    },
    detail: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    rateSec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
    },
    desc: {
        textTransform: 'capitalize',
        fontFamily: 'OpenSans_400Regular',
    },
    eta: {
        position: 'absolute',
        bottom: 75,
        right: 30,
        width: 130,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        fontFamily: 'Montserrat_700Bold',
        elevation: 2,

    }
})