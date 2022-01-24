import React from "react";
import { Avatar, Result, Button, Badge } from "antd";
import { UserOutlined } from '@ant-design/icons';

import { EditUserForm } from "modules";

import './userInfo.scss';
import { Link } from "react-router-dom";

const UserInfo = ({ isEditting, user, setEditting }) => {

    return (
        
        <div className={'user_info_page'}>
            {
                !user.isAuthenticated  ? (
                    <Result
                        status="403"
                        title="403"
                        subTitle="You need to login first"
                        extra={ [
                            <Link to="/" key="home" ><Button >Back Home</Button></Link>,
                            <Link to="/login" key="login" > <Button type="primary" >Login</Button> </Link>
                        ]}
                    />
                ) : user.isAuthenticated && !isEditting ? ( 
                    <div className={"user_info_page--container container"} >
                        <h1 className={ 'user_info_page--title' } >This is your acount info page</h1>
                        
                        <div className={ 'user_info_page--info_block' }>
                            <div className={'user_info_page--avatar'}>
                                <Badge 
                                    dot
                                    size="large" 
                                    status={ user.userInfo.isActivated ? 'success' : 'warning' }
                                    title={ user.userInfo.isActivated ? 'Your email is confirmed' : 'You need to confirm your email' }
                                    offset={[-11,11]}
                                >
                                    <Avatar size={90} icon={<UserOutlined />} />
                                </Badge>
                            </div>
                            <div className={'user_info_page--name user_info_page--info '}>
                                Name: <span> { user.userInfo.name ? user.userInfo.name : '' } </span>
                            </div>
                            <div className={'user_info_page--last_name user_info_page--info '}>
                                Last Name: <span>{ user.userInfo.lastName? user.userInfo.lastName : 'Add last name first' } </span>
                            </div>
                            <div className={'user_info_page--email user_info_page--info '}>
                                Email: <span>{ user.userInfo.email } </span>
                            </div>
                            <div className={'user_info_page--phone user_info_page--info '}>
                                Phone: <span>{ user.userInfo.phone ? user.userInfo.phone : 'Add phone number first' } </span>
                            </div>
                            <div className={'user_info_page--edit_button '}>
                                <Button type="primary" onClick={setEditting} > Edit your account info </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={"user_info_page--container container"} >
                        <h1 className={ 'user_info_page--title' } > Edit your account info </h1>
                        <EditUserForm />
                    </div>
                )
            }
            
        </div>
    );
}

export default UserInfo;