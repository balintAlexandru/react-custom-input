import { configureStore } from '@reduxjs/toolkit'

import inputSlice from '../features/inputBasicSlice'

export const store = configureStore({
  reducer: {
    input:inputSlice,
    
  },
})