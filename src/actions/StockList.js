import Axios from 'axios'
import {
  getGainers,
  getLosers,
  getMostActive,
  getIexVolume,
  getIexPercent,
  getInFocus
} from './iexApi.js'

export const storeStocksParam = (param) => {
  return {
    type: "STORE_STOCKS_PARAM",
    payload: param
  }
}

export const getInitStocks = () => {
  return async (dispatch, getState) => {
    const allLists = await Promise.all(
      [
        getGainers(),
        getLosers(),
        getMostActive(),
        getIexVolume(),
        getIexPercent(),
        getInFocus()
      ])
      const mergedLists = mergeArray(allLists)
      dispatch(storeStocksParam(mergedLists))
  }
}

const mergeArray = (array) => {
  return array.reduce(((acc, curr) => Object.assign(acc, curr)), {})
}
