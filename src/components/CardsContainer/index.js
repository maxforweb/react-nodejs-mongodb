import React from 'react';
import classNames from 'classnames';
import { Select, Empty } from 'antd';

import {Card} from 'components'

import './cardsContainer.scss';

const CardsContainer = ({ items, onSelectChange, selectValue }) => {
    const { Option } = Select;

    return (
        <>
            <Select 
                value={selectValue}
                onChange={ onSelectChange}
            >
                <Option value="new">Newest</Option>
                <Option value="old">Oldest</Option>
                <Option value="high"> High rating </Option>
                <Option value="low"> Low rating </Option>
            </Select>
            <div className={classNames('cards_container')}>
                
                {
                    items.length ? items.map( item => (
                        <Card 
                            cardtitle={item.title}
                            subtitle={item.subTitle}
                            image={item.img}
                            price={item.price}
                            key={item.id}
                        />
                    )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="На данный момент нет никаких объявлений" />
                }
            </div>
        </>
    )
}

export default CardsContainer;