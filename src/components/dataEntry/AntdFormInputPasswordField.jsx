import React from 'react';
import { Form, Input } from 'antd';


const AntdFormInputPasswordField = ({name, label, rules}) => {

    return(
        <div
            //CUSTOM STYLE CAN BE PLACED HERE
        >
            <Form.Item
                label={label}
                name={name}
                rules={rules}
            >
                <Input.Password />
             </Form.Item>
        </div>
    );
}

export default AntdFormInputPasswordField;