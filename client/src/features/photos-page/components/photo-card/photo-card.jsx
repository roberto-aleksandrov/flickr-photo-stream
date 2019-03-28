import React from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardLink, CardSubtitle, Button } from 'reactstrap';

const PhotoCard = ({link, title, media, tags}) => {
  return (
      <Col md={4}>
        <Card>
          <CardImg top width="100%" height="200px" src={media.m} alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <CardLink href={link}>{title}</CardLink>
            </CardTitle>
            <CardSubtitle>Tags: {tags}</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
  );
};

export default PhotoCard;