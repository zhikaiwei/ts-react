import React, { useState } from "react";
import { Form, Input, Icon, Checkbox, Button } from "antd";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { FormComponentProps } from "antd/lib/form";
import styles from "./styles.scss";

interface PageProps extends RouteComponentProps, FormComponentProps {}

const Page: React.FC<PageProps> = props => {
  const [stateUserName, setUserName] = useState<string>("");
  const [statePassword, setPassword] = useState<string>("");
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        if (stateUserName === "zhikaiwei" && statePassword === "123456") {
          setUserName(values.Username);
          setPassword(values.Password);
          props.history.replace({ pathname: "/about" });
        }
      }
    });
    return;
  };
  return (
    <div className={styles.wapper}>
      <Form onSubmit={handleSubmit} className={styles.loginForm}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className={styles.loginFormForgot} href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.loginFormButton}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withRouter(
  Form.create<PageProps>({ name: "login" })(Page)
);
