import React, {ReactElement, FC} from "react";
import css from './Item.module.scss';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

const Item: FC<any> = (): ReactElement => {
    return (
        <Card style={{ width: '18rem' }} className={css.card}>
            <Card.Img variant="top" src="/logo.png" className={css.cardPic} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Item;