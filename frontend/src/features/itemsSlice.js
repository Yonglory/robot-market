import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        "name": "dummy robot",
        "image": "https://robohash.org/Quinn Corwin.png?size=120x120",
        "price": "211.39",
        "stocks": 5
    }
]

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    itemAdded(state, action) {
        state.push(action.payload)
      }
  }
})
export const { itemAdded } = itemsSlice.actions
export default itemsSlice.reducer