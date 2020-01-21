// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [

        {
          path: '/',
          component: './Helloworld',
        },
        {
          path: '/helloworld',
          component: './Helloworld'
        },

        { path: 'list', component: '../pages/list' },
        { path: 'puzzlecards', component: './puzzlecards' },
        { path: 'samplechart', component: '../components/SampleChart' },
        {
          path: '/dashboard',
          routes: [
            { path: '/dashboard/analysis', component: './Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: './Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: './Dashboard/Workplace' },

          ]
        },

        // {
        //   path: '/products',
        //   component: './products',
        // },
        // {
        //   path: '/',
        //   component: '../pages/index',
        // },
      ],
    },
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
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'saltAndSugar',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
        locale: {
          enable: true,
          default: 'zh-CN',
          baseNavigator: true,
        },

      },

    ], ['umi-plugin-gh-pages'],
  ],
};
