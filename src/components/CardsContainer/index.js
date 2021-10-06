import React from 'react';
import classNames from 'classnames';
import { Select, Empty, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import {Card} from 'components'

import './cardsContainer.scss';

const CardsContainer = ({ items, onSelectChange, selectValue, onSelectAd, isLoading }) => {
    const { Option } = Select;



    return (
        <>
            <Select 
                value={ selectValue }
                onChange={ onSelectChange }
            >
                <Option value="new">Newest</Option>
                <Option value="old">Oldest</Option>
                <Option value="high"> High rating </Option>
                <Option value="low"> Low rating </Option>
            </Select>
            <div className={classNames('cards_container')}>
                
                {
                    isLoading ? (
                        <Spin size='large' indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} />
                    ): !items.length && !isLoading ? 
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="На данный момент нет никаких объявлений" /> : items && !isLoading ? items.map( item => (
                       
                        <Card 
                            cardtitle={item.title}
                            subtitle={item.subTitle}
                            image={item.img}
                            price={item.price}
                            key={item._id}
                            onSelect={onSelectAd}
                            {...item}
                        />
                    )) : <div>ERROR</div>
                    
                    
                }
            </div>
        </>
    )
}

export default CardsContainer;