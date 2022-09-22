import React from "react";
import { Upload, Form, Button, Avatar } from "antd";
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

const UserAvatarForm = (props) => {

    return(
        <Form 
            
        >
            {
                props.user.avatar ? (
                    <Avatar size={90} src={`http://localhost:3000/avatars/${props.user.avatar}`} />
                ) : (<Avatar size={90} icon={<UserOutlined />} />)
            }
            
            <ImgCrop 
                shape={'round'}
                rotate
                onModalOk={props.handleSubmit}
            >
                <Upload 
                    fileList={props.fileList}
                    // onChange={props.handleChange}
                    customRequest={props.handleChange}
                >
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
                {/* <Button onClick={props.handleSubmit} type="submit"> Upload </Button> */}
            </ImgCrop>
        </Form>

    )
}

export default UserAvatarForm;