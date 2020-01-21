import { join } from 'path';

export default {
  singular: true,
  base: '/ant-design-project0/',
  publicPath: '/ant-design-project0/',
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
        default: 'zh-CN',
        baseNavigator: true,
      },
    }],
    ['umi-plugin-gh-pages'],
  ],
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: 'Helloworld',
        },
        {
          path: '/helloworld',
          component: 'Helloworld'
        },

        { path: 'list', component: '../page/list' },
        { path: 'puzzlecards', component: './puzzlecards' },
        { path: 'samplechart', component: '../component/SampleChart' },
        {
          path: '/dashboard',
          routes: [
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },

          ]
        },

      ],

    }
  ],
  proxy: {
    '/jokes': {
      target: 'https://official-joke-api.appspot.com',
      changeOrigin: true,
    }
  },
  theme: {
    "@primary-color": "#30b767", // green,
  },

};