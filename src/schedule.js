export const TEAM = ['נועה', 'קרן', 'יובל', 'שירה']

export const DAYS = [
  { key: 'sun', label: 'ראשון', date: '7.6' },
  { key: 'mon', label: 'שני', date: '8.6' },
  { key: 'tue', label: 'שלישי', date: '9.6' },
  { key: 'wed', label: 'רביעי', date: '10.6' },
  { key: 'thu', label: 'חמישי', date: '11.6' },
  { key: 'fri', label: 'שישי', date: '12.6' },
]

const WEEKDAY_SLOTS = [
  '09:00–10:30',
  '10:30–12:00',
  '12:00–13:30',
  '13:30–15:00',
  '15:00–16:30',
]

const FRIDAY_SLOTS = [
  '09:00–10:30',
  '10:30–12:00',
]

export const SLOTS = DAYS.flatMap(day => {
  const times = day.key === 'fri' ? FRIDAY_SLOTS : WEEKDAY_SLOTS
  return times.map(time => ({
    id: `${day.key}-${time}`,
    dayKey: day.key,
    time,
  }))
})

export const MIN_SLOTS = 3
