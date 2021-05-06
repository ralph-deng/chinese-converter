import * as React from 'react';
import axios from 'axios';
import InputPanel from '../components/InputPanel';
import OutputPanel from '../components/OutputPanel';
import {Layout, Row} from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const {Header, Footer, Content} = Layout;

class App extends React.Component {
  state = {convertedText: ''};
  connect = axios.create({baseURL: 'http://localhost:8000/api'});

  convert = async (text: string, option: string):Promise<void> => {
    try {
      const {data} = await this.connect.get(`/${option}/${text}`);
      this.setState({convertedText: data.converted});
    } catch (err) {
      console.log(err);
    }
  }

  onInputChange = (input: string, option: string):void => {
    this.convert(input, option);
  }

  render() {
    return (
      <Layout>
        <Header>Chinese Converter</Header>
        <Content>
          <Row>
            <InputPanel onInputChange={this.onInputChange} />
            <OutputPanel convertedText={this.state.convertedText} />
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default App;