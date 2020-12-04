import { useTheme } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PolicyListView } from './list';
import NewPolicy from './new';





const Tab = createMaterialTopTabNavigator();

export default function PolicyNavigator({navigation}){
    const {Navigator, Screen} = Tab;
    const areas = [ 'ikoyi', 'lekki', 'oniru', 'vi' ]
    return (
        <Navigator>
            {areas.map(area => (
                <Screen
                    key={area}
                    component={PolicyListView}
                    name={area.toUpperCase()}
                    options={{
                        headerShown: false,
                        title: area.toUpperCase()
                    }}
                    initialParams={{area}}
                />
            ))}
        </Navigator>
    )
}