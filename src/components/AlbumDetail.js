import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, url, thumbnailUrl} = album;
    const {thumbnailStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
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

            <CardSection>
                <Image 
                style={imageStyle}
                source = {{ uri: url}}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now!!
                </Button>    

               
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        
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
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;