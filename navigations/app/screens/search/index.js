import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native'
import { useTheme } from '@react-navigation/native';
import { Header } from "../../../../components/header"
import FocusAwareStatusBar from '../../../../components/statusBar';
import { SearchInput } from '../../../../components/input';

export const SearchScreen = ({}) => {
    const {colors, dark} = useTheme();
    const [search, setSearch] = useState();
    return (
        <View style={[styles.container]}>
            <Header name="Search" />
            <View style={{paddingHorizontal: 15, marginVertical: 15}}>
                <SearchInput value={search} style={{paddingVertical: 0, backgroundColor: colors.card}} placeholder="Properties, Article" />
            </View>
            <FocusAwareStatusBar barStyle={dark? 'light-content': 'dark-content' } backgroundColor={colors.card} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});