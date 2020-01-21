let data = [
  {
    id: 1,
    name: 'Happy Sugar Life',
    desc: 'My Fav Anime',
    url: 'https://happysugarlife.org'
  },
  {
    id: 2,
    name: 'Sugar',
    desc: 'Female',
    url: 'https://sugar.com'
  },
  {
    id: 3,
    name: 'Salt',
    desc: 'Sugar\'s family memeber',
    url: 'https://salt.com'
  }
];

export default {
  'get /api/cards': function (req, res, next) {
    setTimeout(() => {
      res.json({
        result: data,
      })
    }, 250)
  },
  'delete /api/cards/:id': function (req, res, next) {
    data = data.filter(v => v.id !== parseInt(req.params.id));
    console.log(req.params.id);
    console.log(data);
    setTimeout(() => {
      res.json({
        success: true,
      })
    }, 250)
  },
  'post /api/cards/add': function (req, res, next) {
    data = [...data, {
      ...req.body,
      id: data[data.length - 1].id + 1,
    }];
    
    res.json({
      success: true,
    });
  },
  'get /api/cards/:id/statistic': function (req, res, next) {
    res.json({
      result: [
        { genre: 'Sugar', sold: 275 },
        { genre: 'Salt', sold: 1150 },
        { genre: 'Happy Sugar Life', sold: 120 },
        { genre: 'Sugar\s aunt', sold: 350 },
        { genre: 'Other', sold: 150 },
      ]
    });
  },
}
