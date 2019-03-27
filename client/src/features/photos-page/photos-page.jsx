import React, { Component } from 'react';
import { connect } from "react-redux";
import { getPhotos } from './actions';

class PhotosPage extends Component { 
    
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        console.log(this.props.photos);
        return <div>hi</div>
     }
}

const mapStateToProps = state => ({
    photos: state.photosReducer
});

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos.default()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);