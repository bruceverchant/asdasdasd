import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

// ----------------------
// Named Export for Next.js
// ----------------------
export const pageConfig: PageConfig = {
  title: "Stavan's Status Page",
  links: [
    { link: 'https://github.com/systaven', label: 'GitHub' },
    { link: 'https://blog.stavmb.me/', label: 'Blog' },
    { link: 'mailto:bruceverchant@gmail.com', label: 'Email Me', highlight: true },
  ],
}

export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'foo_monitor',
      name: 'Stavmb blog',
      method: 'GET',
      target: 'https://blog.stavmb.me',
      tooltip: 'This is a tooltip for this monitor',
      statusPageLink: 'https://blog.stavmb.me',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
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
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    },

    {
      id: 'ai_chat_web_monitor',
      name: 'AI 聊天网页',
      method: 'GET',
      target: 'https://uowshmjf.usw.sealos.io',
      tooltip: 'AI 聊天服务',
      statusPageLink: 'https://uowshmjf.usw.sealos.io',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    },
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
