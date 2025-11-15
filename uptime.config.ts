// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Stavan's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/systaven', label: 'GitHub' },
    { link: 'https://blog.stavmb.me/', label: 'Blog' },
    { link: 'mailto:bruceverchant@gmail.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
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

    // --- New Monitor 1: OpenList Halo 网盘 ---
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
      },
    },

    // --- New Monitor 2: AI Chat 网页 ---
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
      },
    },

    // Example TCP Monitor (Keep commented)
    // {
    //   id: 'test_tcp_monitor',
    //   name: 'Example TCP Monitor',
    //   method: 'TCP_PING',
    //   target: '1.2.3.4:22',
    //   tooltip: 'My production server SSH',
    //   statusPageLink: 'https://example.com',
    //   timeout: 5000,
    // },
  ],

  // [Optional] Notification settings
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

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
const maintenances: MaintenanceConfig[] = [
  // Example:
  // {
  //   id: 'maint_1',
  //   title: 'Server Upgrade',
  //   start: '2024-12-10T10:00:00Z',
  //   end: '2024-12-10T12:00:00Z',
  //   affectIds: ['foo_monitor', 'openlist_halo_monitor'],
  // },
]

// Export config
export default {
  pageConfig,
  workerConfig,
  maintenances,
}
