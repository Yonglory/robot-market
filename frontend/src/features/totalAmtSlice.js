import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    totalAmt: 0
};

const totalAmtSlice = createSlice({
    name: 'totalAmt',
    initialState,
    reducers: {
        getTotalAmt(state,action){
            const {price, sum} = action.payload
            let updateTotal = 0;
            if(sum){
                updateTotal = state.totalAmt + price
            }else{
                updateTotal = state.totalAmt - price

            }
            state.totalAmt = updateTotal;
            console.log(state.totalAmt, updateTotal)

            // return updateTotal;
            // return state.map(v=> v.totalAmt = updateTotal);
        }
    }
})
export const {getTotalAmt} = totalAmtSlice.actions
export default totalAmtSlice.reducer