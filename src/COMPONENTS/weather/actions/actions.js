import { actionCreator, requestCreator, successCreator } from '../../../utils';

export const setCurrentTemp = 'SET_CURRENT_TEMP';
export const setCurrentTempRequestAction = actionCreator(requestCreator(setCurrentTemp));
export const setCurrentTempSuccessAction = actionCreator(successCreator(setCurrentTemp));
