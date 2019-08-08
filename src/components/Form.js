import React from 'react'
import { Form, Input, Row, Col, Button } from 'antd'

const FormItem = Form.Item
class Component extends React.Component{
    state = {
    }
    setValue = e => {
        this.setState({ value: e.target.value })
    }
    handleSubmit = formVals => {
        console.log(formVals);
    }
    validate = _ => {
        const { form: { validateFields } } = this.props
        validateFields((err, values) => {
            if (err){
                console.log(err)
                return
            }
            console.log(values)
        })
    }
    render(){
        const {
            form: {
                getFieldDecorator,
            },
        } = this.props
        const formLayout = {
            wrapperCol: { span: 20 },
            labelCol: { span: 4 }
        }
        return (
            <Form>
                <Row>
                    <Col span={4}>
                        <FormItem {...formLayout} label="name">
                            {getFieldDecorator('name', {
                                rules: [{ required: true }]
                            })(
                                <Input placeholder="请输入姓名" />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={4}>
                        <Button onClick={this.validate}>提交</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default Form.create({})(Component)

