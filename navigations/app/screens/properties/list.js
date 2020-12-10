import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { useDispatch } from 'react-redux';
import { ActionHeader } from '../../../../components/header';
import PropertyList from '../../../../components/list/properties';
import FocusAwareStatusBar from '../../../../components/statusBar';
import { updateAsync } from '../../../../store/reducers/property';


export const PropertyListView = ({navigation, route}) => {
    const {colors, dark} = useTheme();
    const {navigate} = navigation;
    const {params: {area}} = route;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(updateAsync(area));
    },[area]);

    return (
        <View style={{flex: 1, height: '100%', backgroundColor: colors.card}}>
            <PropertyList area={area} />
            <FocusAwareStatusBar barStyle={dark? 'light-content': 'dark-content' } backgroundColor={colors.card} />
        </View>
    )
}