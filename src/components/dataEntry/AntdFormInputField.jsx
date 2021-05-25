import React from 'react';
import { Form, Input } from 'antd';


const AntdFormInputField = ({name, label}) => {

    return(
        <div
         //CUSTOM STYLE CAN BE PLACED HERE
        >
            <Form.Item name={name} label={label}>
                <Input />
            </Form.Item>
        </div>
    );
}

export default AntdFormInputField;