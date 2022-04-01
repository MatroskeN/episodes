import css from './Wrapper.module.scss';
import React, {useEffect, useState} from "react";
import Item from "../Item/Item";
import {Form, Button} from "react-bootstrap";

interface IEpisodes {
    id: Number
    name: String
    air_date: String
    episode: String
    characters: Array<String>
    created: String
}

interface ISearch {
    search: String
}

function Wrapper() {
    const [eps, setEps] = useState<IEpisodes [] | []>([])
    const [error, setError] = useState({})

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(response => response.json())
            .then(res => setEps(res.results.slice(0, 20)))
            .catch(err => setError(err))
    }, [])


    const [filteredData, setFilteredData] = useState<IEpisodes [] | []>([])

    useEffect(() => {
        setFilteredData(eps)
    }, [eps])

    const [inputValue, setInputValue] = useState("")

    const searchCard = () => {
        const value = inputValue.toLowerCase()
        setFilteredData(eps.filter(episode => episode.name.toLowerCase().includes(value)))
    }

    return (
        <div className={css.root}>
            <Form.Label>Enter the name of the episode</Form.Label>
            <Form.Control type={'text'} placeholder={'Enter'} id={'sortName'} name={'sortName'}
                          onChange={(e) => setInputValue(e.target.value)}></Form.Control>
            <br/>
            <Button type="button" variant={'dark'} onClick={searchCard}>
                Search
            </Button>

            <div className={css.wrapper}>
                {
                    filteredData.map((episode) => {
                        return (
                            <Item title={episode.name} date={episode.air_date} number={episode.episode} id={episode.id}
                                  characters={episode.characters}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Wrapper;