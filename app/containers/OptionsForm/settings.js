const settings = [
  {
    label: 'Display Amount',
    paramsKey: 'displayAmount',
    optionsList: [5, 10, 20, 50],
    defaultTo: 20,
  },
  {
    label: 'Rating',
    paramsKey: 'rating',
    optionsList: ['G', 'PG', 'PG-13', 'R', 'Unrated'],
    defaultTo: '',
  },
  {
    label: "Critic's Choice",
    paramsKey: 'isPick',
    optionsList: ['Only Picks', 'Only Ditches'],
    defaultTo: '',
  },
]

function generateDefaults(settings) {
  const defaults = settings.reduce((acc, { paramsKey, defaultTo }) => {
    acc[paramsKey] = defaultTo
    return acc
  }, {})
  return defaults
}

const defaults = generateDefaults(settings)

export { settings, defaults }
