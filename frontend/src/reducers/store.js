import { configureStore } from '@reduxjs/toolkit'

import itemsReducer from '../features/itemsSlice'
import totalAmtReducer from '../features/totalAmtSlice'

export default configureStore({
  reducer: {
    items: itemsReducer,
    totalAmt: totalAmtReducer
  },
})
