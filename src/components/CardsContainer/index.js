import React from 'react';
import classNames from 'classnames';
import { Select, Empty, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import {Card} from 'components'

import './cardsContainer.scss';

const CardsContainer = ({ items, onSelectChange, sortValue, onSelectAd, isLoading }) => {
    const { Option } = Select;

    return (
        <div className={'container posts_container'}>
            <Select 
                value={ sortValue }
                onChange={ onSelectChange }
                className={ 'posts_sort'}
            >
                <Option value="NEW">Newest</Option>
                <Option value="OLD">Oldest</Option>
                <Option value="HIGH"> High rating </Option>
                <Option value="LOW"> Low rating </Option>
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
                            date={item.createdAt}
                            onSelect={onSelectAd}
                            {...item}
                        />
                    )) : <div>ERROR</div>
                    
                    
                }
            </div>
        </div >
    )
}

export default CardsContainer;