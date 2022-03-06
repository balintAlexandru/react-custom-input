import { configureStore } from '@reduxjs/toolkit'

import inputSlice from '../features/inputBasicSlice'
//test
export const store = configureStore({
  reducer: {
    input:inputSlice,
    
  },
})