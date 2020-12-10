import { useTheme } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import getLoginClient from '../../../../apiAuth/loggedInClient';
import FocusAwareStatusBar from '../../../../components/statusBar';

const areas = ['ikoyi', 'lekki', 'vi', 'oniru'];
const years = [2016,2017,2018,2019,2020];

export const ComparePropertyView = ({route}) => {
    const {colors, dark} = useTheme();
    const {params: {id}} = route;
    const property = useSelector(state => state.properties.find(x => x.id === id));
    const [similar, setSimilar] = useState([]);
    const [selectedArea, setSelectedArea] = useState(() => areas.filter(x => x != property?.area));

    useEffect(() => {

    }, [property]);

    return (
        <View style={styles.container}>
            <ScrollView>
                {selectedArea.map(x => (
                    <Comparison key={x} area={x} base={property} />
                ))}
            </ScrollView>
            <FocusAwareStatusBar barStyle={dark? 'light-content': 'dark-content' } backgroundColor={colors.card} />
        </View>
    )
}

export const Comparison = ({base, area}) => {
    const [data, setData] = useState(null);
    const [baseData, setBaseData] = useState(null);
    const {colors} = useTheme();

    
    useEffect(() => {
        let temp = new Map([[2016, ''],[2017, ''],[2018, ''],[2019, ''],[2020, '']]);
        base.rents.forEach(({year, amount}) => temp.set(year, amount));
        setBaseData(temp);
    
    }, []);

    const fetch = async _ => {
        let temp = new Map([[2016, ''],[2017, ''],[2018, ''],[2019, ''],[2020, '']]);
        const client = await getLoginClient();
        const {data: {data}} = await client.get(`stats/compare?comarea=${area}&bed=${base?.bedrooms}&type=${base.type}`);
        
        data?.rents?.forEach(({year, amount}) => temp.set(year, amount));
        setData(temp);
        
    }
    useEffect(() => {
        fetch();
    }, []);

    return (
        <View style={[styles.card, {backgroundColor: colors.card}]}>
            <View style={styles.head}>
                <Text style={styles.header}>YEAR</Text>
                <Text style={styles.header}>{base.area.toUpperCase()}</Text>
                <Text style={styles.header}>{area.toUpperCase()}</Text>
            </View>
            {data != null ? years.map(year => (
                <View key={year} style={styles.comp}>
                    <Text style={styles.text}>{year}</Text>
                    <Text style={styles.text}>{baseData.get(year) != '' ? baseData.get(year): '--'}</Text>
                    <Text style={styles.text}>{data.get(year) != ''? data.get(year): '--'}</Text>
                </View>
            )): <ActivityIndicator color={colors.info} size='large' />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        width: '100%',
        padding: 15,
        marginVertical: 15,
    },
    comp: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
        width: '100%',
    },
    text: {
        fontFamily: 'OpenSans_400Regular',
        textAlign: 'left',
        flex: 4,
    },
    header: {
        fontFamily: 'Montserrat_700Bold',
        flex: 4,
    },
    head: {
        paddingVertical: 10, 
        borderBottomWidth: 1, 
        borderBottomColor: '#e8e8e8',
        flexDirection: "row",
        justifyContent: 'space-between'
    }
});