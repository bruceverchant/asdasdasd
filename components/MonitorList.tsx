import { MonitorState, MonitorTarget } from '@/types/config'
import { Card, Center, Text, SimpleGrid, Title, Box } from '@mantine/core'
import MonitorDetail from './MonitorDetail'
import { pageConfig } from '@/uptime.config'

function countDownCount(state: MonitorState, ids: string[]) {
  let downCount = 0
  for (let id of ids) {
    if (state.incident[id] === undefined || state.incident[id].length === 0) {
      continue
    }

    if (state.incident[id].slice(-1)[0].end === undefined) {
      downCount++
    }
  }
  return downCount
}

function getStatusTextColor(state: MonitorState, ids: string[]) {
  let downCount = countDownCount(state, ids)
  if (downCount === 0) {
    return '#059669'
  } else if (downCount === ids.length) {
    return '#df484a'
  } else {
    return '#f29030'
  }
}

export default function MonitorList({
  monitors,
  state,
}: {
  monitors: MonitorTarget[]
  state: MonitorState
}) {
  const group = pageConfig.group
  const groupedMonitor = group && Object.keys(group).length > 0
  let content

  if (groupedMonitor) {
    // Grouped monitors
    content = (
      <Box>
        {Object.keys(group).map((groupName) => (
          <Box key={groupName} mt="xl">
            <Title order={3} mb="md" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {groupName}
              <Text
                fw={500}
                style={{
                  color: getStatusTextColor(state, group[groupName]),
                  fontSize: '1rem'
                }}
              >
                {group[groupName].length - countDownCount(state, group[groupName])}/
                {group[groupName].length} Operational
              </Text>
            </Title>
            <SimpleGrid
              cols={{ base: 1, sm: 2, md: 3 }}
              spacing="lg"
            >
              {monitors
                .filter((monitor) => group[groupName].includes(monitor.id))
                .sort((a, b) => group[groupName].indexOf(a.id) - group[groupName].indexOf(b.id))
                .map((monitor) => (
                  <Card key={monitor.id} shadow="sm" padding="lg" radius="md" withBorder>
                    <MonitorDetail monitor={monitor} state={state} />
                  </Card>
                ))}
            </SimpleGrid>
          </Box>
        ))}
      </Box>
    )
  } else {
    // Ungrouped monitors
    content = (
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing="lg"
          style={{ width: '100%' }}
        >
        {monitors.map((monitor) => (
            <Card key={monitor.id} shadow="sm" padding="lg" radius="md" withBorder>
                <MonitorDetail monitor={monitor} state={state} />
            </Card>
        ))}
        </SimpleGrid>
    )
  }

  return (
    <Center>
      <Box style={{ width: '80%', maxWidth: '1200px' }} mt="xl">
        {content}
      </Box>
    </Center>
  )
}
