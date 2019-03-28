import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Row } from 'reactstrap';

import PhotoCard from './components/photo-card';
import { getPhotos } from './actions';

class PhotosPage extends Component { 
    
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        const photoCards = this.props.photos.map(photo => <PhotoCard {...photo}/>);
        return (
            <Container>
                <Row>
                    {photoCards}
                </Row>
            </Container>
        )
     }
}

const mapStateToProps = state => ({
    photos: state.photosReducer.items
});

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);