import { configureStore } from '@reduxjs/toolkit';
import createHackthonReducer from './slicers/createHackathonSlice';

export const store = configureStore({
	reducer: {
		createHackthon: createHackthonReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
