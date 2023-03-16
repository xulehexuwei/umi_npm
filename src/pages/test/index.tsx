import { Button, Radio } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { DownloadOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './index.less';

function Title(props) {

  return <div className={styles.title}>{props.name}</div>;

}

function Content(props) {
  return <div className={styles.content}>{props.content}</div>;

}

const App: React.FC = () => {
  return (

    <div>
      <Title name="新闻1"></Title>
      <Content content="这是内容1"></Content>

      <Title name="新闻2"></Title>
      <Content content="这是内容2"></Content>
    </div>

  );

};

export default App;  