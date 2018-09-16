import createReducer from '../helpers/createReducer'
import initialData from '../initialData';


const tasks = createReducer(initialData.stocks, {
  ['STORE_STOCKS_PARAM']: (state, action) => {
    return Object.assign({}, state, action.payload)
  },
})

export default tasks
