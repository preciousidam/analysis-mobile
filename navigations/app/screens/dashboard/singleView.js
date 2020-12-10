import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import FocusAwareStatusBar from '../../../../components/statusBar';


export const SingleNewsView = ({navigation, route}) => {
    const {colors, dark} = useTheme();
    const {params: {id}} = route;
    const article = useSelector(state => state.news.find(x => x.id === id));
    useEffect(() => {
        navigation.setOptions({
            title: article?.title,
        })
    }, [article])
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={article?.featuredImage} style={styles.image} />
                <View style={styles.body}>
                    <Text style={styles.desc}>{article?.description}</Text>
                    <Text style={styles.content}>
                        {article?.content}
                    </Text>
                </View>
            </ScrollView>
            <FocusAwareStatusBar barStyle={dark? 'light-content': 'dark-content' } backgroundColor={colors.card} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        padding: 15,
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
    }
});