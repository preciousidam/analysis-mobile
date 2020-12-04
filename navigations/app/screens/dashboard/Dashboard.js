import { useTheme } from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {Header} from '../../../../components/header';
import FocusAwareStatusBar from '../../../../components/statusBar';
import { NewsList } from '../../../../components/news';

export const Dashboard = ({}) => {
    const {colors, dark} = useTheme();

    return (
        <View style={[styles.container, {backgroundColor: colors.card}]}>
            <Header name="News" />
            <NewsList />
            <FocusAwareStatusBar barStyle={dark? 'light-content': 'dark-content' } backgroundColor={colors.card} />
        </View>
    )
}

export default Dashboard;



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    callToAction: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
    },
    callText: {
        textAlign: "center", 
        marginBottom: 20, 
        fontFamily: 'OpenSans_400Regular',
        padding: 5,
    },
    headerText: {
        fontFamily: 'Montserrat_700Bold',
        paddingHorizontal: 15,
    },
    quickAct: {
        paddingHorizontal: 15, 
        marginVertical: 30,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    card: {
        borderRadius: 10,
        padding: 20,
        width: 115,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    h4: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 20,
    },
    text: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 14,
        color: '#fff',
    },
    headerprofile: {
        flexDirection: "row",
    },
    text: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 14,
    },
    update: {
        padding: 10,
        width: '100%',
        marginVertical: 10,
        borderColor: "transparent",
        borderWidth: 1,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: '#fff',
    },
    updateText: {
        fontFamily: 'Montserrat_700Bold',
        marginVertical: 5,
        flex: 9,
    },
    apart: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        flex: 1.5,
        width: 50,
        height: 50,
        backgroundColor: "#a5a5a5",
        borderRadius: 25,
        textAlign: "center",
        textAlignVertical: "center",
    }
});