import React, { useEffect } from 'react';
import { View, Text, StyleSheet, processColor } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";


export const PriceChart = ({rents}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignSelf: "flex-start", }}>
                <MaterialCommunityIcons name="chart-bar" size={24} style={styles.icon} />
                <Text style={styles.sectionHeader}>Price Trend</Text>
            </View>
            <View style={{}}>
                <VictoryChart width={400} theme={VictoryTheme.material} padding={{top: 30, left:70, right:70, bottom:40}}>
                    <VictoryBar data={rents} x="year" y="amount" />
                </VictoryChart>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
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
});