import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, url, thumbnailUrl} = album;
    const {thumbnailStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                    style = {thumbnailStyle}
                    source={{ uri: thumbnailUrl}} />
                </View>
                <View style = {headerContentStyle}>
                    <Text style = {headerTextStyle}>{title}</Text>        
                    <Text>{url}</Text>
                </View>
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },
    
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItem: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;