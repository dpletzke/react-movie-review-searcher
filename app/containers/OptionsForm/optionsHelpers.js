export default function mapClickHandlersToSettings(settings, setters) {
  const { setDisplayAmount, setRating, setIsPick } = setters

  const digestedSettings = settings.map(settingObj => {
    const { paramsKey } = settingObj
    if (paramsKey === 'displayAmount') {
      return { ...settingObj, clickHandler: setDisplayAmount }
    }
    if (paramsKey === 'rating') {
      return { ...settingObj, clickHandler: setRating }
    }
    if (paramsKey === 'isPick') {
      return { ...settingObj, clickHandler: setIsPick }
    }
    return { ...settingObj }
  })

  return digestedSettings
}
