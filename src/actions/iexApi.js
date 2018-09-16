import Axios from 'axios'
const iexApi = 'https://api.iextrading.com/1.0'

export const getGainers = async () => {
    const {data} = await Axios.get(iexApi + '/stock/market/list/gainers')
    return {gainers: data}
}
export const getLosers = async () => {
    const {data} = await Axios.get(iexApi +'/stock/market/list/losers')
    return { losers: data }
}
export const getMostActive = async () => {
    const {data} = await Axios.get(iexApi + '/stock/market/list/mostactive')
    return { mostactive: data }
}
export const getIexVolume = async () => {
    const {data} = await Axios.get(iexApi + '/stock/market/list/iexvolume')
    return { iexvolume: data }
}
export const getIexPercent = async () => {
    const {data} = await Axios.get(iexApi + '/stock/market/list/iexpercent')
    return { iexpercent: data }
}
export const getInFocus = async () => {
    const {data} = await Axios.get(iexApi + '/stock/market/list/infocus')
    return { infocus: data }
}
