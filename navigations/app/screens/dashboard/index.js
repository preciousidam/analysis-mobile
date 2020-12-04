import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar } from 'react-native-elements';
import { View, TouchableOpacity, Text } from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Dashboard from './Dashboard';
import { useTheme } from '@react-navigation/native';
import PropertyNavigator from '../properties';
import ClaimNavigator from '../claims';



const Tab = createBottomTabNavigator();

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

                    else if (route.name === 'More'){
                        iconType = <Ionicon name='ios-menu' size={size} color={color} />;
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
                 component={ClaimNavigator}
            />
            <Screen
                name="More"
                component={ClaimNavigator}
            />
        </Navigator>
    );
}
