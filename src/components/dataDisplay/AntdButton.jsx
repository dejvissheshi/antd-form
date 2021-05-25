import React from 'react';
import { Form, Button } from 'antd';


const AntdButton = ({type, htmlType, name}) => {

    const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };

    return(
        <div
         //CUSTOM STYLE CAN BE PLACED HERE
        >
            <Form.Item {...tailLayout}>
                <Button type={type} htmlType={htmlType}>
                    {name}
                </Button>
            </Form.Item>
        </div>
    );
}

export default AntdButton;