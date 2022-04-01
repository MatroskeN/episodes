import css from './SingleCard.module.scss';
import {useLocation} from 'react-router-dom';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


interface ICharacter {
    image: string
    name: string
    gender: string
    status: string
}

function SingleCard() {
    const location = useLocation()
    const data = location.state

    const [eps, setEps] = useState([])

    const [char, setChar] = useState<ICharacter [] | []>([])
    const [error, setError] = useState({})


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode/' + data)
            .then(response => response.json())
            .then(async (res) => {
                let character: string = '';
                res.characters.map((characters: string) => {
                    character += (characters.split('https://rickandmortyapi.com/api/character/')[1]) + ',';
                })

                await fetch('https://rickandmortyapi.com/api/character/' + character)
                    .then(response => response.json())
                    .then((res) => {
                        setChar(res)
                    })
            })
            .catch(err => setError(err))

    }, [])


    return (
        <div className={css.root}>
            <h2 className="title">
                All the characters mentioned in the episode
            </h2>
            <div className={css.carousel}>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 320,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 600,
                            slidesPerView: 2,
                        },
                        1024: {
                            width: 1024,
                            slidesPerView: 3,
                            centeredSlides: false,
                        }
                    }}
                >
                    {
                        char.map((characters) => {
                            return (
                                <SwiperSlide>
                                    <Card className={css.card} style={{width: '18rem'}}>
                                        <Card.Img variant="top" src={characters.image}/>
                                        <Card.Body>
                                            <Card.Title>{characters.name}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Gender: {characters.gender}</ListGroupItem>
                                            <ListGroupItem>Status: {characters.status}</ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <h5 className={css.swipe}>
                {"<< Swipe with thumb >>"}
            </h5>
        </div>
    )
}

export default SingleCard;