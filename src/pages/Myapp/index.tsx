import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import React, { Component,PureComponent,ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import styles from './index.less';
import axios from "axios";
import { BaseTable } from 'ali-react-table';
import * as constant from '@/constants/index';

function Welcome(props) {
  return <div className={styles.welcome}>Hello, {props.name}, age: {props.age}</div>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 

  tick() {
    this.setState({
      date: new Date()
    });
  }
 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


function BasicUsage() {
  const dataSource = [
    { prov: '湖北省', confirm: 54406, cure: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirm: 1294, cure: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirm: 1212, cure: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirm: 1162, cure: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirm: 1001, cure: 417, dead: 2, t: '2020-02-15 19:52:02' },
  ]

  const columns = [
    { code: 'prov', name: '省份', width: 150 },
    { code: 'confirm', name: '确诊', width: 100, align: 'right' },
    { code: 'cure', name: '治愈', width: 100, align: 'right' },
    { code: 'dead', name: '死亡', width: 100, align: 'right' },
    { code: 't', name: '更新时间', width: 180 },
  ]
  return <BaseTable dataSource={dataSource} columns={columns} />
}


function RequestAxios() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(constant.NewsUrl).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.data.title}</h1>
      <p>{post.data.introduction}</p>
    </div>
  );
}



function TableShow() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(constant.CoverUrl).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const dataSource = post.data
  const columns = [
    { code: 'id', name: 'id', width: 50 },
    { code: 'cover', name: '封面url', features: { autoWidth: true }, align: 'right' },
    { code: 'cover_logo', name: '封面logo url', features: { autoWidth: true }, align: 'right' },
    { code: 'cover_name', name: '封面名称', width: 100, align: 'right' },
    { code: 'create_time', name: '创建时间', width: 180 },
    { code: 'title', name: '名称', width: 180 },
    { code: 'view', name: '访问量', width: 180 },
  ]
  return <BaseTable dataSource={dataSource} columns={columns} />
}

class LoggingButton extends React.Component {
  handleClick() {
    // Alert.alert('我是标题','我是内容我是内容',[{text:"知道了", onPress: () => {}}])
  }
 
  render() {
    //  这个语法确保了 `this` 绑定在  handleClick 中
    return (
      <button onClick={ this.handleClick }>
        Click me
      </button>
    );
  }
}

import Alert from "../popups/alert.jsx";
class Two extends Component {
	constructor(props){
		super(props);
		this.state = {
			num:-1
		};
	}

	open=()=>{
    this.setState({ num: this.state.num + 1 });
		Alert.open({
			alertTip:"这是一个测试弹框",
			closeAlert:function(){
				console.log("关闭了...");
			}
		});
	}
  render() {
    return (
       <div className="Two">
        	Two
		<button onClick={this.open}>
			 开启宝藏
		</button>	
        	<div>当前开启次数：{this.state.num + 1}</div>
       </div>
    );
  }
}


const MyApp: React.FC = () => {
  return (
    <PageContainer ghost>

      <Clock/>

      <Two/>

      <div>
        <Welcome name="Sara" age="1"/>
        <Welcome name="Cahal" age="2" />
        <Welcome name="Edite" age="3" />
      </div>

      <BasicUsage/>
      <RequestAxios/>
      <TableShow/>
    </PageContainer>
  );
};

export default MyApp;
