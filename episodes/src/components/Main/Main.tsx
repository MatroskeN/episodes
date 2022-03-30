import React, {ReactElement, FC} from "react";
import css from './Main.module.scss';
import {Container} from "react-bootstrap";
import Item from './Item/Item'

const Main: FC<any> = (): ReactElement => {
    return (
        <Container className={'p-3'}>
            <div className={css.wrapper}>
                <Item />
            </div>
        </Container>
    );
};

export default Main;