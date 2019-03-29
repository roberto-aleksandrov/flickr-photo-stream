import React from 'react';
import { take } from 'ramda';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';
import './photo-card.css';

const PhotoCard = ({link, title, tags, owner, id, url_c, url_o}) => {
  return (
      <Col className='photo-card' xl={3} md={4} sm={6}>
        <Card>
          <CardImg top width="100%" height="200px" src={url_o || url_c} alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <CardLink href={`https://www.flickr.com/photos/${owner}/${id}`}>{take(20)(title)}</CardLink>
              <span> by </span>
              <CardLink href={link}>{take(20)(owner)}</CardLink>
            </CardTitle>
            <CardSubtitle className='photo-card-tags'>Tags: {`${take(20)(tags)}${tags.length > 20 ? '...' : ''}` || 'No tags'}</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
  );
};

export default PhotoCard;