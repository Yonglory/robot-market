import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        "name": "dummy robot",
        "image": "https://robohash.org/Quinn Corwin.png?size=120x120",
        "price": "211.39",
        "stocks": 5,
        "count": 0
    }
]
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        itemAdded: {
        reducer(state, action) {
          state.push(action.payload)
        },
        prepare(name, image, price, stocks) {
          return {
            payload: {
                name,
                image,
                price,
                stocks,
                "count": 0
            },
          }
        },
      },
      countAdded(state, action) {
        const name  = action.payload
        const existingItem = state.find((item) => item.name === name)
        if (existingItem) {
            existingItem.count++
        }
      },
      itemUpdated(state, action) {
        const { name, image, price, stocks } = action.payload
        const existingItem = state.find(item => item.name === name)
        if (existingItem) {
            existingItem.image = image
            existingItem.price = price
            existingItem.stocks = stocks
        }
    },
    },
  })
export const { itemAdded, itemUpdated, countAdded} = itemsSlice.actions
export default itemsSlice.reducer