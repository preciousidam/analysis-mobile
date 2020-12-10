import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar } from 'react-native-elements';
import { View, TouchableOpacity, Text } from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Dashboard from './Dashboard';
import { useTheme } from '@react-navigation/native';
import PropertyNavigator from '../properties';
import SettingNavigator from '../profile';
import { SingleNewsView } from './singleView';
import { SinglePropertyView } from '../properties/singleView';
import { ComparePropertyView } from '../properties/compareView';
import { SearchScreen } from '../search';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export const StackNavigator = ({}) => {
    const {Navigator, Screen} = Stack;
    return (
        <Navigator>
            <Screen 
                name="App"
                component={HomeNavigation}
                options={{
                    headerShown: false,
                }}
            />
            <Screen 
                name="SingleNewsView"
                component={SingleNewsView}
                options={{
                    
                }}
            />
            <Screen 
                name="SinglePropertyView"
                component={SinglePropertyView}
                options={{
                    
                }}
            />
            <Screen 
                name="ComparePropertyView"
                component={ComparePropertyView}
                options={{
                    title: 'Similar Properties'
                }}
            />
        </Navigator>
    );
}

export function HomeNavigation({navigation}){
    const {colors} = useTheme();
    const {Navigator, Screen} = Tab;

    return (
        <Navigator
            
            tabBarOptions={{
                style: {
                    
                }
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconType;

                    if (route.name === 'Blog'){
                        iconType = <FontAwesome name="newspaper-o" size={size} color={color} />;
                    }else if (route.name === 'Properties'){
                        iconType = <FontAwesome5 name="building" size={size} color={color} />;
                    }
                    else if (route.name === 'Profile'){
                        iconType = (<Avatar 
                            rounded 
                            size="small" 
                            icon={{name: 'person', type: 'ionicons', color: "#fff"}} 
                             containerStyle={{backgroundColor: focused ? colors.primary: colors.secondary, width: 25, height: 25}}
                        />);
                    }

                    else if (route.name === 'Search'){
                        iconType = <Ionicon name='ios-search' size={size} color={color} />;
                    }

                    return iconType;
                }
            })}
        >
            <Screen
                name="Blog"
                component={Dashboard}
            />
            <Screen
                name="Properties"
                component={PropertyNavigator}
            />
            
            <Screen
                name="Profile"
                 component={SettingNavigator}
            />
            <Screen
                name="Search"
                component={SearchScreen}
            />
        </Navigator>
    );
}
