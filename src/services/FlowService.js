import api from './api'

const getFlows = async () => {
  const flows = await api.get('/flows')

  return flows
}

const getFlowScreens = async (flowID) => {
  const screens = await api.get(`flows/${flowID}/screens`)

  return screens
}

const getScreenFields = async (screenID) => {
  const fields = await api.get(`screens/${screenID}/fields`)

  return fields
}

export { getFlows, getFlowScreens, getScreenFields }
