import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Row } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroller';

import PhotoCard from './components/photo-card';
import { getPhotos } from './actions';
import SearchBar from '../../components/search-bar';

class PhotosPage extends Component { 
    
    componentDidMount() {
        // this.props.getPhotos();
    }

    handleSubmit = (values) => {
        this.props.getPhotos({tags: values.text});
        return;
    }

    render() {
        const photoCards = this.props.photos.map((photo, index) => <PhotoCard key={index} {...photo}/>);
        return (
            <Container>
                <SearchBar handleSubmit={this.handleSubmit}/>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.props.getPhotos}
                    hasMore={true || false}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <Row>
                        {photoCards}
                    </Row>
                </InfiniteScroll>            
            </Container>
        )
     }
}

const mapStateToProps = state => ({
    photos: state.photosReducer
});

const mapDispatchToProps = dispatch => ({
    getPhotos: (data) => dispatch(getPhotos(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);