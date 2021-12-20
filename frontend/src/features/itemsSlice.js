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
        countReduced(state, action){
            const name  = action.payload
            const existingItem = state.find((item) => item.name === name)
            if (existingItem) {
                if(existingItem.count > 0)
                    existingItem.count--
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
        itemRemove(state, action) {
            const name = action.payload
            return state.filter((item) => item.name !== name);
        }

    },
  })
export const { itemAdded, itemUpdated, countAdded,countReduced, itemRemove} = itemsSlice.actions
export default itemsSlice.reducer