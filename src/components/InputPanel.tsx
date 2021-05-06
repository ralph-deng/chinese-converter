import * as React from 'react';
import {Button, Col, Form, Input, Radio, Row} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

interface ChildProps {
  onInputChange: (input: string, option: string) => void
}

class InputPanel extends React.Component<ChildProps> {
  state = {input: '', option: 'sc'};
  options = [
    {label: 'Simplified', value: 'sc'},
    {label: 'Traditional', value: 'tc'},
  ];

  debounce = (func: Function, timeout: number) => {
    let timer: ReturnType<typeof setTimeout>;

    return (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const later = () => {
        clearTimeout(timer);
        func(event);
      };
      clearTimeout(timer);
      timer = setTimeout(later, timeout);
    };
  };

  inputChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({input: event.target.value});
    this.props.onInputChange(this.state.input, this.state.option);
  };

  render() {
    return (
      <Col xs={24} sm={24} md={12}>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
          <Col className="gutter-row" span={12}>
            <Radio.Group value={this.state.option} onChange={e => this.setState({option: e.target.value})} options={this.options} optionType="button" buttonStyle="solid" />
          </Col>
          <Col className="gutter-row" span={12}>
            <Button icon={<SearchOutlined />}>Clear</Button>
          </Col>
        </Row>
        <Row>
          <Col className="gutter-row" span={24}>
            <Form>
              <Form.Item>
                {/* should set value={this.state.option} */}
                <Input.TextArea onChange={this.debounce(this.inputChanged, 500)} placeholder="Please paste or type text here" />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default InputPanel;
