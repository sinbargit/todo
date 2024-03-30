import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
      // 不展示菜单顶栏
      menuHeaderRender: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
      // 不展示菜单顶栏
      menuHeaderRender: false,
    },
  ],
  npmClient: 'yarn',
});
