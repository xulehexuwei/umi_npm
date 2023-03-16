import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'xuwei project',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
    {
      name: ' 我的开发',
      path: '/myapp',
      component: './Myapp',
  },
  {
    name: ' 表格展示',
    path: '/table_show',
    component: './TableShow',
},
  {
    name: ' 弹窗测试',
    path: '/tanchuang',
    component: './tanchuang',
},
{
  name: ' 用户登录',
  path: '/login',
  component: './login',
},
{
  name: ' 测试用',
  path: '/test',
  component: './test',
},
  ],
  npmClient: 'npm',
});

