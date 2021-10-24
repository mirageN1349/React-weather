import { RootState } from './store';

export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;
