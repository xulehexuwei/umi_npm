

import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { Link } from 'umi';

type HelloProps = { name: string }

function Hello(props: HelloProps) { return <div>Hello, {props.name}</div>; }


const TanChuang: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainer ghost>

      <Link to="/table_show">表格展示</Link>

      <Hello name="xuwei" />

      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </PageContainer>
  );
};

export default TanChuang;