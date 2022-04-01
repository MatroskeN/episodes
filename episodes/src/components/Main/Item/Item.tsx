import React, {ReactElement, FC} from "react";
import css from './Item.module.scss';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {useState, useEffect} from "react";

interface ICharacter{
    name:string
}

interface Props {
    title: String
    date: String
    number: String
    id: Number
    characters: Array<String>
}

const Item: FC<Props> = ({title,date, number, id, characters}): ReactElement => {
    let characterList:string = '';
    characters.map((character)=>{
        characterList+=(character.split('https://rickandmortyapi.com/api/character/')[1])+',';
    })

    const [char, setChar] = useState<ICharacter [] | []>([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/'+characterList)
            .then(response => response.json())
            .then(res => setChar(res))
    },[])

    return (
        <Card style={{ width: '18rem' }} className={css.card}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Эпизод: {number}</ListGroupItem>
                <ListGroupItem>Дата выхода: {date}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link>
                    <Link to={"/singleCard"}
                    state={id}
                    >Посмотреть всех персонажей</Link>
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Item;