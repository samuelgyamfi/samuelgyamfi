import React, { Component } from 'react';
import {ScrollView, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'


class AlbumList extends Component {

    state = { albums:[] };

    componentDidMount() {
       axios.get('https://jsonplaceholder.typicode.com/photos' )
       .then(response => {
           console.log('albums', response)
           const firstTen = response.data.slice(0,10)
           this.setState({albums: firstTen})
        });
    }

    renderAlbums(){

    return this.state.albums.map(album => 
    <AlbumDetail key={album.title} album={album}/>
        );
    }

   render() { 
       console.log(this.state);

       return(
        <ScrollView>
            {this.renderAlbums()}
            </ScrollView>
    );
   }
};

export default AlbumList;
