import React from 'react';
import { Form } from 'antd';
import AntdFormInputField from '../components/dataEntry/AntdFormInputField';
import AntdFormInputPasswordField from '../components/dataEntry/AntdFormInputPasswordField';
import AntdButton from '../components/dataDisplay/AntdButton';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

let validations = {
    password: [{
        required: true,
        message: 'Input your password please!'
    }]
}


const Demo = () => {
 
    const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

      <AntdFormInputField name="username" label="Username" />
      <AntdFormInputPasswordField name="password" label="Password" rules={validations['password']}/>

      <AntdButton name="Submit" type="primary" htmlType="submit"/>
    </Form>
  );
};

export default Demo;