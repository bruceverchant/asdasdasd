import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

// ----------------------
// Named Export for Next.js
// ----------------------
export const pageConfig: PageConfig = {
  title: "Stavan's Status Page",
  logo: '/logo.webp',
  links: [
    { link: 'https://github.com/systaven', label: 'GitHub' },
    { link: 'https://blog.stavmb.me/', label: 'Blog' },
    { link: 'mailto:bruceverchant@gmail.com', label: 'Email Me', highlight: true },
  ],
}

export const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 10,
  monitors: [
    {
      id: 'foo_monitor',
      name: 'Stavmb blog',
      method: 'GET',
      target: 'https://blog.stavmb.me',
      tooltip: '主要blog',
      statusPageLink: 'https://blog.stavmb.me',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE', // ✅ 已加回
      },
    },

    {
      id: 'openlist_halo_monitor',
      name: 'OpenList 网盘（Halo）',
      method: 'GET',
      target: 'https://halo.stavmb.me',
      tooltip: 'OpenList 网盘服务',
      statusPageLink: 'https://halo.stavmb.me',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE', // ✅ 已加回
      },
    },

    {
      id: 'watch_monitor',
      name: '私人影院',
      method: 'GET',
      target: 'https://watch.stavmb.me',
      tooltip: 'LunaTV',
      statusPageLink: 'https://watch.stavmb.me',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE', // ✅ 已加回
      },
    },

    
    // 👇 新增的 AI API 监控配置 👇
//    {
//      id: 'ai_api_92',
//      name: 'AI API Service',
//      method: 'GET',
//      target: 'https://aichat92.stavmb.me',
//      tooltip: 'AI 接口服务节点',
//      statusPageLink: 'https://aichat92.stavmb.me',
      // 这里加上 404 是为了防止 API 根目录没有网页导致报错，
      // 只要返回 200 或 404 都算服务器在线。
//      expectedCodes: [200], 
//      timeout: 10000,
//      headers: {
//        'User-Agent': 'Uptimeflare',
//        Authorization: 'Bearer YOUR_TOKEN_HERE', // ✅ 这里也加上了
//      },
//    },
//    // 👆 新增结束 👆

  ],

  notification: {
    webhook: {
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      payloadType: 'x-www-form-urlencoded',
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
}

export const maintenances: MaintenanceConfig[] = []

// ----------------------
// Default export for Uptimeflare Worker
// ----------------------
export default {
  pageConfig,
  workerConfig,
  maintenances,
}
