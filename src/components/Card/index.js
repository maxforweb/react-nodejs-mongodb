import React from 'react';
import {Link, useRouteMatch, Route, Switch} from 'react-router-dom';

import classNames from 'classnames';
import { Card, Empty, Avatar  } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { AdPage } from '../../pages';

import './card.scss';

const Cards = ( {
    owner,
    cardtitle, 
    subtitle, 
    image, 
    price, 
    _id, 
    onSelect, 
    size} ) => {

    let { path, url } = useRouteMatch();
    console.log(path)
    return (
        <>       
        <Link to={`/post/${_id}`} >
            <Card 
            hoverable
            style={{borderRadius: 15, marginTop: 20}}
            className={classNames('card', {
                'card--small': size === "small",
            })}
            onClick={onSelect.bind(this, _id)}>
                { owner ? (
                <div className={'created__by'}>
                    <div className='created__by--user'>
                    
                        <Avatar size={90} icon={<UserOutlined />} />
                    
                        <div className="created__by--userInfo">
                            <h3 className='created__by--userName'> {owner.fullName} </h3>
                            <p className="created__by--userPhone"> {owner.phone} </p>
                        </div>
                    </div>
                    <div className='created__by--address' >
                        <h3 className="created__by--homeAdress"> {owner.address} </h3>
                        <p className='created__by--area'> {owner.area} </p>
                    </div>
                </div>) : <div></div>
                } 
                <div className="ad__info">
                <h1>{cardtitle}</h1>
                <h3>{subtitle}</h3>
                {
                    image ? <img src={image} alt='flat Image' className='ad__info--cardImage' /> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                }
                
                <p>Price: <span> {price} </span></p>
                </div>
                
            </Card>
        </Link>
        
        {/* <Switch >
            <Route exact path={path} ></Route>
            <Route path={`/ad/:id`}>
                <AdPage />
            </Route>
        </Switch > */}
        </>
    
    )
}


export default Cards;