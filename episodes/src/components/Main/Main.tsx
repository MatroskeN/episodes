import React, {ReactElement, FC} from "react";
import { useState, useEffect} from "react";
import css from './Main.module.scss';
import {Container} from "react-bootstrap";
import Item from './Item/Item';


function Main() {

    const [eps, setEps] = useState([])
    const [error, setError] = useState({})

    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/episode')
            .then(response => response.json())
            .then(res => setEps(res.results.slice(0,10)))
            .catch(err => setError(err))
    }, [])

    return (
        <Container className={'p-3'}>
            <div className={css.wrapper}>
                {
                    eps.map((episode) => {
                        return(
                            <Item title={episode['name']} date={episode['air_date']} number={episode['episode']} />
                        )
                    })
                }
            </div>
        </Container>
    );
};

export default Main;