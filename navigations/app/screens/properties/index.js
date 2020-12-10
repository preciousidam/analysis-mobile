import { useTheme } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PropertyListView } from './list';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const  PropertyNavigator = ({navigation}) => {
    const {Navigator, Screen} = Tab;
    const areas = [ 'ikoyi', 'lekki', 'oniru', 'vi' ]
    return (
        <Navigator>
            {areas.map(area => (
                <Screen
                    key={area}
                    component={PropertyListView}
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

export const StackNavigator = ({}) => {
    const {Navigator, Screen} = Stack;

    return (
        <Navigator>
            <Screen
                name="app_root"
                component={PropertyNavigator}
                options={{
                    title: 'Properties',
                }}
            />
        </Navigator>
    )
}

export default StackNavigator;