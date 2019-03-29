import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Row } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroller';

import PhotoCard from './components/photo-card';
import { getPhotos, setPhotosFilters } from './actions';
import SearchBar from '../../components/search-bar';

class PhotosPage extends Component { 
    
    componentDidMount() {
        // this.getPhotos();
    }

    handleSubmit = (values) => {
        this.props.setPhotosFilters({tags: values.text, names: []});
        return;
    }

    getPhotos = () => {
        const { pagesInfo, getPhotos, photoFilters } = this.props;

        getPhotos({
            page: pagesInfo.page + 1,
            per_page: 20,
            tags: photoFilters.tags.join(','),
            extras: 'tags,description,url_o,url_c',
            format: 'json',
            method: 'flickr.photos.search',
            api_key: 'acd37d46e39973a36b1b2923a6777cfa',
            tag_mode: 'all',
        });
    }

    render() {
        const { photos, pagesInfo } = this.props;

        const photoCards = photos.map((photo, index) => <PhotoCard key={index} {...photo}/>);
        return (
            <Container>
                <SearchBar handleSubmit={this.handleSubmit}/>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.getPhotos}
                    hasMore={pagesInfo.pages === undefined || pagesInfo.pages > pagesInfo.page}
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
    photos: state.photosReducer.photos,
    photoFilters: state.photosReducer.filters,
    pagesInfo: state.photosReducer.pagesInfo
});

const mapDispatchToProps = dispatch => ({
    getPhotos: (data) => dispatch(getPhotos(data)),
    setPhotosFilters: (data) => dispatch(setPhotosFilters(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);