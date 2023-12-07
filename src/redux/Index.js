import { configureStore } from '@reduxjs/toolkit';
import AdvertSlice from './AdvertSlice';
import UserSlice from './UserSlice';


export default configureStore({
    reducer: {
        advertElement: AdvertSlice,
        userElement: UserSlice
    }
})