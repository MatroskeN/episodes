import css from './SingleCard.module.scss';
import {useLocation} from 'react-router-dom';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Autoplay } from 'swiper';


interface ICharacter {
    image: string
    name: string
    gender: string
    status: string
}

function SingleCard() {
    SwiperCore.use([Autoplay]);

    const location = useLocation()
    const data = location.state


    const [char, setChar] = useState<ICharacter [] | []>([])
    const [error, setError] = useState({})
    const [title, setTitle] = useState('')


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode/' + data)
            .then(response => response.json())
            .then(async (res) => {
                let character: string = '';
                setTitle(res.name)
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
                {title}
            </h2>
            <h4>
                Все персонажи, упоминаемые в эпизоде
            </h4>
            <div className={css.carousel}>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false
                    }}
                    spaceBetween={0}
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            width: 320,
                            slidesPerView: 1,
                        },
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
                                            <ListGroupItem>Гендер: {characters.gender}</ListGroupItem>
                                            <ListGroupItem>Статус: {characters.status}</ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <h5 className={css.swipe}>
                {"<< Пролистывайте пальцем >>"}
            </h5>
        </div>
    )
}

export default SingleCard;