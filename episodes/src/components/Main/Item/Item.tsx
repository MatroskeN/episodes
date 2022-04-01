import React, {ReactElement, FC} from "react";
import css from './Item.module.scss';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

interface Props {
    title: String
    date: String
    number: String
}

const Item: FC<Props> = ({title,date, number}): ReactElement => {
    return (
        <Card style={{ width: '18rem' }} className={css.card}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Episode: {number}</ListGroupItem>
                <ListGroupItem>Air date: {date}</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">
                    Episode link
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Item;