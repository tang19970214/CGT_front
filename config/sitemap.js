const sitemap = {
  path: '/sitemap.xml', // sitemap名稱，不用改
  hostname: 'https://cgt-mix.com/', // 網址
  cacheTime: 1000 * 60 * 15, // 站點路由更新頻率，只在 generate: false有用
  gzip: true, // 生成 .xml.gz 檔的 sitemap
  generate: false, // 允許使用 nuxt generate 生成
  // 排除不要的頁面路由
  exclude: [
    '/404',
    '/backStage/**'
  ],
  routes: async() => {
    const routes = [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/about',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/product',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/skill',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/news',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/contact',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
    ];

    return routes;
  }
}

export default sitemap;