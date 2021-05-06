import * as React from 'react';
import {Button, Card, Col, Form, Input, Row} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

interface ChildProps {
  convertedText: string
}

class OutputPanel extends React.Component<ChildProps> {
  render() {
    return (
      <Col xs={24} sm={24} md={12}>
        <Row>
          <Col className="gutter-row" span={12} offset={12}>
            <Button icon={<SearchOutlined />}>Copy</Button>
          </Col>
        </Row>
        <Row>
          <Col className="gutter-row" span={24}>
            <Form>
              <Form.Item>
                <Input.TextArea value={this.props.convertedText} />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default OutputPanel;