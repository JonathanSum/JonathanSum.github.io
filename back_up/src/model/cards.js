export default {
    namespace: 'cards',
    state: {
        cardsList: [
            {
              id: 1,
              name: 'umi',
              desc: '极快的类 Next.js 的 React 应用框架。',
              url: 'https://umijs.org'
            },
            {
              id: 2,
              name: 'antd',
              desc: '一个服务于企业级产品的设计体系。',
              url: 'https://ant.design/index-cn'
            },
            {
              id: 3,
              name: 'antd-pro',
              desc: '一个服务于企业级产品的设计体系。',
              url: 'https://ant.design/index-cn'
            }
          ],
        statistic: {
            result: [
                { genre: 'Sugar', sold: 200 },
                { genre: 'Salt', sold: 1150 },
                { genre: 'Water', sold: 110 },
                { genre: 'Tea', sold: 400 },
                { genre: 'Other', sold: 120 },
              ]
        },

      },
    }