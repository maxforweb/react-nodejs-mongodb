import React from "react";
import { Avatar, Result, Button, Badge, Tabs } from "antd";
import { UserOutlined } from '@ant-design/icons';

import { EditUserForm, ChangePasswordForm, UserAvatarForm } from "modules";
import { CardsContainer } from 'containers';

import './userInfo.scss';
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

const UserInfo = ({ isEditting, user, setEditting }) => {

    return (
        
        <div className={'user_info_page container'} >
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="User Info" key="1" >
                    {
                        !user.isAuthenticated  ? (
                            <Result
                                status="403"
                                title="403"
                                subTitle="You need to login first"
                                extra={ [
                                    <Link to="/posts" key="home" ><Button >Back Home</Button></Link>,
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
                                            {
                                                user.userInfo.avatar ? (<Avatar size={90} src={`http://localhost:3000/avatars/${user.userInfo.avatar}`} />) : (<Avatar size={90} icon={<UserOutlined />} />)
                                            }
                                            
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
                                <EditUserForm 
                                    cancelEditting={setEditting}
                                />
                            </div>
                        )
                    }
                </TabPane>
                <TabPane tab="Upload Avatar" key="2">
                    <UserAvatarForm />
                </TabPane>
                <TabPane tab="Change Password" key="3" >
                    <h1 className={ 'user_info_page--title' } > Change Password </h1>
                    <ChangePasswordForm />
                </TabPane>
                <TabPane tab="My Posts" >
                    <CardsContainer 
                        id={ user.userInfo ? user.userInfo.id : '' }
                    />
                </TabPane>
            </Tabs>
            
        </div>
    );
}

export default UserInfo;