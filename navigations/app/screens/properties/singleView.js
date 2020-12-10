import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons, MaterialIcons, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import FocusAwareStatusBar from '../../../../components/statusBar';
import { PriceChart } from '../../../../components/charts/priceTrend';
import { TouchableHighlight } from 'react-native-gesture-handler';


export const SinglePropertyView = ({navigation, route}) => {
    const {colors, dark} = useTheme();
    const {params: {id}} = route;
    const property = useSelector(state => state.properties.find(x => x.id === id));

    useEffect(() => {
        navigation.setOptions({
            title: property?.name,
        })
    }, [property]);

    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={[styles.sections, {backgroundColor: colors.card}]}>
                    <View style={{flexDirection: "row"}}>
                        <Ionicons name="ios-map" size={24} style={styles.icon} />
                        <Text style={styles.sectionHeader}>Address</Text>
                    </View>
                    <View style={styles.address}>
                        <Text style={styles.text}>{`${property?.address}, ${property?.area}, ${property?.state}`}</Text>
                    </View>
                </View>
                <View style={[styles.sections, {backgroundColor: colors.card},]}>
                    <View style={[styles.details, {marginBottom: 15}]}>
                        <View style={{flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}>
                            <Ionicons name="md-bed" size={24} style={styles.icon} />
                            <Text style={styles.text}>{property?.bedrooms} Bedroom</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}>
                            <Ionicons name="md-calendar" size={24} style={styles.icon} />
                            <Text style={styles.text}>Built {property?.built}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}>
                            <Fontisto name="nav-icon-grid" size={16} style={styles.icon} />
                            <Text style={styles.text}>{property?.units} units</Text>
                        </View>
                    </View>
                    <View style={styles.details}>
                        <View style={{flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}>
                            <MaterialIcons name="landscape" size={24} style={styles.icon} />
                            <Text style={styles.text}>{property?.land_size}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}>
                            <MaterialCommunityIcons name="stairs" size={24} style={styles.icon} />
                            <Text style={styles.text}>{property?.floors} Floors</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}>
                            <MaterialCommunityIcons name="toilet" size={24} style={styles.icon} />
                            <Text style={styles.text}>{property?.bedrooms+1} Toilets</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.sections, {backgroundColor: colors.card}]}>
                    <View style={[styles.rent]}>
                        <View style={[styles.innerRent, {borderRightWidth: .5,}]}>
                            <Text style={[styles.hder, {color: colors.secondary}]}>Rent</Text>
                            <Text 
                                style={[styles.value, {paddingBottom: 10,}]}
                            >
                                {`${'\u20A6'} ${property?.rents[property?.rents.length - 1]?.amount}`}
                            </Text>
                        </View>
                        <View style={[styles.innerRent]}>
                            <Text style={[styles.hder, {color: colors.secondary, paddingLeft: 10}]}>Sale Price</Text>
                            <Text style={[styles.value, {paddingLeft: 10}]}>{`${'\u20A6'} ${property?.sale_price? property?.sale_price: '--'}`}</Text>
                        </View>
                    </View>
                    <View style={[styles.service]}>
                        <View style={[styles.innerRent, {borderRightWidth: 0.5,}]}>
                            <Text style={[styles.hder, {color: colors.secondary, paddingTop: 10}]}>Service Charge</Text>
                            <Text style={styles.value}>{`${'\u20A6'} ${property?.serv_charge}`}</Text>
                        </View>
                        <View style={[styles.innerRent]}>
                            <Text 
                                style={[styles.hder, {color: colors.secondary, paddingLeft: 10, paddingTop: 10}]}
                            >
                                Property Status
                            </Text>
                            <Text style={[styles.value, {paddingLeft: 10}]}>Completed</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.sections, {backgroundColor: colors.card}]}>
                    <PriceChart rents={property?.rents? property?.rents: []} />
                    <TouchableOpacity onPress={_ => navigation.navigate('ComparePropertyView', {id})}>
                        <View>
                            <Text style={[styles.link, {color: colors.success}]}>Compare property</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.sections, {backgroundColor: colors.card},]}>
                    <Text style={styles.sectionHeader}>Property Facilities</Text>
                    <Features data={property?.facilities ? property?.facilities : []} />
                </View>
            </ScrollView>
            <FocusAwareStatusBar barStyle={dark? 'light-content': 'dark-content' } backgroundColor={colors.card} />
        </View>
    );
}

export const Features = ({data}) => {

    return (
        <View style={{flexDirection: "row", flexWrap: "wrap",marginTop: 15,}}>
            {data != "" ? data.split(',').map(x => (
                <View key={x} style={styles.facilities}>
                    <Ionicons name="ios-checkmark" size={20} style={{marginRight: 10, }} />
                    <Text style={{fontFamily: 'OpenSans_400Regular'}}>{x}</Text>
                </View>
            )): null}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        padding: 10,
        flex: 1,
    },
    image: {
        width: '100%',
        height: 250,
    },
    desc: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        marginVertical: 10,
    },
    content: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 15,
        textAlign: 'justify'
    },
    sections: {
        width: '100%',
        padding: 15,
        elevation: 2,
        flexDirection: "column",
        marginVertical: 5,
        flexWrap: "wrap",
    },
    text: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 15,
    },
    icon: {
        marginRight: 10,
    },
    sectionHeader: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        textAlignVertical: "center",
    },
    address: {
        flexDirection: "row",
    },
    details: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    rent: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: '100%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(100,100,100, .3)',
        
    },
    innerRent: {
        flex: 1,
    },
    service: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: '100%',
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(100,100,100, .3)',
    },
    hder: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 14,
    },
    value: {
        fontFamily: "OpenSans_700Bold",
        fontSize: 16,
    },
    link: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 15,
        textTransform: "uppercase",
    },
    facilities: {
        width: '50%',
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    }
});